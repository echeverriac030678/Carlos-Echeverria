import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, getThemeClasses } = useStore();
  const theme = getThemeClasses();
  
  const hasVariants = product.variants && product.variants.length > 0;
  
  // Calculate display price (lowest if variants, else main price)
  const displayPrice = hasVariants 
    ? Math.min(...product.variants!.map(v => v.price))
    : product.price;

  // Calculate display stock
  const displayStock = hasVariants
    ? product.variants!.reduce((acc, v) => acc + v.stock, 0)
    : product.stock;

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400?text=Sin+Imagen'; }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {displayStock <= 5 && displayStock > 0 && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            Pocas unidades
          </span>
        )}
        {displayStock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold px-3 py-1 border-2 border-white rounded">AGOTADO</span>
          </div>
        )}
      </Link>

      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate group-hover:text-gray-600">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            {hasVariants && <span className="text-xs text-gray-500">Desde</span>}
            <span className={`text-xl font-bold ${theme.text}`}>
              ${displayPrice.toFixed(2)}
            </span>
          </div>
          
          <button
            onClick={() => {
              // If variants exist, adding directly from card adds the first variant or redirects? 
              // Better to redirect to details if variants exist to avoid confusion
              if (hasVariants) {
                 window.location.hash = `/product/${product.id}`;
              } else {
                 addToCart(product, 1);
              }
            }}
            disabled={displayStock === 0}
            className={`p-2 rounded-full ${theme.bg} text-white ${theme.hover} transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Añadir al carrito"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;