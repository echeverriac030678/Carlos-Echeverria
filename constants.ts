import { Product, SiteConfig } from './types';

export const INITIAL_SITE_CONFIG: SiteConfig = {
  heroTitle: "Potencia tu Campo e Industria",
  heroSubtitle: "Repuestos agrícolas, tornillería y ferretería de alta calidad.",
  heroImageUrl: "https://images.unsplash.com/photo-1625246333195-58197bd47f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  logoUrl: "", // Empty by default to show the icon
  logoHeight: 40, // Default height in pixels
  footerLogoHeight: 60, // Default footer logo height
  primaryColor: 'green',
  contactPhone: "+1234567890",
  contactEmail: "info@idopa.shop"
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Carburador Desbrozadora 43cc',
    description: 'Carburador de alta eficiencia compatible con la mayoría de desbrozadoras chinas de 43cc y 52cc.',
    price: 25.00,
    category: 'Repuestos',
    imageUrl: 'https://images.unsplash.com/photo-1627993079975-c5980a373b32?auto=format&fit=crop&q=80&w=500',
    stock: 50
  },
  {
    id: '2',
    name: 'Cadena Motosierra 18"',
    description: 'Cadena de acero endurecido para motosierras de espada de 18 pulgadas. Corte rápido.',
    price: 18.50,
    category: 'Repuestos',
    imageUrl: 'https://images.unsplash.com/photo-1589363460773-6058fb2088df?auto=format&fit=crop&q=80&w=500',
    stock: 30
  },
  {
    id: '3',
    name: 'Kit Tornillos Hexagonales 500pz',
    description: 'Surtido de tornillos hexagonales de acero inoxidable, varias medidas. Ideal taller.',
    price: 45.00,
    category: 'Tornillería',
    imageUrl: 'https://images.unsplash.com/photo-1588619461394-3e9114f26622?auto=format&fit=crop&q=80&w=500',
    stock: 100
  },
  {
    id: '4',
    name: 'Motobomba de Agua 2"',
    description: 'Motobomba a gasolina 6.5HP, salida de 2 pulgadas. Ideal para riego agrícola.',
    price: 220.00,
    category: 'Repuestos',
    imageUrl: 'https://images.unsplash.com/photo-1517430348757-320cb0756770?auto=format&fit=crop&q=80&w=500',
    stock: 10
  },
  {
    id: '5',
    name: 'Juego de Llaves Combinadas',
    description: 'Set de 12 llaves combinadas (milimétricas) de acero cromo vanadio.',
    price: 35.00,
    category: 'Herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1614349195325-1e4e6988897b?auto=format&fit=crop&q=80&w=500',
    stock: 25
  },
  {
    id: '6',
    name: 'Tuerca de Seguridad 1/2"',
    description: 'Venta por ciento. Tuercas de seguridad con inserto de nylon.',
    price: 8.00,
    category: 'Tornillería',
    imageUrl: 'https://images.unsplash.com/photo-1616405232788-b7b51b4c9351?auto=format&fit=crop&q=80&w=500',
    stock: 500
  }
];

export const CATEGORIES: string[] = ['Todas', 'Repuestos', 'Tornillería', 'Ferretería', 'Herramientas', 'Varios'];

export const THEME_COLORS = {
  green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
};