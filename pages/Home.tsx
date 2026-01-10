import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Wrench, Sprout, Hammer, Settings, Tractor, Truck, Package, ShoppingBag, Zap } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { products, siteConfig, getThemeClasses } = useStore();
  const navigate = useNavigate();
  const theme = getThemeClasses();

  // Mostrar los últimos 12 productos agregados (Novedades)
  const featuredProducts = [...products].reverse().slice(0, 12);

  const IconMap: Record<string, React.FC<any>> = {
    Settings, Wrench, Hammer, Sprout, Tractor, Truck, Package, ShoppingBag, Zap
  };

  const categories = siteConfig.homeCategories || [];
  const heroHeight = siteConfig.heroHeight || 500;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ height: `${heroHeight}px` }}
      >
        <div className="absolute inset-0">
          <img
            src={siteConfig.heroImageUrl}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
            {siteConfig.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {siteConfig.heroSubtitle}
          </p>
          <button
            onClick={() => navigate('/catalog')}
            className={`${theme.bg} text-white px-8 py-4 rounded-full font-bold text-lg ${theme.hover} transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto`}
          >
            Ver Catálogo Completo <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestras Categorías</h2>
            <p className="mt-4 text-gray-500">Todo lo que necesitas para el agro y la industria en un solo lugar.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => {
              const IconComponent = IconMap[cat.value] || Settings;

              return (
                <div 
                  key={cat.id}
                  onClick={() => navigate(`/catalog?category=${cat.name}`)}
                  className="group p-6 bg-gray-50 rounded-2xl cursor-pointer hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${theme.bg} bg-opacity-10 flex items-center justify-center ${theme.text} group-hover:bg-opacity-20 transition-colors overflow-hidden`}>
                    {cat.type === 'image' ? (
                      <img src={cat.value} alt={cat.name} className="w-full h-full object-cover" />
                    ) : (
                      <IconComponent size={32} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Novedades en Inventario</h2>
              <p className="mt-2 text-gray-500">Descubre los últimos artículos agregados.</p>
            </div>
            <Link to="/catalog" className={`${theme.text} font-semibold hover:underline flex items-center gap-1`}>
              Ver todo <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className={`${theme.bg} py-12`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center text-white text-center gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-1">Envíos Nacionales</h4>
            <p className="opacity-90">Despachamos a todo el país</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20"></div>
          <div>
            <h4 className="text-2xl font-bold mb-1">Garantía IDO</h4>
            <p className="opacity-90">Productos certificados y duraderos</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20"></div>
          <div>
            <h4 className="text-2xl font-bold mb-1">Atención Experta</h4>
            <p className="opacity-90">Asesoría técnica disponible</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;