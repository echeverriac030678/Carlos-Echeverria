import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ArrowLeft, CheckCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, addToCart, getThemeClasses } = useStore();
  const theme = getThemeClasses();

  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Producto no encontrado</h2>
          <button onClick={() => navigate('/catalog')} className={`mt-4 ${theme.text} hover:underline`}>
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600?text=Sin+Imagen'; }}
                className="max-h-[500px] w-full object-contain mix-blend-multiply"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${theme.bg} bg-opacity-10 ${theme.text} w-fit mb-4`}>
                {product.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex items-end gap-4 mb-8">
                <span className={`text-4xl font-bold ${theme.text}`}>
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500 mb-2">/ unidad</span>
              </div>

              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={decrement}
                      className="px-4 py-2 hover:bg-gray-50 text-gray-600 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none bg-white text-gray-900"
                    />
                    <button 
                      onClick={increment}
                      className="px-4 py-2 hover:bg-gray-50 text-gray-600 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  
                  {product.stock > 0 ? (
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <CheckCircle size={16} className="mr-1" /> Disponibilidad inmediata
                    </span>
                  ) : (
                    <span className="text-red-500 text-sm font-medium">Agotado</span>
                  )}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${theme.bg} ${theme.hover}`}
              >
                <ShoppingCart size={24} />
                {showSuccess ? '¡Añadido!' : 'Añadir al Carrito'}
              </button>

              {showSuccess && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 animate-fade-in flex items-center justify-center">
                  <CheckCircle size={20} className="mr-2" />
                  Producto añadido correctamente
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;