import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { CreditCard, CheckCircle, Send, Loader2, Banknote, ExternalLink, MessageSquare } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, clearCart, getThemeClasses, siteConfig } = useStore();
  const theme = getThemeClasses();
  const navigate = useNavigate();
  
  // Calculate Totals including tax
  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.price;
    return sum + (price * item.quantity);
  }, 0);
  const taxRate = siteConfig.taxRate || 7;
  const taxAmount = subtotal * (taxRate / 100);
  const currentTotal = subtotal + taxAmount;
  
  const YAPPY_LOGO_URL = "https://yappyazipd9bfe9e9311.blob.core.windows.net/blobyappyazipd9bfe9e9311/wp-content/uploads/2024/11/light-300x81.png";
  // Imagen específica para la pantalla de éxito de Yappy
  const YAPPY_SUCCESS_IMG = "https://desbrozadora.my.canva.site/dag98-jafq8/_assets/media/976bb90d6fd0ca7399422575b5408a77.png";
  
  // Imagen para la pantalla de éxito de ACH (Cuenta de Ahorros) - ACTUALIZADA
  const ACH_SUCCESS_IMG = "https://desbrozadora.my.canva.site/dag98zdgbrs/_assets/media/a67dc6c9e3c7bddf039268cc53e075ca.png";

  const YAPPY_PAYMENT_LINK = "https://link.yappy.com.pa/stc/Yna%2BktpPytx9gKvVNgjKMxSk16Vdr9BZvaim7nGhYrA%3D";
  const STORE_PHONE = "50767539193"; 

  // URL de tu Google Apps Script (Asegúrate de que sea la versión "exec" y no "dev")
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBRc3yZdqW1bjbahJZmbf9GSX2iotTQH1AFoyGOkrEkU2qbG9ab8MiWOVzXyVJApDsPA/exec";

  const [formData, setFormData] = useState({
    name: '',
    idRuc: '',
    email: '',
    phone: '',
    landline: '',
    address: '',
    province: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'ACH' | 'YAPPY'>('ACH');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  // Guardamos datos finales para la pantalla de éxito
  const [finalCart, setFinalCart] = useState(cart);
  const [finalFormData, setFinalFormData] = useState(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setFinalTotal(currentTotal);
    setFinalCart(cart);
    setFinalFormData(formData);

    const productsSummary = cart.map(item => {
        const variantInfo = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
        return `${item.quantity}x ${item.name}${variantInfo}`;
    }).join(', ');
    
    // Payload para Google Script
    const payload = {
      NOMBRE: formData.name,
      IDRUC: formData.idRuc,
      TELEFONO: formData.landline || "N/A",
      CELULAR: formData.phone,
      CORREO: formData.email,
      DIRECCION: formData.address,
      PROVINCIA: formData.province,
      PRODUCTO: productsSummary,
      MONTO: currentTotal.toFixed(2),
      METODO_PAGO: paymentMethod === 'YAPPY' ? 'YAPPY' : 'TRANSFERENCIA/ACH',
      FECHA: new Date().toLocaleString()
    };
    
    console.log("Enviando datos a Google Script...", payload);

    try {
      // IMPORTANTE: 
      // 1. method: 'POST'
      // 2. mode: 'no-cors' (Evita errores de CORS en el navegador, aunque no permite leer la respuesta)
      // 3. headers: 'text/plain' (Evita preflight OPTIONS que Google Script no maneja bien)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(payload),
      });

      // Al usar no-cors, no podemos saber si falló el script internamente, 
      // así que asumimos éxito si la red no falló.
      clearCart();
      setOrderComplete(true);

      if (paymentMethod === 'YAPPY') {
        // Abrir Yappy en nueva pestaña automáticamente
        setTimeout(() => {
            window.open(YAPPY_PAYMENT_LINK, '_blank');
        }, 500);
      }

    } catch (error) {
      console.error("Error de red al enviar el pedido:", error);
      alert("Hubo un error de conexión. Por favor, toma una captura y contáctanos por WhatsApp.");
      // Aún mostramos éxito en la UI para que el cliente pueda ver el botón de WhatsApp
      setOrderComplete(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleWhatsAppNotify = () => {
    const productsList = finalCart.map(item => {
        const variantInfo = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
        return `• ${item.quantity}x ${item.name}${variantInfo}`;
    }).join('\n');

    let intro = "";
    let footer = "";

    if (paymentMethod === 'YAPPY') {
      intro = "Hola IDO Agro, he realizado un pago por Yappy en la web.";
      footer = "Adjunto mi comprobante de pago.";
    } else {
      intro = "Hola IDO Agro, he realizado un pedido con pago por Transferencia/ACH.";
      footer = "Adjunto mi comprobante de transferencia para confirmar el despacho.";
    }

    const msg = `${intro}
    
👤 Cliente: ${finalFormData.name}
💰 Total: $${finalTotal.toFixed(2)}
📧 Correo: ${finalFormData.email}

🛒 Pedido:
${productsList}

${footer}`;
    
    window.open(`https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (cart.length === 0 && !orderComplete && !isProcessing) {
     navigate('/catalog');
     return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center animate-fade-in">
          
          {/* Header Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {paymentMethod === 'YAPPY' ? 'Realizar Pago' : '¡Pedido Registrado!'}
          </h2>
          
          {paymentMethod === 'YAPPY' ? (
            /* YAPPY SUCCESS SCREEN */
            <>
                <div className="flex items-center justify-center mx-auto mb-6 w-48">
                    <img src={YAPPY_SUCCESS_IMG} alt="Confirmación Yappy" className="w-full h-auto object-contain" />
                </div>
                
                <div className="space-y-4">
                <a 
                    href={YAPPY_PAYMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                    <span>Pagar ${finalTotal.toFixed(2)} en Yappy</span>
                    <ExternalLink size={20} />
                </a>

                <div className="bg-green-50 border border-green-100 p-4 rounded-xl">
                    <p className="text-sm text-green-800 mb-3 font-medium">Una vez pagado, envía el comprobante:</p>
                    <button
                    onClick={handleWhatsAppNotify}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors animate-pulse"
                    >
                    <MessageSquare size={20} /> Enviar Pedido a WhatsApp
                    </button>
                </div>
                </div>
            </>
          ) : (
            /* ACH SUCCESS SCREEN (IMAGEN GRANDE) */
            <div className="space-y-6">
               <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <img 
                    src={ACH_SUCCESS_IMG} 
                    alt="Datos Bancarios IDO" 
                    className="w-full h-auto object-contain" 
                  />
               </div>
               
               <p className="text-sm text-gray-600 mb-2">
                 Realiza la transferencia y presiona el botón para enviar el comprobante.
               </p>

               <button
                onClick={handleWhatsAppNotify}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg animate-pulse"
              >
                <MessageSquare size={20} /> Enviar Pedido y Comprobante
              </button>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-gray-100">
            <button
                onClick={() => navigate('/')}
                className={`w-full py-3 px-4 rounded-lg text-gray-500 font-medium hover:text-gray-900 transition-colors`}
            >
                Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Finalizar Compra</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleOrderSubmit} className="space-y-6">
              
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="idRuc" className="block text-sm font-medium text-gray-700 mb-1">Cédula o RUC *</label>
                  <input
                    type="text"
                    name="idRuc"
                    required
                    placeholder="Ej: 8-888-888"
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.idRuc}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Celular *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="landline" className="block text-sm font-medium text-gray-700 mb-1">Teléfono Fijo (Opcional)</label>
                  <input
                    type="tel"
                    name="landline"
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.landline}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Para notificaciones del pedido"
                  className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección Exacta *</label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">Provincia *</label>
                <input
                  type="text"
                  name="province"
                  required
                  placeholder="Ej: Panamá, Chiriquí, etc."
                  className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.province}
                  onChange={handleChange}
                />
              </div>

              {/* Payment Method Selector */}
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-lg font-bold text-gray-900 mb-4">Método de Pago</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setPaymentMethod('ACH')}
                    className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all ${
                      paymentMethod === 'ACH' 
                        ? `border-${siteConfig.primaryColor}-500 bg-${siteConfig.primaryColor}-50 ring-1 ring-${siteConfig.primaryColor}-500` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                      <Banknote size={24} />
                    </div>
                    <div>
                      <span className="block font-bold text-gray-800">Transferencia / ACH</span>
                      <span className="text-xs text-gray-500">Coordinar pago por WhatsApp</span>
                    </div>
                    {paymentMethod === 'ACH' && <CheckCircle size={20} className={`ml-auto ${theme.text}`} />}
                  </div>

                  <div 
                    onClick={() => setPaymentMethod('YAPPY')}
                    className={`cursor-pointer border rounded-xl p-4 flex items-center gap-4 transition-all ${
                      paymentMethod === 'YAPPY' 
                        ? 'border-[#FF6B00] bg-orange-50 ring-1 ring-[#FF6B00]' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex-shrink-0">
                       <img src={YAPPY_LOGO_URL} alt="Yappy" className="h-6 w-auto object-contain" />
                    </div>
                    <div className="flex-grow pl-2 border-l border-gray-200 ml-2">
                      <span className="block font-bold text-gray-800 text-sm">Pago rápido</span>
                      <span className="text-xs text-gray-500">Directorio: @idopanama</span>
                    </div>
                    {paymentMethod === 'YAPPY' && <CheckCircle size={20} className="ml-auto text-[#FF6B00]" />}
                  </div>
                </div>
              </div>

              {/* Totals */}
              <div className="bg-gray-50 p-4 rounded-lg mt-6 space-y-2">
                <div className="flex justify-between items-center text-gray-600 text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 text-sm">
                  <span>ITBMS ({taxRate}%):</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 pt-2 mt-2">
                   <span className="font-semibold text-gray-700">Total a Pagar:</span>
                   <span className="text-2xl font-bold text-gray-900">${currentTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 space-y-3">
                {paymentMethod === 'YAPPY' ? (
                   <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full flex items-center justify-center p-2 rounded-xl border border-transparent hover:border-gray-200 transition-all hover:bg-gray-50 disabled:opacity-70 group"
                  >
                    {isProcessing ? (
                       <div className="bg-[#FF6B00] text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                        <Loader2 size={24} className="animate-spin" /> Procesando Pedido...
                       </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 w-full">
                         <img 
                          src={YAPPY_LOGO_URL} 
                          alt="Pagar con Yappy" 
                          className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                          <span>Click para confirmar y pagar</span>
                          <ExternalLink size={12} />
                        </div>
                      </div>
                    )}
                  </button>
                ) : (
                   <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full flex items-center justify-center gap-2 ${theme.bg} ${theme.hover} text-white py-4 rounded-xl font-bold text-lg shadow-md transition-all disabled:opacity-70`}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 size={24} className="animate-spin" /> Procesando...
                      </>
                    ) : (
                      <>
                        <Send size={24} /> Confirmar Pedido
                      </>
                    )}
                  </button>
                )}

                <div className="text-center text-xs text-gray-500">
                   {paymentMethod === 'YAPPY' 
                     ? "Se abrirá una nueva ventana para completar el pago en Yappy." 
                     : "Al confirmar, enviaremos los datos de tu pedido para procesar el despacho."}
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;