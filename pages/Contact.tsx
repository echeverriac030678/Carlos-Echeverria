import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Navigation, Clock } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Contact: React.FC = () => {
  const { siteConfig, getThemeClasses } = useStore();
  const theme = getThemeClasses();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className={`w-full py-16 ${theme.bg} text-white`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Visítanos en nuestra sucursal, escríbenos por WhatsApp o envíanos un correo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards Column */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">WhatsApp Business</h3>
                  <p className="text-sm text-gray-500">Atención rápida y personalizada</p>
                </div>
              </div>
              <a 
                href={`https://wa.me/${siteConfig.whatsappNumber || '50767539193'}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Chatear ahora
              </a>
            </div>

            {/* Social & Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
               <h3 className="font-bold text-gray-900 mb-6">Canales de Atención</h3>
               
               <div className="space-y-6">
                 {/* Instagram */}
                 <a 
                   href={siteConfig.instagramUrl || '#'} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 group"
                 >
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-900">Instagram</span>
                      <span className="text-sm text-gray-500">Síguenos para novedades</span>
                    </div>
                 </a>

                 {/* Email */}
                 <a 
                   href={`mailto:${siteConfig.contactEmail}`}
                   className="flex items-center gap-4 group"
                 >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-900">Correo Electrónico</span>
                      <span className="text-sm text-gray-500">{siteConfig.contactEmail}</span>
                    </div>
                 </a>

                 {/* Phone */}
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-900">Teléfono</span>
                      <span className="text-sm text-gray-500">{siteConfig.contactPhone}</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Location Text Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-3 mb-4">
                 <Navigation className={theme.text} size={24} />
                 <h3 className="font-bold text-gray-900">Ubicación e Indicaciones</h3>
               </div>
               <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                 {siteConfig.address}
               </p>
               {siteConfig.locationInstructions && (
                 <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 italic border-l-4 border-gray-300">
                   "{siteConfig.locationInstructions}"
                 </div>
               )}
            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full min-h-[500px] flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <MapPin size={20} className={theme.text} /> Encuéntranos en el mapa
                </h3>
              </div>
              <div className="flex-grow bg-gray-200 relative">
                {siteConfig.mapEmbedUrl ? (
                  <iframe 
                    src={siteConfig.mapEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '500px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación IDO Agro"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p>Mapa no configurado</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;