import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Cart: React.FC = () => {
  const { cart, updateCartQuantity, removeFromCart, getThemeClasses, siteConfig } = useStore();
  const theme = getThemeClasses();
  const navigate = useNavigate();

  // Price calculation handles both base products and variants
  const subtotal = cart.reduce((sum, item) => {
    const price = item.selectedVariant ? item.selectedVariant.price : item.price;
    return sum + (price * item.quantity);
  }, 0);

  // Calculate tax (ITBMS)
  const taxRate = siteConfig.taxRate || 7; // Default to 7% if not set
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <ShoppingBag size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-8">Parece que aún no has añadido productos.</p>
          <button
            onClick={() => navigate('/catalog')}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium ${theme.bg} ${theme.hover} transition-colors`}
          >
            Explorar Catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tu Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {cart.map((item, index) => {
                  const currentPrice = item.selectedVariant ? item.selectedVariant.price : item.price;
                  // Use composite key if variant exists for list rendering
                  const key = item.selectedVariant ? `${item.id}-${item.selectedVariant.id}` : item.id;
                  
                  return (
                    <li key={key} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100?text=Sin+Imagen'; }}
                        className="w-24 h-24 object-cover rounded-lg bg-gray-50 border border-gray-200"
                      />
                      
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        {item.selectedVariant && (
                          <div className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded w-fit mx-auto sm:mx-0 mt-1">
                            {item.selectedVariant.name}
                          </div>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                        <p className={`text-lg font-bold ${theme.text} mt-1 sm:hidden`}>
                          ${(currentPrice * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button 
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1, item.selectedVariant?.id)}
                            className="p-2 hover:bg-gray-50 text-gray-600 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1, item.selectedVariant?.id)}
                            className="p-2 hover:bg-gray-50 text-gray-600 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedVariant?.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      
                      <div className="hidden sm:block text-right w-24">
                        <p className="text-lg font-bold text-gray-900">${(currentPrice * item.quantity).toFixed(2)}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>ITBMS ({taxRate}%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className={`w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] ${theme.bg} ${theme.hover}`}
              >
                Proceder al Pago <ArrowRight size={20} />
              </Link>

              <div className="mt-6 text-center">
                <Link to="/catalog" className={`text-sm ${theme.text} hover:underline`}>
                  Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;