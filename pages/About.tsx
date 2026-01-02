import React from 'react';
import { Target, Eye, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { getThemeClasses, siteConfig } = useStore();
  const theme = getThemeClasses();

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1625246333195-58197bd47f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Fondo agro" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestra Empresa</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Impulsando el desarrollo agrícola e industrial con soluciones de calidad y compromiso inquebrantable.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className={`inline-block p-3 rounded-lg ${theme.bg} bg-opacity-10 text-${siteConfig.primaryColor}-600 mb-4`}>
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quiénes Somos</h2>
            <div className="text-gray-600 leading-relaxed text-lg mb-6 whitespace-pre-line">
              {siteConfig.companyDescription || "Inversiones y Desarrollo Original (IDO) es una empresa dedicada a la comercialización y distribución de repuestos agrícolas, maquinaria, ferretería y tornillería especializada."}
            </div>
            <div className="flex items-center gap-2 font-semibold text-gray-800">
               <ShieldCheck className={`${theme.text}`} /> Calidad Garantizada
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000" 
              alt="Taller y herramientas" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
             />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Mission Card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-full ${theme.bg} flex items-center justify-center text-white mb-6 shadow-lg`}>
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {siteConfig.companyMission || "Proveer soluciones confiables..."}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
             <div className={`w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white mb-6 shadow-lg`}>
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {siteConfig.companyVision || "Ser líderes en el mercado..."}
            </p>
          </div>
        </div>

        {/* Values / CTA */}
        <div className={`rounded-3xl ${theme.bg} text-white overflow-hidden shadow-xl`}>
          <div className="px-8 py-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">¿Listo para trabajar con los mejores equipos?</h3>
              <p className="text-white/90 text-lg max-w-xl">
                Explora nuestro catálogo completo y encuentra exactamente lo que necesitas para potenciar tu proyecto.
              </p>
            </div>
            <Link 
              to="/catalog"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              Ver Catálogo <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;