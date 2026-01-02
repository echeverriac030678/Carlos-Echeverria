import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Instagram, Facebook, Mail, Tractor } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Footer: React.FC = () => {
  const { siteConfig, getThemeClasses } = useStore();
  const theme = getThemeClasses();

  // Default value for footer logo height if not set
  const footerLogoHeight = siteConfig.footerLogoHeight || 60;

  // Use config quickLinks or fallback if empty (backward compatibility)
  const quickLinks = siteConfig.quickLinks && siteConfig.quickLinks.length > 0 ? siteConfig.quickLinks : [
    { text: "Inicio", url: "/" },
    { text: "Catálogo de Productos", url: "/catalog" },
    { text: "Mi Carrito", url: "/cart" },
    { text: "Tornillería al Mayor", url: "/catalog?category=Tornillería" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="mb-4">
               {siteConfig.logoUrl ? (
                 <img 
                   src={siteConfig.logoUrl} 
                   alt="IDO Agro Logo" 
                   style={{ height: `${footerLogoHeight}px` }}
                   className="w-auto object-contain brightness-0 invert opacity-90"
                   onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
               ) : (
                 <div className="flex items-center gap-2 text-white">
                   <Tractor size={32} />
                   <span className="font-bold text-2xl">IDO Agro</span>
                 </div>
               )}
               {/* Fallback if logo fails */}
               {siteConfig.logoUrl && (
                 <div className="hidden flex items-center gap-2 text-white">
                   <Tractor size={32} />
                   <span className="font-bold text-2xl">IDO Agro</span>
                 </div>
               )}
            </div>

            <p className="text-sm leading-relaxed mb-4">
              Expertos en maquinaria agrícola, repuestos y tornillería industrial. 
              Calidad garantizada para tu trabajo de campo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ido.pa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
                aria-label="Visitar Instagram"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a 
                href="mailto:info@idopa.shop" 
                className="hover:text-white transition-colors"
                aria-label="Enviar correo"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.url.startsWith('/') ? (
                    <Link to={link.url} className="hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  ) : (
                    <a href={link.url} className="hover:text-white transition-colors">
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: {siteConfig.contactEmail}</li>
              <li>Teléfono: {siteConfig.contactPhone}</li>
              <li>Dirección: {siteConfig.address || "Zona Industrial II, Galpón 4-A"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} IDO. Todos los derechos reservados.
          </p>
          
          {/* Admin Login Link (Subtle) */}
          <Link to="/admin" className="mt-4 md:mt-0 flex items-center text-xs text-gray-600 hover:text-gray-400 transition-colors">
            <Lock size={12} className="mr-1" /> Acceso Administrativo
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;