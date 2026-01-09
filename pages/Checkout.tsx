import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { CreditCard, CheckCircle, Send, Loader2 } from 'lucide-react';

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
  const total = subtotal + taxAmount;

  const [formData, setFormData] = useState({
    name: '',
    idRuc: '',      // Mapped to IDRUC
    email: '',      // Mapped to CORREO
    phone: '',      // Mapped to CELULAR
    landline: '',   // Mapped to TELEFONO
    address: '',    // Mapped to DIRECCION
    province: '',   // Mapped to PROVINCIA
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

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
    
    // Construcción del Payload con las claves exactas solicitadas
    const payload = {
      NOMBRE: formData.name,
      IDRUC: formData.idRuc,
      TELEFONO: formData.landline || "N/A", // Si está vacío se envía N/A
      CELULAR: formData.phone,
      CORREO: formData.email,
      DIRECCION: formData.address,
      PROVINCIA: formData.province,
      PRODUCTO: productsSummary,
      MONTO: total.toFixed(2) // Total now includes ITBMS
    };

    try {
      // Envío a Google Apps Script (URL ACTUALIZADA)
      // mode: 'no-cors' es necesario para enviar datos a GAS desde el navegador sin errores CORS.
      // La respuesta será opaca (status 0), por lo que asumimos éxito si no hay excepción de red.
      await fetch("https://script.google.com/macros/s/AKfycbyfOz-pedsY0LInRiYx-RHXhkW302NqhcOMcN6nOJQpe4CWSEiUQn-aZE-ep-T5xuooaw/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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

  if (cart.length === 0 && !orderComplete) {
     navigate('/catalog');
     return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center animate-fade-in">
          <div className={`w-20 h-20 ${theme.bg} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Pedido Recibido!</h2>
          <p className="text-gray-500 mb-8">
            Hemos registrado tu pedido correctamente. Te contactaremos pronto a tu celular o correo para coordinar el pago y la entrega.
          </p>
          <button
            onClick={() => navigate('/')}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${theme.bg} ${theme.hover} transition-colors`}
          >
            Volver al Inicio
          </button>
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
                   <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
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
                <div className="text-center text-xs text-gray-500">
                   Al confirmar, enviaremos los datos de tu pedido para procesar el pago y envío.
                </div>
                
                <button
                   type="button"
                   disabled
                   className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed opacity-50"
                   title="Próximamente"
                >
                  <CreditCard size={20} /> Pago con Tarjeta (Próximamente)
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;