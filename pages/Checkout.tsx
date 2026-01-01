import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { MessageCircle, CreditCard, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, clearCart, getThemeClasses, siteConfig } = useStore();
  const theme = getThemeClasses();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Build WhatsApp Message
    let message = `*Nuevo Pedido IDO*\n\n`;
    message += `*Cliente:* ${formData.name}\n`;
    message += `*Dirección:* ${formData.address}, ${formData.city}\n\n`;
    message += `*Detalle:*\n`;
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.name}: $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*TOTAL: $${total.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.contactPhone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

    // Simulate slight delay for UX
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setOrderComplete(true);
      clearCart();
      setIsProcessing(false);
    }, 1500);
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Pedido Solicitado!</h2>
          <p className="text-gray-500 mb-8">
            Hemos redirigido tu pedido a WhatsApp para coordinar el pago y envío.
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
            <form onSubmit={handleWhatsAppOrder} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
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
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección de Entrega</label>
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
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ciudad / Estado</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full rounded-lg border-gray-300 border px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mt-6">
                <span className="font-semibold text-gray-700">Total a Pagar:</span>
                <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>

              <div className="pt-4 space-y-3">
                 <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg shadow-md transition-all disabled:opacity-70"
                >
                  {isProcessing ? 'Procesando...' : (
                    <>
                      <MessageCircle size={24} /> Pedir por WhatsApp
                    </>
                  )}
                </button>
                <div className="text-center text-xs text-gray-500">
                   Al hacer clic, se abrirá WhatsApp con los detalles de tu pedido.
                </div>
                
                <button
                   type="button"
                   disabled
                   className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed"
                   title="Integración Stripe/PayPal disponible en versión completa"
                >
                  <CreditCard size={20} /> Pagar con Tarjeta (Próximamente)
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