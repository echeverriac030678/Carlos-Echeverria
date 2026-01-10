import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Tractor } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Navbar: React.FC = () => {
  const { cart, siteConfig, getThemeClasses } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const theme = getThemeClasses();
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Catálogo', path: '/catalog' },
    { name: 'Contacto', path: '#contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Ensure default height if not present in config
  const logoHeight = siteConfig.logoHeight || 40;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {siteConfig.logoUrl ? (
                <img 
                  src={siteConfig.logoUrl} 
                  alt="IDO Agro Logo" 
                  style={{ height: `${logoHeight}px` }}
                  className="w-auto object-contain transition-all duration-300"
                  onError={(e) => {
                     // Fallback if image fails, though we ideally want to show the text in that case
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : (
                <>
                  <div className={`${theme.bg} text-white p-2 rounded-lg`}>
                    <Tractor size={24} />
                  </div>
                  <span className={`font-bold text-xl tracking-tight text-gray-800`}>
                    IDO <span className={`${theme.text}`}>Agro</span>
                  </span>
                </>
              )}
              {/* Fallback element hidden by default if logo exists */}
              {siteConfig.logoUrl && (
                <div className="hidden flex items-center gap-2">
                  <div className={`${theme.bg} text-white p-2 rounded-lg`}>
                    <Tractor size={24} />
                  </div>
                  <span className={`font-bold text-xl tracking-tight text-gray-800`}>
                    IDO <span className={`${theme.text}`}>Agro</span>
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? `${theme.text} bg-gray-50`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/cart"
              className={`relative p-2 text-gray-600 hover:text-gray-900 transition-colors`}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 ${theme.bg} rounded-full`}>
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
             <Link
              to="/cart"
              className="relative p-2 text-gray-600"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 ${theme.bg} rounded-full`}>
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? `${theme.text} bg-gray-50`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;