import { Product, SiteConfig } from './types';

export const INITIAL_SITE_CONFIG: SiteConfig = {
  "heroTitle": "Potencia tu Campo e Industria",
  "heroSubtitle": "Repuestos agrícolas, tornillería y ferretería de alta calidad.",
  "heroImageUrl": "https://desbrozadora.my.canva.site/dag9nobbu2c/_assets/media/bffb70dbe5b62a71ba6f52aa7e33eee9.png",
  "heroHeight": 600,
  "logoUrl": "https://desbrozadora.my.canva.site/dag9niwpsgq/_assets/media/a080cbc0c4aa08c08694e711a8d9d7e2.png",
  "logoHeight": 85,
  "footerLogoHeight": 75,
  "primaryColor": "green",
  "contactPhone": "+507 6753-9193",
  "contactEmail": "info@idopa.shop",
  "address": "David, Chiriquí, Panamá.",
  "companyDescription": "Inversiones y Desarrollo Original (IDO) es una empresa dedicada a la comercialización y distribución de repuestos agrícolas, maquinaria, ferretería y tornillería especializada. Nacimos con el propósito de cubrir la necesidad de insumos de alta calidad para el trabajador del campo y la industria local.",
  "companyMission": "Proveer al sector agroindustrial de repuestos, herramientas y soluciones confiables que maximicen su productividad. Nos esforzamos por ofrecer un servicio ágil, asesoría técnica experta y precios competitivos, construyendo relaciones de confianza a largo plazo con nuestros clientes y aliados comerciales.",
  "companyVision": "Consolidarnos como el referente líder a nivel nacional en el suministro de repuestos, maquinarias e insumos agrícolas, reconocidos por nuestra innovación, destacando por un servicio técnico transparente y humano. Aspiramos a ser una empresa que inspire a otros a través de su fe, demostrando que el éxito comercial y el servicio al prójimo caminan de la mano.",
  "quickLinks": [
    {
      "text": "Inicio",
      "url": "/"
    },
    {
      "text": "Nosotros",
      "url": "/about"
    },
    {
      "text": "Catálogo de Productos",
      "url": "/catalog"
    },
    {
      "text": "Mi Carrito",
      "url": "/cart"
    }
  ],
  "homeCategories": [
    {
      "id": "1",
      "name": "Repuestos",
      "description": "Desbrozadoras, Motosierras, Motobombas, Fumigadoras y Generadores",
      "type": "image",
      "value": "\thttps://desbrozadora.my.canva.site/dag9ttfpbvo/_assets/media/e36af30325ec8b51d8da10d278cf0186.png"
    },
    {
      "id": "2",
      "name": "Tornillería",
      "description": "Tornilleria en general",
      "type": "image",
      "value": "\thttps://desbrozadora.my.canva.site/dag9trdgyue/_assets/media/5d3a35a39252dfe2c87f977dc5e3be30.png"
    },
    {
      "id": "3",
      "name": "Herramientas",
      "description": "Mano de obra eficiente",
      "type": "icon",
      "value": "Hammer"
    },
    {
      "id": "4",
      "name": "Ferretería",
      "description": "Insumos generales",
      "type": "icon",
      "value": "Sprout"
    }
  ]
};

// ... (El resto del archivo constants.ts debe mantenerse igual, solo reemplaza INITIAL_SITE_CONFIG)

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
  green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', btnHover: 'hover:bg-emerald-700' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500', btnHover: 'hover:bg-blue-700' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500', btnHover: 'hover:bg-orange-700' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
};