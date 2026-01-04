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
      "value": "https://desbrozadora.my.canva.site/dag9ttfpbvo/_assets/media/e36af30325ec8b51d8da10d278cf0186.png"
    },
    {
      "id": "2",
      "name": "Tornillería",
      "description": "Tornilleria en general",
      "type": "image",
      "value": "https://desbrozadora.my.canva.site/dag9trdgyue/_assets/media/5d3a35a39252dfe2c87f977dc5e3be30.png"
    },
    {
      "id": "3",
      "name": "Maquinaria",
      "description": "Desbrozadoras, Motosierras, Motobombas, Fumigadoras y Generadores",
      "type": "image",
      "value": "https://desbrozadora.my.canva.site/desbrozadoras/_assets/media/8781b4855ac3c48c7240a1d971b4e9ad.png"
    },
    {
      "id": "1767553323203",
      "name": "Ferreteria",
      "description": "Insumos y herramientas",
      "type": "image",
      "value": "https://uyustools.com/wp-content/uploads/2023/09/%E6%89%8B%E5%B7%A5%E5%85%B7%E5%8D%95%E5%9B%BE%E9%80%8F%E5%BA%95.png"
    }
  ]
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "1",
    "name": "Desbrozadora 43cc",
    "description": "Desbrozadoras 43 cc OEM de Husqvarna",
    "price": 159.95,
    "category": "Maquinaria",
    "imageUrl": "https://desbrozadora.my.canva.site/desbrozadoras/_assets/media/8781b4855ac3c48c7240a1d971b4e9ad.png",
    "stock": 1
  },
  {
    "id": "2",
    "name": "Poleas de Izaje UYUSTOOLS",
    "description": "¡Levanta cargas pesadas con facilidad y seguridad! 🏗️💪\nPresentamos las Poleas de Izaje UYUSTOOLS (disponibles en 1/2 tonelada y 1 tonelada):\n✅ Capacidades: 0.5 toneladas y 1 tonelada\n✅ Diseño robusto en acero con gancho giratorio resistente\n✅ Roldana de alta calidad para un deslizamiento suave y seguro\n✅ Ideales para talleres, construcción, garajes y elevación industrial\n✅ Marca UYUSTOOLS: Calidad y durabilidad garantizada\n¡Multiplica tu fuerza y trabaja como profesional! 🔧",
    "price": 18.5,
    "category": "Herramientas",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9e-xvir0/_assets/media/251b4a100d2c50f349de51a8ea38e36c.png",
    "stock": 30,
    "variants": [
      {
        "id": "1767556599509",
        "name": "1/2 Tonelada",
        "price": 8.65,
        "stock": 6
      },
      {
        "id": "1767556617036",
        "name": "1 Tonelada",
        "price": 14.65,
        "stock": 4
      }
    ]
  },
  {
    "id": "3",
    "name": "Báscula Electrónica Comercial FERRAWYY",
    "description": "¡Precisión en cada pesaje! ⚖️💼\nDescubre la Báscula Electrónica Comercial FERRAWYY con plataforma de vidrio:\n✅ Capacidad máxima: Hasta 40 kg (ideal para comercios y mercados)\n✅ Pantalla digital doble: Fácil lectura para vendedor y cliente\n✅ Función tara y cálculo de precio: Pesa, multiplica y suma automáticamente\n✅ Plataforma resistente de vidrio templado para mayor durabilidad\n✅ Diseño compacto y profesional con botones intuitivos\n¡Controla tu negocio con exactitud y eficiencia! 📈",
    "price": 29.95,
    "category": "Maquinaria",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9ey-evaa/_assets/media/5d749f271ab8f3d6b93a66256dcb4bcd.png",
    "stock": 3,
    "variants": []
  },
  {
    "id": "4",
    "name": "Casco de Soldadura Auto-Oscureciente",
    "description": "¡Protección total para tus soldaduras! 🔥🛡️\nPresentamos el Casco de Soldadura Auto-Oscureciente UYUSTOOLS Modelo M-9401L:\n✅ Auto-oscurecimiento automático al detectar el arco\n✅ Alimentación solar (ecológico y sin pilas constantes)\n✅ Área de visión amplia: 92.5 x 42.5 mm\n✅ Control de sombra ajustable para adaptarse a diferentes trabajos\n✅ Protección UV/IR completa para tus ojos\n¡Trabaja con comodidad y seguridad máxima! 💪",
    "price": 19.95,
    "category": "Herramientas",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9exci17i/_assets/media/351ea54602fb9937036eb9bd00e2da74.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "5",
    "name": "Hilo para desbrozadora Ferton 3MM",
    "description": "¡Que nada te detenga! 🚜💨\n\nPresentamos el hilo para desbrozadora Ferton, diseñado para resistir el desgaste y ofrecer un corte limpio incluso en la maleza más densa. Menos tiempo cambiando el hilo y más tiempo dejando tu jardín perfecto.\n\nMáxima resistencia al impacto.\n\nCorte preciso que cuida tu motor.\n\nIdeal para largas jornadas de trabajo.\n\n🔧 ¡Equípate con lo mejor! Consíguelo hoy mismo.",
    "price": 35,
    "category": "Herramientas",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9e-6f7wc/_assets/media/056a1757ba2ef83d00f08d696becb170.png",
    "stock": 25,
    "variants": [
      {
        "id": "1767557314670",
        "name": "500 metros",
        "price": 36,
        "stock": 6
      },
      {
        "id": "1767557341601",
        "name": "200 metros",
        "price": 18,
        "stock": 3
      }
    ]
  },
  {
    "id": "6",
    "name": "Tuerca de Seguridad 1/2\"",
    "description": "Venta por ciento. Tuercas de seguridad con inserto de nylon.",
    "price": 8,
    "category": "Tornillería",
    "imageUrl": "https://images.unsplash.com/photo-1616405232788-b7b51b4c9351?auto=format&fit=crop&q=80&w=500",
    "stock": 500
  }
];

export const CATEGORIES: string[] = [
  "Todas",
  "Repuestos",
  "Tornillería",
  "Ferretería",
  "Herramientas",
  "Varios",
  "Maquinaria"
];

export const THEME_COLORS = {
  green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', btnHover: 'hover:bg-emerald-700' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500', btnHover: 'hover:bg-blue-700' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500', btnHover: 'hover:bg-orange-700' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
};