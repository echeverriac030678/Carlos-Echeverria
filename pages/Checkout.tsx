import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { CreditCard, CheckCircle, Send, Loader2, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';

const Checkout: React.FC = () => {
  const { cart, clearCart, getThemeClasses, siteConfig } = useStore();
  const theme = getThemeClasses();
  const navigate = useNavigate();

  // Enlace de pago Yappy
  const YAPPY_URL = "https://link.yappy.com.pa/stc/Yna%2BktpPytx9gKvVNgjKMxSk16Vdr9BZvaim7nGhYrA%3D";
  
  // Calculate Totals including tax based on current cart
  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.price;
    return sum + (price * item.quantity);
  }, 0);
  const taxRate = siteConfig.taxRate || 7;
  const taxAmount = subtotal * (taxRate / 100);
  const currentTotal = subtotal + taxAmount;

  const [formData, setFormData] = useState({
    name: '',
    idRuc: '',      // Mapped to IDRUC
    email: '',      // Mapped to CORREO
    phone: '',      // Mapped to CELULAR
    landline: '',   // Mapped to TELEFONO
    address: '',    // Mapped to DIRECCION
    province: '',   // Mapped to PROVINCIA
  });

  const [paymentMethod, setPaymentMethod] = useState<'yappy' | 'ach'>('yappy');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Estado para guardar los detalles del pedido confirmado
  const [lastOrder, setLastOrder] = useState<{
    items: CartItem[];
    total: number;
    customerName: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Preparar el resumen de productos
    const productsSummary = cart.map(item => {
        const variantInfo = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
        return `${item.quantity}x ${item.name}${variantInfo}`;
    }).join(', ');
    
    // Mapeo legible del método de pago
    const paymentLabel = {
      yappy: 'Yappy',
      ach: 'Transferencia ACH'
    }[paymentMethod];

    // Construcción del Payload
    const payload = {
      NOMBRE: formData.name,
      IDRUC: formData.idRuc,
      TELEFONO: formData.landline || "N/A",
      CELULAR: formData.phone,
      CORREO: formData.email,
      DIRECCION: formData.address,
      PROVINCIA: formData.province,
      PRODUCTO: productsSummary,
      METODO_PAGO: paymentLabel,
      MONTO: currentTotal.toFixed(2)
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyfOz-pedsY0LInRiYx-RHXhkW302NqhcOMcN6nOJQpe4CWSEiUQn-aZE-ep-T5xuooaw/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Guardar detalles para la pantalla de confirmación antes de limpiar
      setLastOrder({
        items: [...cart],
        total: currentTotal,
        customerName: formData.name
      });

      setOrderComplete(true);
      clearCart();

    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      alert("Hubo un error al conectar con el servidor. Por favor intenta nuevamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copiado: ${text}`);
  };

  const getWhatsAppLink = () => {
    if (!lastOrder) return "#";

    const itemsList = lastOrder.items.map(item => {
        const variantInfo = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
        return `- ${item.quantity}x ${item.name}${variantInfo}`;
    }).join('\n');

    const message = `Hola IDO Agro, acabo de realizar un pedido:
    
*Cliente:* ${lastOrder.customerName}
*Total:* $${lastOrder.total.toFixed(2)}

*Productos:*
${itemsList}

Adjunto mi comprobante de pago para procesar el envío.`;

    return `https://wa.me/50767539193?text=${encodeURIComponent(message)}`;
  };

  if (cart.length === 0 && !orderComplete) {
     return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">No hay productos en el carrito</h2>
                <button onClick={() => navigate('/catalog')} className={`${theme.text} hover:underline`}>Ir al catálogo</button>
            </div>
        </div>
     );
  }

  if (orderComplete && lastOrder) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center animate-fade-in">
          <div className={`w-20 h-20 ${theme.bg} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Pedido Recibido!</h2>
          
          {paymentMethod === 'yappy' ? (
             <div className="mb-6">
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4 text-sm text-blue-800">
                  <p><strong>Nota Importante:</strong> Por seguridad, Yappy requiere que inicies el pago manualmente.</p>
               </div>
               <p className="text-gray-500 text-sm mb-4">
                 Haz clic en el botón para pagar <strong>${lastOrder.total.toFixed(2)}</strong>.
               </p>
               <a 
                 href={YAPPY_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-3 px-4 rounded-lg text-white font-bold bg-[#86D2E6] hover:bg-[#6CbCD0] transition-colors flex items-center justify-center gap-2 mb-2 shadow-md"
               >
                 Pagar en Yappy <ExternalLink size={18} />
               </a>
             </div>
          ) : (
            <p className="text-gray-500 mb-6">
              Hemos registrado tu pedido correctamente por <strong>${lastOrder.total.toFixed(2)}</strong>.
            </p>
          )}

          {/* Botón WhatsApp */}
          <div className="mb-8 border-t border-gray-100 pt-6">
            <p className="text-gray-600 text-sm mb-3">
              Para agilizar tu envío, por favor envíanos el comprobante de pago vía WhatsApp:
            </p>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg text-white font-bold bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle size={20} /> Enviar Comprobante
            </a>
          </div>

          <button
            onClick={() => navigate('/')}
            className={`w-full py-3 px-4 rounded-lg text-gray-600 font-medium bg-gray-100 hover:bg-gray-200 transition-colors`}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Finalizar Compra</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Formulario */}
          <div className="md:col-span-7 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <CheckCircle size={20} className={theme.text} /> Datos del Cliente
              </h2>
              <form id="checkout-form" onSubmit={handleOrderSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
                    <input type="text" name="name" required className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cédula / RUC *</label>
                      <input type="text" name="idRuc" required className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.idRuc} onChange={handleChange} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Celular *</label>
                        <input type="tel" name="phone" required className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
                    <input type="email" name="email" required className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección de Entrega *</label>
                    <textarea name="address" required rows={2} className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.address} onChange={handleChange}></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Provincia *</label>
                        <input type="text" name="province" required className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.province} onChange={handleChange} />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tel. Fijo (Opcional)</label>
                        <input type="tel" name="landline" className="w-full rounded-lg border-gray-300 border px-3 py-2 !bg-white !text-black focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm" value={formData.landline} onChange={handleChange} />
                     </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Selección de Método de Pago */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <CreditCard size={20} className={theme.text} /> Método de Pago
              </h2>
              
              <div className="space-y-4">
                {/* Opción Yappy */}
                <div 
                  onClick={() => setPaymentMethod('yappy')}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex items-start gap-4 transition-all ${paymentMethod === 'yappy' ? `${theme.border} bg-emerald-50` : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden p-1">
                      <img 
                        src="https://desbrozadora.my.canva.site/dag98-jafq8/_assets/media/976bb90d6fd0ca7399422575b5408a77.png" 
                        alt="Yappy" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">Yappy</h3>
                    <p className="text-sm text-gray-500">Paga rápido usando el app.</p>
                    {paymentMethod === 'yappy' && (
                      <div className="mt-3 bg-white p-3 rounded-lg border border-emerald-100 text-sm animate-fade-in">
                        <p className="text-xs text-gray-500">Al confirmar, se te proporcionará un botón seguro para pagar <strong>${currentTotal.toFixed(2)}</strong>.</p>
                      </div>
                    )}
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${paymentMethod === 'yappy' ? `border-emerald-500` : 'border-gray-300'}`}>
                    {paymentMethod === 'yappy' && <div className="w-3 h-3 rounded-full bg-emerald-500" />}
                  </div>
                </div>

                {/* Opción ACH */}
                <div 
                  onClick={() => setPaymentMethod('ach')}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex items-start gap-4 transition-all ${paymentMethod === 'ach' ? `${theme.border} bg-blue-50` : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <div className="flex-shrink-0">
                     <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden p-1">
                        <img 
                           src="https://www.bgeneral.com/wp-content/uploads/2023/06/Yappy%20App%20(3)-400x400.png" 
                           alt="Banco General" 
                           className="w-full h-full object-contain"
                        />
                     </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">Transferencia Bancaria (ACH)</h3>
                    <p className="text-sm text-gray-500">Banco General.</p>
                    {paymentMethod === 'ach' && (
                      <div className="mt-3 bg-white p-3 rounded-lg border border-blue-100 text-sm space-y-2 animate-fade-in">
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Banco</p>
                          <p className="font-bold text-gray-800">Banco General</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Tipo de Cuenta</p>
                          <p className="font-bold text-gray-800">Ahorro</p>
                        </div>
                        <div>
                           <p className="text-xs text-gray-500 uppercase">Número de Cuenta</p>
                           <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-gray-800">04-57-96-792009-9</span>
                              <button onClick={() => copyToClipboard('04-57-96-792009-9')} className="text-gray-400 hover:text-blue-600"><Copy size={14}/></button>
                           </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase">Nombre</p>
                          <p className="font-bold text-gray-800">Inversiones y Desarrollo Original</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${paymentMethod === 'ach' ? `border-emerald-500` : 'border-gray-300'}`}>
                    {paymentMethod === 'ach' && <div className="w-3 h-3 rounded-full bg-emerald-500" />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen Lateral */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                {cart.map((item) => (
                   <div key={`${item.id}-${item.selectedVariant?.id}`} className="flex justify-between items-start text-sm">
                      <div className="text-gray-600">
                        <span className="font-bold text-gray-800">{item.quantity}x</span> {item.name}
                        {item.selectedVariant && <span className="text-xs text-gray-500 block">({item.selectedVariant.name})</span>}
                      </div>
                      <span className="font-medium text-gray-900">
                        ${((item.selectedVariant ? item.selectedVariant.price : item.price) * item.quantity).toFixed(2)}
                      </span>
                   </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>ITBMS ({taxRate}%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total a Pagar</span>
                  <span>${currentTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                form="checkout-form"
                type="submit"
                disabled={isProcessing}
                className={`w-full mt-6 py-4 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 ${theme.bg} ${theme.hover} transition-all disabled:opacity-70 transform active:scale-95`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={24} className="animate-spin" /> Procesando...
                  </>
                ) : (
                  <>
                    <Send size={20} /> {paymentMethod === 'yappy' ? 'Ir a Pagar' : 'Confirmar Pedido'}
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                Al confirmar, aceptas que tus datos serán enviados para procesar la entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;