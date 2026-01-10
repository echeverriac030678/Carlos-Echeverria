import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Social: React.FC = () => {
  const { getThemeClasses, siteConfig } = useStore();
  const theme = getThemeClasses();

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Instagram Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
           <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex-shrink-0">
                 <div className="w-full h-full bg-white rounded-full p-1">
                    <img 
                      src={siteConfig.logoUrl || "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&q=80&w=200"} 
                      alt="Profile" 
                      className="w-full h-full object-contain rounded-full border border-gray-100"
                    />
                 </div>
              </div>

              {/* Profile Info */}
              <div className="text-center md:text-left flex-1">
                 <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                    <h1 className="text-2xl font-light text-gray-800">ido.pa</h1>
                    <div className="flex gap-2">
                       <a 
                         href="https://www.instagram.com/ido.pa" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className={`px-6 py-1.5 ${theme.bg} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
                       >
                         <Instagram size={18} /> Seguir
                       </a>
                       <a 
                         href={`https://wa.me/${siteConfig.contactPhone.replace(/[^0-9]/g, '')}`}
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="px-4 py-1.5 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                       >
                         Mensaje
                       </a>
                    </div>
                 </div>

                 <div className="flex justify-center md:justify-start gap-8 mb-4 text-gray-700">
                    <div><span className="font-bold text-gray-900">1,254</span> publicaciones</div>
                    <div><span className="font-bold text-gray-900">4.5k</span> seguidores</div>
                    <div><span className="font-bold text-gray-900">890</span> seguidos</div>
                 </div>

                 <div>
                    <h2 className="font-bold text-gray-900">Inversiones y Desarrollo Original (IDO)</h2>
                    <p className="text-gray-600 whitespace-pre-line">
                      🚜 Maquinaria Agrícola & Industrial
                      🛠️ Repuestos y Servicio Técnico
                      📍 {siteConfig.address || "David, Chiriquí"}
                      👇 Cotiza aquí
                    </p>
                    <a href="https://idopa.shop" className="text-blue-900 font-semibold hover:underline">idopa.shop</a>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Contact Section (Moved from old page to ensure info isn't lost) */}
      <div className="bg-white border-t border-gray-200 py-16 mt-8">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Contacto Directo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 ${theme.bg} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                     <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">WhatsApp / Teléfono</h3>
                  <p className="text-gray-600 mb-3">{siteConfig.contactPhone}</p>
                  <a href={`https://wa.me/${siteConfig.contactPhone.replace(/[^0-9]/g, '')}`} className={`${theme.text} font-semibold hover:underline`}>Chat Directo</a>
               </div>

               <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 ${theme.bg} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                     <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Correo Electrónico</h3>
                  <p className="text-gray-600 mb-3">{siteConfig.contactEmail}</p>
                  <a href={`mailto:${siteConfig.contactEmail}`} className={`${theme.text} font-semibold hover:underline`}>Enviar Correo</a>
               </div>

               <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 ${theme.bg} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                     <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Ubicación</h3>
                  <p className="text-gray-600 mb-3">{siteConfig.address}</p>
                  <span className="text-gray-400 text-sm">Panamá</span>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Social;