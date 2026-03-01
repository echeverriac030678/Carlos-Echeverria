import { Product, SiteConfig } from './types';

export const DATA_VERSION = '1.0.1';

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
  "taxRate": 7,
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
      "name": "Ferretería",
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
    "stock": 0,
    "variants": []
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
    "stock": 1,
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
    "name": "Extensión Eléctrica Troen para Interiores en elegante color marrón.",
    "description": "¡Lleva la comodidad a otro nivel con nuestra Extensión Eléctrica Troen para Interiores en elegante color marrón! 🍫✨\nPerfecta para integrarse discretamente en tu hogar, con diseño slim que se camufla junto a muebles, paredes o pisos.\nCaracterísticas top:\n⚡ 110V\n🔌 3 contactos\n📏 Disponible en 4 prácticos tamaños: 6ft, 9ft, 15ft y 18ft\nIdeal para lámparas, cargadores, electrodomésticos pequeños y todo lo que necesites conectar sin enredos ni cables a la vista. ¡Segura, resistente y super estética! 🏠💡",
    "price": 8,
    "category": "Ferretería",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9fi-tnbu/_assets/media/a2bfe5857314fd5e2b1389d54a256a6a.png",
    "stock": 500,
    "variants": [
      {
        "id": "1767559219886",
        "name": "6 pies",
        "price": 0.9,
        "stock": 25
      },
      {
        "id": "1767559235732",
        "name": "9 pies",
        "price": 1.1,
        "stock": 25
      },
      {
        "id": "1767559252413",
        "name": "15 pies",
        "price": 1.35,
        "stock": 25
      },
      {
        "id": "1767559281952",
        "name": "18 pies",
        "price": 1.45,
        "stock": 25
      }
    ]
  },
  {
    "id": "1767711377366",
    "name": "Arrancador para Stilh SR420",
    "description": "Te presentamos la Tapa de Arranque Super Maxter, diseñada específicamente para el modelo SR420. Robustez y suavidad en cada tirón para que tu motor encienda a la primera. ⚡\n\n✅ Compatibilidad: Modelo SR420 (Referencia ST420-010-27). ✅ Durabilidad: Materiales de alta resistencia para uso rudo. ✅ Instalación: Fácil y rápida, ¡vuelve a la acción en minutos!\n\n¡Mantén tus herramientas al 100%! 🚜💨",
    "price": 7.8,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9fubfk-0/_assets/media/a921ead92cd62d89358fc57328eeb862.png",
    "stock": 9,
    "variants": []
  },
  {
    "id": "1767718443415",
    "name": "Arranque  Para BC430/BC520 ",
    "description": "Este modelo es la solución definitiva para quienes buscan durabilidad y un ajuste perfecto. No te arriesgues con repuestos que no calzan; elige la ingeniería de Super Maxter.\n\n✅ Máxima Compatibilidad: Ideal para motores BC430, BC520 y TL43 (Tipo Corbatín). ✅ Referencia: BC430-066-27. ✅ Calidad Garantizada: Construcción robusta para soportar el uso diario exigente.\n\n¡Haz que tu equipo encienda sin esfuerzo y a la primera! ⚡",
    "price": 5.86,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9qeesyvq/_assets/media/8165ac8f6d1dc912c40b77dbbba06772.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767718946289",
    "name": "Arranque Para BC430/BC520",
    "description": "Te presentamos el Kit de Arranque Super Maxter para BC430 / 520 CINTA. Incluye la tapa de arranque completa y la taza metálica, asegurando una compatibilidad perfecta y un encendido suave en cada tirón. ✨\n\n✅ Compatibilidad: Diseñado específicamente para modelos BC430 y 520 CINTA (Referencia BC430-067-27). ✅ Componentes de Calidad: Tapa de arranque y campana metálica de alta durabilidad. ✅ Fácil Reemplazo: Renueva tu sistema de arranque rápidamente y sin complicaciones.\n\n¡Vuelve al trabajo con la confianza que te da Super Maxter! 🌿",
    "price": 5.86,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9p8x39ny/_assets/media/ec54bdfa083bcf1e2775eeea519a0750.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767727327841",
    "name": "KIt de Cilindro para BC520/TL52",
    "description": "Este kit incluye todo lo necesario para que tu máquina vuelva a trabajar como el primer día, garantizando un ajuste preciso y una disipación de calor óptima.\n\n✅ Especificaciones Técnicas:\n\nCilindro: Robusto y diseñado para alta resistencia.\n\nPistón: Diámetro de 44mm y altura de 40mm para un rendimiento exacto.\n\nPin/Pasador: Medidas de 10mm x 36mm.\n\nIncluye: Anillos, empaque y accesorios para una instalación completa.\n\nReferencia: BC520-078-23.\n\n¡No permitas que un cilindro rayado detenga tu productividad! 🚜💨",
    "price": 18.71,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9q7yl4g0/_assets/media/4b65d718093b527239072719d477cf9c.jpg",
    "stock": 3,
    "variants": []
  },
  {
    "id": "1767728724506",
    "name": "Carburador Metalico para 420",
    "description": "Optimiza el rendimiento de tus herramientas con el Carburador de Alta Precisión de Garden Tools Paradise. Diseñado para ofrecer una mezcla perfecta de aire y combustible, asegurando un arranque fácil y un funcionamiento uniforme en todo momento Referencia:MA420-001-25.\n\n✅ Rendimiento superior: Mejora la respuesta del acelerador y la potencia del motor. ✅ Calidad Profesional: Construcción metálica resistente para una mayor vida útil. ✅ Diseño Integrado: Incluye bombín de purga (primer) para un cebado rápido y eficiente. refe\n\n¡Mantén tu equipo trabajando como nuevo! 🛠️✨",
    "price": 14.2,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9q9rkipe/_assets/media/3623b21d2cc6c425cbedf15a38a0a154.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1767732519805",
    "name": "Kit Piston para Stihl MS381",
    "description": "Contamos con repuestos de alta gama para el mantenimiento serio de tus equipos. Calidad garantizada en cada componente para prolongar la vida útil de tu motor.\n\nDetalles del producto:\n\n📍 Referencia: ST381-002-23.\n\n📍 Componentes: Incluye pistón, anillos, pin y clips de seguridad.\n\n📍 Uso: Ideal para reparaciones que exigen precisión técnica.\n\nAsegura un rendimiento óptimo y evita averías costosas con repuestos diseñados para el trabajo pesado. 💪",
    "price": 7.89,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9rjv9brk/_assets/media/8f2b946795fd886bae4740f0f6113b10.png",
    "stock": 9,
    "variants": []
  },
  {
    "id": "1767732709607",
    "name": "Kit Piston para Stihl MS382",
    "description": "Sabemos que la durabilidad de tus herramientas depende de la calidad de sus componentes. Por eso, nuestro kit está fabricado con los más altos estándares para asegurar un ajuste perfecto y un rendimiento constante, incluso en las jornadas más pesadas. 🚜💪\n\n✅ ¿Qué incluye este kit?\n\nPistón de alta resistencia: Diseñado para soportar altas temperaturas.\n\nAnillos de sellado: Para una compresión óptima.\n\nPasador y empaque: Todo listo para una instalación profesional.\n\nReferencia: ST382-002-23.\n\n¡No comprometas el corazón de tu máquina! Elige repuestos que garantizan resultados.\n\n📩 Escríbenos al DM para más información o pedidos.",
    "price": 7.89,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9rev2f80/_assets/media/3e7480171843a21def7185bc404833b4.png",
    "stock": 12,
    "variants": []
  },
  {
    "id": "1767735336328",
    "name": "Kit Cilindro para TL33",
    "description": "Este kit completo está diseñado para restaurar la compresión original y garantizar un funcionamiento suave y potente, permitiéndote terminar tus trabajos en menos tiempo.\n\n✅ Todo en uno: Incluye cilindro, pistón, anillos, pasador y seguros para una reparación integral. ✅ Durabilidad extrema: Fabricado con materiales de alta resistencia para soportar las jornadas más exigentes. ✅ Referencia: BC430-077-23 / BC430-077-23.\n\n¡No permitas que un motor desgastado te detenga! 🚜💨",
    "price": 18.04,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9rqcxusi/_assets/media/7f2e042d4a784e67feceea51dd656e27.png",
    "stock": 3,
    "variants": []
  },
  {
    "id": "1767882753904",
    "name": "Carburador para BC430/520",
    "description": "Optimiza el corazón de tu herramienta con nuestro Carburador de Alta Precisión. Diseñado para ofrecer una mezcla perfecta, este repuesto asegura un arranque suave y una aceleración constante, permitiéndote trabajar sin interrupciones. 🛠️✨\n\n✅ Arranque Fácil: Incluye bombín de purga (primer) para un cebado rápido. ✅ Estabilidad: Mantiene el ralentí perfecto y mejora la respuesta del motor. ✅ Calidad Garantizada: Construcción metálica de alta resistencia para una mayor vida útil. ✅ Referencia: BC430-035-25.\n\n¡Haz que tu equipo rinda como el primer día! 💪",
    "price": 13.53,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9v95rz9c/_assets/media/09cda879a03746b1e1c489ef00fef79c.png",
    "stock": 11,
    "variants": []
  },
  {
    "id": "1767882990455",
    "name": "Bobina  para 143 RII",
    "description": "Asegura un encendido instantáneo y potente con nuestra Bobina de Encendido Fuji HQ143-017-18. Diseñada para ofrecer la máxima fiabilidad eléctrica, esta bobina garantiza que tu motor trabaje de manera estable y eficiente en todo momento.\n\n✅ Alta Tensión: Genera una chispa constante para un arranque sin esfuerzo. ✅ Calidad Fuji: Durabilidad y resistencia probadas para uso intensivo. ✅ Referencia: HQ143-017-18.\n\n¡No pierdas más tiempo tirando de la cuerda! Dale a tu motor la energía que necesita ⚡🚜",
    "price": 12.17,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9v1jhmga/_assets/media/031e04535af2a230923e90696df5f5fe.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1767883145466",
    "name": "Bujia 6A 2 Tiempos",
    "description": "Mantener tu bujía en buen estado no solo facilita el encendido, sino que también protege tu motor y optimiza el consumo de combustible. ¡No dejes que una bujía vieja afecte tu productividad!\n\n✅ Encendido Confiable: Tecnología NGK líder en el mercado para una chispa potente y constante. ✅ Versatilidad: Compatible con una amplia gama de maquinaria de jardín y agro. ✅ Durabilidad: Diseñada para resistir altas temperaturas y prevenir la acumulación de depósitos.\n\n¡Pequeños repuestos que hacen grandes diferencias! 🛠️✨",
    "price": 1.56,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9wifoq2u/_assets/media/de51cd9c9635c8deb55de5bf15595643.png",
    "stock": 25,
    "variants": []
  },
  {
    "id": "1767883707568",
    "name": "CMR 5H 4 Tiemp",
    "description": "No dejes que una bujía desgastada le reste potencia a tu motor o aumente el consumo de combustible. Cambia a NGK, el líder mundial en tecnología de encendido.\n\n✅ Máxima Eficiencia: Excelente disipación de calor y resistencia a la corrosión. ✅ Diseño Compacto: Especialmente diseñada para motores pequeños de alta exigencia. ✅ Calidad Original: El estándar de confianza para las mejores marcas de maquinaria.\n\n¡Mantén tu equipo trabajando al 100%! 🛠️🌿",
    "price": 1.47,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9wyeadri/_assets/media/c8a204831aa4ad1a885d39f33e9417f4.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767884296708",
    "name": "Tuerca para F160 Paquete de 38 Unidades",
    "description": "No arriesgues la integridad de tu equipo ni tu seguridad con piezas desgastadas. Esta tuerca de alta resistencia garantiza que tu cuchilla se mantenga en su lugar, incluso en las jornadas más intensas de limpieza y desmalezado. 🌿💪Máxima Sujeción: Diseño con inserto de seguridad para evitar que se afloje con la vibración. ✅ Referencia: ST160-015-27.\n\n¡Mantén tu herramienta lista para la acción! 🚀",
    "price": 28.18,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag91rstjtu/_assets/media/fbd040faa5d1882e7edba64054f65338.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1767886003190",
    "name": "Kit Tensor para Motosierra China 5200/5800 Paquete de 38 Unidades",
    "description": "Te presentamos nuestro Kit de Tensor para Motosierra China, la pieza clave para mantener la tensión perfecta en cada corte. Un ajuste preciso no solo mejora el rendimiento de tu motosierra, sino que evita accidentes y desgastes innecesarios.\n\n✅ Precisión Total: Diseño de tornillo sin fin para un ajuste milimétrico. ✅ Durabilidad: Fabricado en acero de alta resistencia para soportar la vibración constante. ✅ Referencia: S5800-011-27.\n\n¡Mantén tu equipo a punto y trabaja con confianza! 💪✨",
    "price": 28.18,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag917ii3wq/_assets/media/3aed61722f9a39fd4e9b99833a663776.jpg",
    "stock": 38,
    "variants": []
  },
  {
    "id": "1767887185570",
    "name": "Esparrago para Motosierra China 5200/5800 Paquete de 100 Unidades",
    "description": "Un colector desgastado o con fugas puede causar fallos en el ralentí y pérdida de fuerza. Asegura un rendimiento óptimo y una respuesta inmediata del acelerador con este repuesto de alta calidad.\n\n✅ Conexión Perfecta: Diseñado para un sellado hermético que evita entradas de aire no deseadas. ✅ Durabilidad Hustil: Fabricado con materiales resistentes al calor y a los químicos del combustible. ✅ Referencia: S58100-010-27\n\n¡Mantén tu equipo trabajando con la máxima eficiencia! 🛠️✨",
    "price": 22.55,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9108cmjs/_assets/media/07c07e4672d47174315f3b96397faf56.jpg",
    "stock": 50,
    "variants": []
  },
  {
    "id": "1767888739831",
    "name": "Tapon de Bujia para Stihl Paquete de 4 Unidades",
    "description": "Te presentamos nuestro Kit de Capuchón y Resorte de Bujía, la solución económica y efectiva para asegurar que la corriente llegue con total intensidad desde la bobina hasta el corazón de tu motor.\n\n✅ Conexión Firme: El resorte de alta tensión garantiza un contacto constante, evitando chispas perdidas por vibración. ✅ Protección Total: Capuchón de goma aislante de alta resistencia que protege contra la humedad y el polvo. ✅ Referencia: ST-001-25.\n\n¡Pequeños detalles que mantienen tu motor rugiendo! 🛠️✨",
    "price": 10,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag92e4ylo8/_assets/media/a83e56c6722c140f544575d3b5d78ba8.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767890656404",
    "name": "Tornillo Torx M5X18 Paquete de 87 unidades",
    "description": "No permitas que tornillos desgastados o de mala calidad pongan en riesgo tu trabajo. Elige repuestos con el ajuste preciso para mantener la integridad de tu motor en todo momento.\n\n✅ Diseño Robusto: Cabeza tipo Torx/Cilíndrica para una transmisión de torque eficiente sin barrer la rosca. ✅ Material de Calidad: Acero galvanizado para mayor resistencia a la corrosión y al desgaste. ✅ Referencia: TO18-012-27.\n\n¡Pequeñas piezas que garantizan grandes resultados! 🛠️✨",
    "price": 12.4,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag92p3wmyi/_assets/media/92d98d5370d0b54a59aa7a667652e5ee.png",
    "stock": 250,
    "variants": []
  },
  {
    "id": "1767893660454",
    "name": "Tornillo Torx M5X6  Paquete de 50 Unidades",
    "description": "Su diseño permite que la cabeza quede al ras de la superficie, evitando enganches innecesarios y proporcionando un acabado estético y funcional a tu maquinaria. 🛠️✨\n\n✅ Diseño Avellanado: Ideal para superficies donde se requiere un perfil plano. ✅ Máximo Agarre: Encastre tipo estrella (Torx) que evita que la herramienta se deslice, protegiendo la cabeza del tornillo. ✅ Resistencia: Fabricado con materiales de alta calidad Referencia: TO06-014-27 para soportar vibraciones y asegurar una sujeción firme.\n\n¡Mantén tus herramientas seguras y con un aspecto profesional! 💪",
    "price": 13.53,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag92shqmis/_assets/media/3028011c51cae1df089bcefe82965a5c.png",
    "stock": 50,
    "variants": []
  },
  {
    "id": "1767898212688",
    "name": "Ojal en Bronce para Desbrozadora Paquete 25",
    "description": "Te presentamos nuestro Ojal de Bronce Reforzado, diseñado para reducir la fricción y proteger la salida del nylon. Al ser de bronce, ofrece una superficie ultra lisa que evita que el hilo se caliente y se funda, permitiéndote trabajar por más tiempo sin interrupciones.\n\n✅ Material Premium: Bronce de alta resistencia al desgaste. ✅ Suavidad Total: Acabado redondeado que protege tanto el hilo como el cabezal. ✅ Durabilidad: Soporta el roce constante y el calor generado por la fricción del corte Referencia 112GA.\n\n\n¡Detalles que cuidan tu herramienta y tu bolsillo! 🛠️✨",
    "price": 22.55,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag92-hogp4/_assets/media/79eee51ebf9d72e61042883f0b274aff.png",
    "stock": 64,
    "variants": []
  },
  {
    "id": "1767901428367",
    "name": "Tornillo Torx M5X20 Paquete de 50 Unidades",
    "description": "Olvídate de tornillos con cabezas barridas. Gracias a su diseño de estrella de alta precisión, estos tornillos permiten un montaje y desmontaje profesional sin dañar la pieza.\n\n✅ Máximo Torque: Encastre Torx que garantiza que la herramienta no resbale. ✅ Resistencia a la Corrosión: Acabado galvanizado para una mayor vida útil en ambientes exigentes. ✅ Ajuste Firme: Rosca de precisión que asegura componentes críticos del motor. ✅ Referencia: TO20-011-27.\n\n¡Dale a tu motor la seguridad que merece! 💪✨",
    "price": 12.4,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag920qzrtg/_assets/media/c37395db0f30166ed7fb38f9ed4dd1dc.png",
    "stock": 100,
    "variants": []
  },
  {
    "id": "1767901651474",
    "name": "Tornillo Torx M5X35 Paquete de 100 Unidades",
    "description": "Sabemos que en el ensamblaje de motores, cada milímetro cuenta. Estos tornillos con encastre Torx te permiten aplicar el torque exacto sin riesgo de resbalones, garantizando que todo se mantenga en su sitio a pesar de las vibraciones.\n\n✅ Mayor Alcance: Ideales para atravesar carcasas o fijar componentes internos. ✅ Encastre de Seguridad: Cabeza tipo estrella para un agarre superior con tu herramienta. ✅ Resistencia Profesional: Fabricados en acero reforzado para soportar el trabajo pesado. ✅ Referencia: TO35-013-27.\n\n¡Haz que cada reparación sea de calidad superior! 🛠️✨",
    "price": 13.53,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag920qzrtg/_assets/media/c37395db0f30166ed7fb38f9ed4dd1dc.png",
    "stock": 250,
    "variants": []
  },
  {
    "id": "1767902099864",
    "name": "Manifold para Stihl MS250 Paquete de 10 Unidades",
    "description": "Con el tiempo, el calor y el combustible pueden agrietar los codos de goma originales, causando entradas de aire que hacen que tu motor falle. ¡Renueva esta pieza y recupera la estabilidad de tu equipo! 🛠️✨\n\n✅ Flexibilidad Superior: Absorbe las vibraciones del motor para evitar desconexiones. ✅ Sellado Hermético: Diseñado para encajar perfectamente y prevenir fugas de vacío. ✅ Resistencia Térmica: Material de caucho de alta calidad que soporta las temperaturas de trabajo más exigentes. ✅ Referencia: ST250-009-25.",
    "price": 10.15,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag927w0cwc/_assets/media/66673df6beaf6c4923380865c2b3f1b1.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767906259321",
    "name": "Aguja Carburador para Waldro Paquete 60 Unidades",
    "description": "No te conformes con reparaciones a medias. Este kit completo te permite reconstruir el corazón de tu desbrozadora o motor, garantizando una compresión óptima y el rendimiento de un equipo nuevo. 🛠️✨\n\n✅ Compresión Perfecta: Cilindro con paredes internas de alta precisión para un sellado máximo. ✅ Kit Todo en Uno: Incluye cilindro, pistón, anillos, pasador y seguros. ✅ Máxima Durabilidad: Fabricado con aleaciones resistentes al calor extremo y al desgaste. ✅ Referencia: K4334-219-25.\n\n¡Recupera la eficiencia y vuelve al trabajo con toda la potencia! 💪",
    "price": 11.27,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag93q4emz8/_assets/media/8fa06e11e67709eabc02b1a40a2ce047.jpg",
    "stock": 60,
    "variants": []
  },
  {
    "id": "1767907168985",
    "name": "Aguja y Resorte Cargurador los Motores Hondas Paquete de 95 Unidades",
    "description": "Te presentamos nuestro Kit de Aguja y Resorte HGX390-003-20, diseñado para ofrecer un sellado perfecto y un control preciso del flujo de gasolina. El resorte incluido asegura que la aguja recupere su posición instantáneamente, evitando inundaciones y optimizando cada gota de combustible.\n\n✅ Sello de Alta Precisión: Punta vitonada reforzada para un cierre hermético. ✅ Kit de Restauración: Incluye el resorte de presión para un funcionamiento como nuevo. ✅ Referencia: HGX390-003-20.\n\n¡Pequeños ajustes que garantizan la máxima potencia en tu jornada! 🛠️✨",
    "price": 23.75,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag93f3sstg/_assets/media/94825d274852d8d33c31ff3e799a8148.jpg",
    "stock": 95,
    "variants": []
  },
  {
    "id": "1767908938311",
    "name": "Aguja Carburador para Tillotson Paquete 85 Unidades",
    "description": "No permitas que tornillos de baja calidad comprometan tu equipo. Este perno ofrece el ajuste preciso que necesitas para un funcionamiento seguro y duradero. 🛠️✨\n\n✅ Ajuste de Precisión: Rosca uniforme para un roscado suave y firme. ✅ Encastre de Seguridad: Cabeza diseñada para evitar barridos durante el apriete. ✅ Material Robusto: Acero galvanizado de alta calidad resistente al desgaste. ✅ Referencia: A4334-216-25.\n\n¡Detalles que garantizan la potencia de tu trabajo! 💪🚜",
    "price": 11.27,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag93bc-rls/_assets/media/71d3b9eeb51d4aba9a748692f1d55e26.jpg",
    "stock": 87,
    "variants": []
  },
  {
    "id": "1767974272270",
    "name": "Kit Carburador para Sthil MS381 Por 4 unidad",
    "description": "Te presentamos nuestro Kit de Reparación CRK-ST381-25, que incluye todo lo necesario para renovar las piezas de desgaste de tu carburador. Los diafragmas con el tiempo se endurecen y pierden su flexibilidad, pero con este kit podrás recuperar el rendimiento original de tu motor.\n\n✅ Restauración Completa: Incluye diafragmas, empaques, aguja de flote y resortes. ✅ Calidad Profesional: Materiales resistentes a la corrosión por combustibles modernos. ✅ Referencia: CRK-ST381-25.\n\n¡Ahorra dinero y deja tu equipo como nuevo con un mantenimiento preventivo! ⛽✨",
    "price": 3.16,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-chyibp4/_assets/media/ed6fd093b82f816a45db1065ca48fcc7.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768064180468",
    "name": "Retendor para Stihl MS 210/230/250 Paquete de 10 unidades",
    "description": "Te presentamos nuestro Juego de Retenedores ST250-007-25, diseñados con un sellado reforzado y resorte de tensión interna para garantizar un ajuste hermético sobre el cigüeñal. Un motor seco es un motor que dura más. 🛠️✨\n\n✅ Sellado de Doble Acción: Evita la salida de aceite y la entrada de suciedad al cárter. ✅ Resistencia Térmica: Material elástico de alta calidad que soporta altas revoluciones y calor. ✅ Kit Completo: Incluye la pareja de retenedores para una renovación total. ✅ Referencia: ST250-007-25.\n\n¡Pequeños componentes que aseguran el corazón de tu herramienta! 💪🚜",
    "price": 3.16,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-cxlcc5s/_assets/media/2caeb09f969b792f644a0b856c9bab9d.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768064976466",
    "name": "kit Carburador para Motosierra 5800 Por 5 Unidad",
    "description": "Te presentamos nuestro Kit de Reparación CRK-5800-25, diseñado específicamente para restaurar la succión y el bombeo de combustible en tu carburador. Es la forma más rápida y económica de devolverle la vida a tu herramienta de trabajo. ⛽✨\n\n✅ Flexibilidad Garantizada: Membranas de alta calidad que responden con precisión a los impulsos del motor. ✅ Sellado Perfecto: Incluye empaques de precisión para evitar entradas de aire no deseadas. ✅ Compatibilidad Profesional: Ideal para modelos de motosierras serie 5800 y similares. ✅ Referencia: CRK-5800-25.\n\n¡Mantén tu equipo siempre a punto para la próxima jornada! 💪🌲",
    "price": 2.48,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-cwetig4/_assets/media/cb1846cc7204a6ad93c21e437863dfdf.png",
    "stock": 29,
    "variants": []
  },
  {
    "id": "1768065319329",
    "name": "Bomba de Aceite para MS 170/250 Paquete de 10 unidades",
    "description": "Un sinfín desgastado puede hacer que la bomba de aceite deje de funcionar, provocando que la cadena se sobrecaliente y dañe la espada. ¡Evita reparaciones costosas con un reemplazo a tiempo! 🛠️✨  ✅ Engrane de Precisión: Diseñado para un acople perfecto con el tambor de embrague. ✅ Material Resistente: Fabricado en bronce/latón de alta durabilidad para resistir la fricción constante. ✅ Flujo Constante: Asegura que el aceite llegue siempre a la cadena. ✅ Referencia: ST250-005-25.  ¡Protege tu equipo y trabaja con seguridad! 💪",
    "price": 27.05,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-ctnvwec/_assets/media/f979e9bf3dc14cdc0eebcc589f5b4ba5.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768066042333",
    "name": "Diafragma para Zama Leva Paquete de 44 unidades",
    "description": "Esta pieza actúa como el \"corazón\" del sistema de combustible, bombeando la mezcla exacta que tu motor necesita para rugir con fuerza. Con el tiempo, los diafragmas se estiran o se endurecen; cámbialo por nuestro repuesto de alta calidad y siente la diferencia en el arranque. ⚡⛽\n\n✅ Flexibilidad Superior: Fabricado con materiales elásticos que aseguran un bombeo constante. ✅ Resistencia Química: Diseñado para soportar los aditivos de los combustibles modernos. ✅ Ajuste de Precisión: Compatible con sistemas tipo ZAMA para una instalación directa y sin fugas. ✅ Referencia: DIAF-ZAMA.\n\n¡Devuélvele la agilidad a tu herramienta y trabaja sin interrupciones! 💪✨",
    "price": 23.67,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-cbat8yk/_assets/media/579f8cf9b34bad54840e1768a3068530.png",
    "stock": 44,
    "variants": []
  },
  {
    "id": "1768066554664",
    "name": "Manguera Aceite para Stihl MS250 Paquete de 10 Unidades",
    "description": "Esta pieza es la encargada de transmitir los pulsos de presión del cárter al carburador para que este bombee combustible. Si la manguera está agrietada o tostada por el calor, tu motor no recibirá la gasolina necesaria para trabajar. ¡Renuévala con nuestra referencia de alta calidad!\n\n✅ Transferencia Eficiente: Asegura el bombeo constante de combustible al carburador. ✅ Material de Alta Resistencia: Goma flexible diseñada para soportar altas temperaturas y vibraciones. ✅ Ajuste Hermético: Previene fugas de presión que afectan el rendimiento. ✅ Referencia: ST250-014-25.\n\n¡Pequeños repuestos que hacen que tu motor rinda como nuevo! 💪✨",
    "price": 9.02,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-cetrrse/_assets/media/41bc2dc98a0a0af5d5942c680e384aa7.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1768069431548",
    "name": "Set Retenedor para Desborzadora Por 8 Unidades",
    "description": "Te presentamos nuestro Juego de Retenedores BC430-002-25, diseñados específicamente para motores de 43cc y 52cc. Estas piezas aseguran que la mezcla de combustible y aire se mantenga dentro del cárter, garantizando un arranque fácil y una potencia constante sin desperdiciar lubricante. 🛠️✨\n\n✅ Sellado de Precisión: Evita fugas de compresión y de aceite. ✅ Compatibilidad Universal: Ideal para la mayoría de motores chinos de 43cc y 52cc. ✅ Material Resistente: Caucho de alta durabilidad que soporta la fricción y el calor. ✅ Referencia: BC430-002-25.\n\n¡Pequeños repuestos, grandes soluciones para tu equipo! 💪🚜",
    "price": 12.4,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-cnzh-vo/_assets/media/8f1f80bb8026028de237118c58c920e0.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768069972005",
    "name": "Manifold para 5200/5800 Por 8 undiad",
    "description": "Te presentamos el Codo de Admisión S58100-004-25, la pieza clave que conecta el carburador con el motor. Un codo agrietado permite que entre aire sucio y empobrece la mezcla, lo que puede causar daños graves al cilindro. ¡Cámbialo y asegura un flujo de aire perfecto!\n\n✅ Sellado Hermético: Base metálica reforzada para evitar deformaciones por calor. ✅ Máxima Durabilidad: Fabricado con caucho de alta resistencia a la gasolina y vibraciones. ✅ Referencia: S58100-004-25.\n\n¡Mantén la mezcla perfecta y protege la vida de tu motor! 💪✨",
    "price": 7.2,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-cuq4dws/_assets/media/710c208ad4a0b9d103b0faa929dcf5bc.png",
    "stock": 8,
    "variants": []
  },
  {
    "id": "1768070860186",
    "name": "Kit de Trinquete para Sthil MS180 Paquete de 45 Unidad",
    "description": "Te presentamos nuestro Kit de Trinquete de Arranque ST180-006-25, la solución ideal para restaurar el sistema de encendido de tu desbrozadora o motosierra. Este kit completo permite que el mecanismo enganche con precisión desde el primer intento. 🛠️✨\n\n✅ Enganche Seguro: Recupera la tracción inmediata al tirar de la cuerda. ✅ Kit Completo: Incluye trinquetes, resortes de retorno y arandela de seguridad. ✅ Material de Alta Tenacidad: Fabricado en polímero reforzado para resistir impactos y fricción. ✅ Referencia: ST180-006-25.\n\n¡Vuelve al trabajo sin frustraciones y con un arranque suave! 💪",
    "price": 16.91,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-chx835w/_assets/media/61e8dbc4cc8bbb207842864d5d321fe8.png",
    "stock": 45,
    "variants": []
  },
  {
    "id": "1768071916876",
    "name": "Kit de Trinquete para Stihl MS 361 Paquete de 25 Unidad",
    "description": "Diseñado para soportar la tensión de motores de alto rendimiento, este kit devuelve la tracción inmediata a tu polea de arranque. Un mecanismo en buen estado no solo facilita el encendido, sino que protege los componentes internos de impactos innecesarios. 🛠️✨\n\n✅ Máximo Agarre: Geometría de trinquete diseñada para un acople seguro y firme. ✅ Retorno Preciso: Incluye resortes de alta elasticidad que garantizan que el trinquete regrese a su posición original. ✅ Resistencia Profesional: Fabricado con polímeros industriales de alta tenacidad. ✅ Referencia: ST365-001-27.\n\n¡Recupera la confianza en tu herramienta desde el primer tirón! 💪⚡",
    "price": 31,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-chx835w/_assets/media/61e8dbc4cc8bbb207842864d5d321fe8.png",
    "stock": 50,
    "variants": []
  },
  {
    "id": "1768072466089",
    "name": "Brida para Generador ET950 Por 7 Unidad",
    "description": "Te presentamos nuestro Juego de Bridas ET950-004-25, diseñadas específicamente para generadores portátiles tipo ET950. Estas piezas son fundamentales para asegurar la conexión entre el carburador y el bloque del motor, garantizando que la mezcla de combustible sea siempre la correcta. 🔌⛽\n\n✅ Sellado de Precisión: Evita fugas de vacío que inestabilizan el motor. ✅ Material de Alta Resistencia: Fabricadas para soportar la presión y las vibraciones constantes del generador. ✅ Pack de Renovación: Incluye las piezas necesarias para un ajuste firme y seguro. ✅ Referencia: ET950-004-25.\n\n¡Asegura tu fuente de energía y trabaja con total confianza! 💪✨",
    "price": 15.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-c4t3bkg/_assets/media/024d1662565d4aee0599691e0272611d.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768073067110",
    "name": "Carburador para SR420 MS361 Por 4 Unidad",
    "description": "Te presentamos nuestro Kit de Reparación CRK-ST420-20. Este set incluye todo lo necesario para renovar el sistema de combustión, desde los diafragmas hasta la aguja, asegurando que tu motor reciba la mezcla perfecta de aire y gasolina. ⛽✨\n\n✅ Restauración Completa: Incluye diafragmas, empaques, aguja de flote y palanca de ajuste. ✅ Máxima Compatibilidad: Diseñado específicamente para modelos de alto rendimiento como SR420 y MS361. ✅ Calidad Profesional: Materiales resistentes que prolongan la vida útil de tu carburador. ✅ Referencia: CRK-ST420-20.\n\n¡Dale a tu herramienta el cuidado que merece y vuelve al trabajo con toda la potencia! 💪",
    "price": 3.61,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-c2uvipi/_assets/media/af5390b9589d56bf7c66177ddc10d31a.png",
    "stock": 22,
    "variants": []
  },
  {
    "id": "1768074032018",
    "name": "Kit Carburador para  420MAQ. CHINAS Por 5 unidades",
    "description": "Te presentamos nuestro Kit de Reparación  CRK-MA420-20. Este set completo incluye todo lo necesario para que tu equipo vuelva a rugir con la potencia del primer día. Al renovar los componentes internos, aseguras un bombeo de combustible constante y una mezcla perfecta. ⛽✨\n\n✅ Kit Integral: Incluye diafragmas, empaques, aguja de flote, resorte y balancín. ✅ Máximo Rendimiento: Materiales elásticos de alta calidad que garantizan una respuesta inmediata al acelerar. ✅ Compatibilidad: Diseñado para modelos de alto desempeño tipo 381. ✅ Referencia: CRK-MA420-20.\n\n¡Dale una segunda vida a tu herramienta con repuestos de calidad! 💪🌲",
    "price": 3.16,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-dexblig/_assets/media/11accbca418db9d6b76b3bfff4d8cfda.png",
    "stock": 1,
    "variants": []
  },
  {
    "id": "1772117836997",
    "name": "Cinta de Arranque Para Maquinas Chinas BC430/520",
    "description": "Recupera la funcionalidad de tu maquinaria con este repuesto de alta tensión, diseñado para ofrecer un rebote preciso y duradero. ¡La solución económica y eficiente para que tu trabajo no se detenga! 🚜💨\n\n✅ Alta Resistencia: Fabricado en acero elástico de primera calidad para soportar miles de arranques.\n✅ Tensión Óptima: Diseñado para un retorno suave y constante del cordón de arranque.\n✅ Versatilidad: Compatible con diversos modelos de motores pequeños, motobombas y generadores.",
    "price": 1.69,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcqdpgmvi/_assets/media/d7ddab06aec0eddda4b9bd139127c156.png",
    "stock": 12,
    "variants": []
  },
  {
    "id": "1772119812897",
    "name": "Cinta de Arranque Para stihl  MS361/661/MS382",
    "description": "Diseñado con acero de alta flexibilidad, este repuesto garantiza que el cordón de arranque regrese a su posición de forma inmediata y suave. ¡Una reparación rápida que te ahorra tiempo y dinero! 🚜💨\n\n✅ Material de Alta Calidad: Acero templado resistente a la fatiga para una larga vida útil.\n✅ Compatibilidad: Ideal para motores estacionarios, motobombas y equipos de jardinería.\n✅ Instalación Directa: Diseñado para encajar perfectamente en la polea del arrancador.\n✅ Referencia: ST361-015-25.\n\n¡Mantén tu maquinaria en óptimas condiciones con los mejores repuestos! 🔧✨",
    "price": 1.8,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcb4kiaku/_assets/media/4759953aa6147f8fdaccb44c5242246d.png",
    "stock": 7,
    "variants": []
  },
  {
    "id": "1772120154064",
    "name": "Cinta de Arranque Para Stihl MS660",
    "description": "Específicamente diseñada para modelos de alta potencia, esta cinta ofrece la tensión exacta necesaria para soportar el trabajo pesado en el campo o la montaña. 🪵🪓\n\n✅ Compatibilidad Exacta: Diseñada para el modelo Stihl MS660 y equipos compatibles.\n✅ Máxima Durabilidad: Acero de alta resistencia que soporta ciclos de arranque intensivos.\n✅ Ajuste Perfecto: Incluye el soporte plástico para una instalación más sencilla y precisa.\n✅ Referencia: ST660-103-18.\n\n¡No dejes que un detalle detenga tu productividad! 🛠️✨",
    "price": 2.48,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcb518nao/_assets/media/905873a3c06697733e789042aeffbf2a.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1772124759420",
    "name": "Cinta de Arranque Para Stihl SR420",
    "description": "Diseñada para resistir el uso continuo y las condiciones exigentes del campo, esta cinta garantiza un retorno potente y fiable del cordón, permitiéndote encender tu atomizadora con el mínimo esfuerzo. 💪⚙️\n\n✅ Especializada: Ajuste perfecto para el modelo Stihl SR420 y atomizadoras compatibles.\n✅ Máxima Tensión: Fabricada en acero elástico de alta calidad para un rebote instantáneo.\n✅ Durabilidad Extrema: Resistente a la fatiga del metal por arranques repetitivos.\n✅ Referencia: SR-420-007-25.\n\n¡Mantén tu equipo Stihl trabajando como nuevo! 🛠️✨",
    "price": 1.8,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcch2tvas/_assets/media/b60ea572ee001cbc7213f362f274b5fd.png",
    "stock": 9,
    "variants": []
  },
  {
    "id": "1772132353506",
    "name": "Cinta de Arranque Con Base  Para Maquinas Chinas 5800",
    "description": "Diseñado para ofrecer una tensión constante y una larga vida útil, este repuesto es la clave para que tu maquinaria encienda al primer intento, sin tirones fallidos. ¡Una reparación sencilla que marca la diferencia en el campo y el taller! 🚜💨\n\n✅ Tensión de Precisión: Fabricado en acero elástico de alta resistencia para un retorno inmediato.\n✅ Durabilidad Garantizada: Tratamiento térmico para soportar el uso intensivo y evitar deformaciones.\n✅ Fácil Reemplazo: Viene alojado en su soporte para facilitar una instalación segura y rápida.\n✅ Referencia: S58100-007-15.\n\n¡Mantén tus equipos siempre operativos con repuestos de calidad! 🔧✨",
    "price": 2.03,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcc7obcqq/_assets/media/10c47f9cce57d0ee10d12247dfc69b65.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1772133678195",
    "name": "Cinta de Arranque Para Stihl MS170/180/250/440",
    "description": "Fabricado con acero de alta flexibilidad, este resorte garantiza que el sistema de arranque de tu motor recupere su tensión original, permitiendo encendidos suaves y rápidos en cada tirón. 💪💨\n\n✅ Material Premium: Acero templado diseñado para resistir la fatiga y el uso constante.\n✅ Retorno Inmediato: Tensión calibrada para una recuperación del cordón sin esfuerzo.\n✅ Versatilidad: Compatible con diversos modelos de motores pequeños y maquinaria de jardín.\n✅ Referencia: ST170-008-25.\n\n¡Repara con confianza y mantén tu equipo como nuevo! 🔧✨",
    "price": 1.8,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcc4t9i-m/_assets/media/3a5082de3af6a982de44f69d45836731.png",
    "stock": 7,
    "variants": []
  },
  {
    "id": "1772134251234",
    "name": "Cinta de Arranque Para Stihl 381",
    "description": "Si notas que el cordón de arranque regresa con lentitud o se queda suelto, es una señal clara de fatiga en el resorte. Cámbialo a tiempo y evita complicaciones en medio de tus labores. ¡Calidad y resistencia en cada giro! 🚜💨\n\n✅ Material de Alta Resistencia: Acero elástico de grado industrial para soportar tensiones constantes.\n✅ Retorno Preciso: Diseñado para una recuperación inmediata y fluida del cordón.\n✅ Durabilidad Extrema: Resistente al desgaste mecánico y a la fatiga del metal.\n✅ Referencia: ST380-104-18.\n\n¡Dale a tu motor el cuidado que merece con repuestos de confianza! 🔧✨",
    "price": 1.8,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahccydb9yu/_assets/media/4759953aa6147f8fdaccb44c5242246d.png",
    "stock": 14,
    "variants": []
  },
  {
    "id": "1772135067234",
    "name": "Cinta de Arranque Para Husqvarna 61/272xp/281",
    "description": "Fabricado con acero de alta calidad, este resorte garantiza que el cordón regrese a su lugar de forma instantánea y segura, evitando atascos y facilitando cada encendido. 🛠️✨\n\n✅ Tensión Superior: Diseñado para un retorno rápido y fluido del sistema de arranque.\n✅ Resistencia Térmica: Soporta las condiciones de trabajo más exigentes sin perder su forma.\n✅ Durabilidad: Acero templado de alta flexibilidad para una vida útil prolongada.\n✅ Referencia: HQ61-003-25.\n\n¡Mantén tu equipo siempre listo para la acción! 💪🚜",
    "price": 1.8,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcczs7uty/_assets/media/4bb89568851c862109098e0b1bac6549.png",
    "stock": 8,
    "variants": []
  },
  {
    "id": "1772135947562",
    "name": "Cinta de Arranque Para Husqvarna 365/372",
    "description": "Este repuesto está diseñado específicamente para ofrecer una tensión de alta respuesta, asegurando que el cordón de arranque regrese a su posición original de forma inmediata. ¡No pierdas tiempo con tirones fallidos y vuelve al trabajo con total confianza! 💪💨\n\n✅ Acero de Alta Calidad: Gran resistencia elástica para soportar el uso intensivo en el campo.\n✅ Retorno Eficiente: Evita atascos y prolonga la vida útil de tu polea de arranque.\n✅ Diseño Robusto: Fabricado para resistir la fatiga del metal incluso en condiciones exigentes.\n✅ Referencia: HUSQ365-007-25.\n\n¡Mantén tu maquinaria trabajando como nueva con repuestos de calidad! 🛠️✨",
    "price": 1.8,
    "category": "Cintas de Arranque",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcc2i0uje/_assets/media/3bd92acefbe849d48bb70a79aa335bfa.png",
    "stock": 6,
    "variants": []
  },
  {
    "id": "1772137314880",
    "name": "Lanza Fumigadora",
    "description": "deal para aplicaciones agrícolas y de jardinería donde necesitas cubrir áreas amplias o llegar al centro de follajes densos de forma cómoda y eficiente. ¡Haz que cada gota cuente! 🚜✨\n\n✅ Longitud Ideal: 60 cm de largo para mayor cobertura y comodidad durante el trabajo.\n✅ Compatibilidad Total: Diseñada específicamente para modelos de fumigadora tipo 768.\n✅ Control Ergonómico: Empuñadura antideslizante de color naranja para un agarre seguro y visible.\n✅ Construcción Duradera: Materiales resistentes a químicos y corrosión para una larga vida útil.\n\n¡Potencia tu equipo de fumigación hoy mismo! 🛠️🌱",
    "price": 4.58,
    "category": "Lanzas",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcdbt0l2g/_assets/media/cc5d1d806bf1eeb56861fb6a9bcda9a0.png",
    "stock": 37,
    "variants": [
      {
        "id": "1772222494508",
        "name": "Lanza de 90",
        "price": 6.99,
        "stock": 15
      },
      {
        "id": "1772222845792",
        "name": "Lanza de 60",
        "price": 4.4,
        "stock": 37
      }
    ]
  },
  {
    "id": "1772225902391",
    "name": "Valvula de Descompresion para Todas las Motosierras Stihl",
    "description": "Su función es simple pero vital: libera parte de la presión en el cilindro durante el arranque, permitiendo que el cordón se deslice suavemente y protegiendo tanto tu brazo como el sistema de poleas de tu equipo.\n\n✅ Encendido Suave: Reduce significativamente la resistencia al tirar de la cuerda.\n✅ Protección Mecánica: Menor impacto y desgaste para el arrancador manual y el pistón.\n✅ Compatibilidad: Diseñada para modelos de alta potencia como la Stihl MS660 y similares.\n✅ Referencia: ST660-072-18.\n\n¡Haz que el trabajo pesado comience de la manera más ligera! 🛠️✨",
    "price": 4.49,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcjgjlixu/_assets/media/6ca93bff9970aba8e7d9c94bce351753.png",
    "stock": 38,
    "variants": []
  },
  {
    "id": "1772226645654",
    "name": "Tuerca de Barra Para Todas las Motosierras Stihl",
    "description": "Fabricada bajo altos estándares de resistencia, esta tuerca garantiza que las vibraciones del motor no comprometan la estabilidad de tus herramientas. ¡Calidad que se siente en cada vuelta! 🪵🪓\n\n✅ Ajuste de Precisión: Rosca diseñada específicamente para modelos de la marca Stihl.\n✅ Alta Resistencia: Material metálico tratado para soportar la presión y el desgaste.\n✅ Seguridad Garantizada: Ideal para asegurar piezas en motosierras, desbrozadoras y más.\n✅ Referencia: STH-002-27.\n\n¡Mantén tus equipos siempre a punto con los mejores repuestos! ✨🔧",
    "price": 31.56,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcjenwmcq/_assets/media/8983778b4732aafdfc8c7e0c004cdb24.png",
    "stock": 100,
    "variants": []
  },
  {
    "id": "1772227889449",
    "name": "Switch Completo (19mm) Para Maquinas Chinas BC430/BC520/Mitsubishi TL43",
    "description": "Con un diseño ergonómico y gatillos de alta sensibilidad, este mando te permite trabajar por horas con un control preciso sobre el motor. ¡Repara hoy y vuelve al campo con todo el poder! 🚜💨\n\n✅ Mando Ergonómico: Agarre antideslizante diseñado para reducir la fatiga en la mano.\n✅ Sistema Todo en Uno: Incluye gatillo de aceleración, bloqueo de seguridad y switch de parada.\n✅ Compatibilidad Versátil: Perfecto para modelos BC430, BC520, TL43 y similares.\n✅ Instalación Lista: Viene con cableado protegido y terminales listos para conectar.\n✅ Referencia: BC430-009-25.",
    "price": 7.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcjyixt3q/_assets/media/c78b558f087cb18d7104e39737d18032.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1772228836349",
    "name": "Pinion o Sprocket 3/8-7 Mejorados Vienen en Tubo Plastico (Empaque de 10 unidades)",
    "description": "Si sientes vibraciones inusuales o notas un desgaste excesivo en los eslabones, es momento de renovar tu piñón. Este sprocket está diseñado para ofrecer un encaje perfecto y una tracción constante, asegurando cortes más limpios y rápidos. 🪓💨\n\n✅ Rendimiento Superior: Configuración de 7 dientes para un paso de cadena de 3/8\".\n✅ Alta Resistencia: Fabricado en aleación metálica de alta dureza para soportar la fricción constante.\n✅ Menos Desgaste: Superficie de contacto optimizada para prolongar la vida útil de la cadena.\n✅ Referencia: ST660-013-18.",
    "price": 15.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcjc7sfpa/_assets/media/a3d9761a3f52f5e89534c7c1ecfb10a2.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1772233371526",
    "name": "Silenciador Con Soporte Para Stihl MS210 MS230 MS250",
    "description": "Un silenciador en buen estado optimiza el flujo de aire del motor, evitando el sobrecalentamiento y manteniendo la potencia de tu motosierra en cada corte. 🪓💨\n\n✅ Reducción de Ruido: Diseñado para cumplir con los niveles de sonido adecuados para el operario.\n✅ Flujo de Escape Eficiente: Mejora el rendimiento térmico del cilindro.\n✅ Compatibilidad: Ideal para modelos Stihl MS210, MS230 y MS250.\n✅ Resistencia: Acero con recubrimiento resistente a altas temperaturas.\n✅ Referencia: ST250-008-25.\n\n¡Renueva tu equipo y trabaja con mayor comodidad! 🛠️✨",
    "price": 7.88,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcjwfyq0q/_assets/media/f075bd08d2c5d57e9296598ec4c77e4e.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1772237723774",
    "name": "ARRANQUE COMPLETO POLEA DOBLE PARA MAQUINAS CHINAS 5800",
    "description": "✅ Sistema de Polea Doble: Diseñado para reducir el esfuerzo al tirar y mejorar la durabilidad del mecanismo.\n✅ Instalación Directa: Conjunto pre-ensamblado que incluye carcasa, polea, resorte y cordón.\n✅ Compatibilidad: Ideal para motosierras chinas modelo 5800 y similares de 52cc/58cc.\n✅ Referencia: S5800-013-25.\n\n¡Calidad y resistencia para que tu motor nunca se detenga! ✨⚙️",
    "price": 7.89,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcj7k0mmu/_assets/media/682ca3f3a8687cef1901e8f165fe5294.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772238024478",
    "name": "Arranque Completo Para GX35 4 Tiempos",
    "description": "Este conjunto completo está diseñado para ofrecer un encendido suave y fiable, eliminando la frustración de los tirones fallidos. ¡Instalación directa para que tu equipo no pase ni un día más en el taller! 🚜✨\n\n✅ Listo para Instalar: Conjunto pre-ensamblado con carcasa, polea, resorte y cordón.\n✅ Diseño Compacto: Fabricado con polímeros de alta resistencia para soportar el uso rudo.\n✅ Compatibilidad: Específicamente diseñado para motores tipo GX35 y equipos multifuncionales.\n✅ Referencia: GX35-002-27.\n\n¡Mantén tu motor siempre listo para arrancar! 🔧🚀",
    "price": 8.79,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahckoyoyns/_assets/media/3072622f83fbbbd9cadb2786a446e5d2.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772239054123",
    "name": "Arranque  Para Fumigadora Chinas Pequeña",
    "description": "Este conjunto viene totalmente ensamblado y listo para montar, ahorrándote tiempo y esfuerzo en reparaciones difíciles. Solo retira el anterior, instala este nuevo y ¡listo para arrancar! 🚀✨\n\n✅ Ensamble Total: Incluye carcasa, polea interna, resorte de retroceso y cordón con mango.\n✅ Diseño Compacto: Fabricado en polímero de alta densidad para máxima ligereza y resistencia.\n✅ Mecanismo Fiable: Sistema de trinquete diseñado para un enganche suave y efectivo.\n✅ Referencia: AR-001-15.\n\n¡Haz que el encendido de tu maquinaria sea siempre a la primera! 💪⚙️",
    "price": 5.66,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahckdhucgk/_assets/media/d6a1297459f453b0ff076d7a7785254c.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772242036437",
    "name": "Clutch Completo Con tornillo y Arandelas Para BC430/520/ Mitsubishi TL43",
    "description": "Si sientes que tu equipo pierde fuerza al contacto con la maleza o escuchas ruidos metálicos al acelerar, es muy probable que las zapatas de tu embrague necesiten un cambio. ¡Recupera el rendimiento original de tu herramienta! 🚜💨\n\n✅ Material de Alta Fricción: Diseñado para un agarre firme y sin deslizamientos innecesarios.\n✅ Resorte Reforzado: Tensión calibrada para un acople suave a las revoluciones correctas.\n✅ Compatibilidad: Ideal para desbrozadoras chinas de 43cc y 52cc (Modelos BC430/BC520).\n✅ Referencia: BC430-005-18.\n\n¡Haz que tu trabajo en el campo sea más productivo con repuestos de calidad! 🛠️✨",
    "price": 4.97,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahckdsivku/_assets/media/9123a3517670baf4a19e03051d0e8ead.png",
    "stock": 21,
    "variants": []
  },
  {
    "id": "1772243890157",
    "name": "Clutch For FS220-FS280",
    "description": "Te presentamos nuestro Embrague (Clutch) FS220-004-25, diseñado para soportar las jornadas más exigentes. Este componente asegura que la fuerza del motor se transmita de manera constante y segura a tu cuchilla o cabezal. ¡Recupera la eficiencia de tu equipo hoy mismo! ✨\n\n✅ Enganche Firme: Resortes de alta resistencia que evitan el deslizamiento. ✅ Material de Alta Fricción: Diseñado para un agarre máximo y menor desgaste térmico. ✅ Kit Completo: Incluye los bujes de montaje para una instalación precisa. ✅ Compatibilidad: Ideal para modelos profesionales de las series FS220 y FS280.\n\n¡Mantén tu herramienta trabajando al 100% con repuestos de confianza! 💪⚙️",
    "price": 6.09,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-omv2uf4/_assets/media/baf3e8606262db4fb16795d41c5632d2.png",
    "stock": 9,
    "variants": []
  },
  {
    "id": "1768232592104",
    "name": "Polea para 5200/5800 Paquete de 8 Unidades",
    "description": "Si notas que la cuerda se traba o que la polea tiene grietas, es momento de reemplazarla antes de que se rompa por completo en pleno trabajo. Nuestra referencia S58100-006-15 está diseñada para ofrecer un giro suave y una durabilidad superior.\n\n✅ Giro Fluido: Minimiza el esfuerzo necesario al tirar de la cuerda. ✅ Material Reforzado: Polímero de alta densidad que resiste el impacto y la fricción. ✅ Ajuste Preciso: Diseñada para encajar perfectamente en el sistema de rebobinado. ✅ Referencia: S58100-006-15.\n\n¡Asegura un arranque fácil y sin complicaciones! 💪✨",
    "price": 15.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-n9-jxsi/_assets/media/76f3df65045e8bfb61fab94a1810d5e4.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1768233498414",
    "name": "Filtro De Aire For Husqvarna 372 ",
    "description": "Te presentamos nuestra referencia HQ372-005-25, diseñada para motosierras de alto rendimiento. Su estructura de papel plisado de alta densidad atrapa hasta las partículas más finas de serrín y polvo, permitiendo que solo entre aire limpio a la cámara de combustión. 💨✨\n\n✅ Filtración Superior: Máxima protección contra el desgaste interno. ✅ Fácil Instalación: Diseño exacto para un ajuste hermético sin fugas. ✅ Rendimiento Óptimo: Mantiene el flujo de aire constante para un corte más rápido. ✅ Referencia: HQ372-005-25.\n\n¡No esperes a que tu motor falle, cambia tu filtro a tiempo y trabaja al máximo! 💪🔧",
    "price": 6.2,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-om-dzg8/_assets/media/afecef1beceaa94086a722b923999982.png",
    "stock": 1,
    "variants": []
  },
  {
    "id": "1768235487947",
    "name": "Filtro de Aire FS 160-180-220-250 450",
    "description": "Te presentamos el Filtro de Aire FS220-002-25, el aliado perfecto para tu desbrozadora o motoguadaña. Su diseño de papel plisado premium garantiza un flujo de aire constante mientras bloquea hasta el polvo más fino, protegiendo el corazón de tu herramienta. 🍃✨\n\n✅ Filtración de Alta Eficiencia: Atrapa partículas de serrín, tierra y polen. ✅ Estructura Reforzada: Marco de polímero que asegura un sellado hermético en la caja de aire. ✅ Larga Duración: Materiales diseñados para extender los intervalos de mantenimiento. ✅ Referencia: FS220-002-25.\n\n¡No dejes que la suciedad detenga tu trabajo! Mantén tu motor fresco y potente. 💪🪚",
    "price": 1.58,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-ocv6uzq/_assets/media/47665e37272b28397edd9f54819c7231.png",
    "stock": 1,
    "variants": []
  },
  {
    "id": "1768236716401",
    "name": "Filtro De Aire Para OLEOMAC 753-746",
    "description": "Un filtro saturado obliga al motor a trabajar con una mezcla \"rica\", aumentando el consumo de combustible y provocando depósitos de carbón en el cilindro. Cambiarlo a tiempo no solo protege tu inversión, sino que asegura que cada jornada sea más productiva y eficiente. 🍃✨\n\n✅ Filtración de Alta Gama: Papel plisado diseñado para retener las partículas más finas de polvo y vegetación. ✅ Estructura Resistente: Marco reforzado para un ajuste preciso y sellado total. ✅ Modelos Compatibles: Diseñado específicamente para series de alto desempeño como 753 y 746. ✅ Referencia: OLEO-001-15.\n\n¡No dejes que el polvo detenga tu potencia! 💪🪚",
    "price": 8.45,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-ocn6ahk/_assets/media/1dccb3d400448117ce3e157bc32dab3d.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768237260301",
    "name": "Clutch para Olemac 44-741 ",
    "description": "Te presentamos nuestro Clutch SP741-002-25, diseñado específicamente para modelos Oleo-Mac. Este componente es el encargado de transmitir toda la potencia del motor hacia el cabezal de corte. ¡Cámbialo y vuelve a trabajar con la eficiencia de una máquina nueva! 🌾✨\n\n✅ Enganche Preciso: Resortes de alta tensión para un acople suave y seguro. ✅ Material de Fricción Premium: Máximo agarre sin deslizamientos innecesarios. ✅ Durabilidad Garantizada: Resistente a las altas temperaturas generadas por el trabajo intensivo. ✅ Referencia: SP741-002-25.\n\n¡No dejes que un embrague patinando arruine tu jornada de trabajo! 💪🔥",
    "price": 7.67,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-obbchfw/_assets/media/5b2ddab3ec6fe6a8eb1b3c8d692bf567.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768239705775",
    "name": "Filtro De Gasolina Para Stihl 660 Boca Delgada Paquete de 12 Unidades",
    "description": "Te presentamos nuestro Filtro de Gasolina de Boca Delgada (Ref. ST0000-353-21), diseñado específicamente para modelos de alto desempeño como la Stihl 660. Su medio filtrante de alta densidad asegura que solo el combustible más limpio llegue al motor, evitando fallos de aceleración y costosas reparaciones. 🛠️🪚\n\n✅ Filtración de Precisión: Retiene partículas diminutas y residuos del tanque. ✅ Diseño de Boca Delgada: Asegura un ajuste hermético en la manguera de combustible. ✅ Compatibilidad Profesional: Ideal para motosierras de gran cilindrada. ✅ Referencia: ST0000-353-21.\n\n¡Pequeños repuestos que garantizan grandes jornadas de trabajo! 💪🌲",
    "price": 20.29,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-oxk2kbo/_assets/media/774af512e8a21608d9e1ce6378c58309.png",
    "stock": 25,
    "variants": []
  },
  {
    "id": "1768241105086",
    "name": "Clutch For FS220-FS280 ",
    "description": "Te presentamos nuestro Embrague (Clutch) FS220-004-25, diseñado para soportar las jornadas más exigentes. Este componente asegura que la fuerza del motor se transmita de manera constante y segura a tu cuchilla o cabezal. ¡Recupera la eficiencia de tu equipo hoy mismo! ✨\n\n✅ Enganche Firme: Resortes de alta resistencia que evitan el deslizamiento. ✅ Material de Alta Fricción: Diseñado para un agarre máximo y menor desgaste térmico. ✅ Kit Completo: Incluye los bujes de montaje para una instalación precisa. ✅ Compatibilidad: Ideal para modelos profesionales de las series FS220 y FS280.\n\n¡Mantén tu herramienta trabajando al 100% con repuestos de confianza! 💪⚙️",
    "price": 6.09,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-omv2uf4/_assets/media/baf3e8606262db4fb16795d41c5632d2.png",
    "stock": 9,
    "variants": []
  },
  {
    "id": "1768241351312",
    "name": "Transmision For BC430-520 28mmx9 ",
    "description": "iseñado para soportar largas jornadas de trabajo, este cabezal cuenta con tecnología de rodamientos sellados que evitan la entrada de polvo y residuos, garantizando un giro suave y una vida útil prolongada. ¡Ideal para quienes no se detienen ante la maleza más densa! 🌾✨\n\n✅ Ingeniería de Precisión: Calidad tipo Japón para un desempeño profesional. ✅ Ajuste Perfecto: Compatible con tubos de 28mm y eje de 9 estrías. ✅ Durabilidad Extrema: Cuerpo de aleación robusto y resistente a impactos. ✅ Referencia: BC430-106-27.\n\n¡Renueva la fuerza de tu equipo y trabaja con confianza! 💪⚙️",
    "price": 12.4,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-ohjpxy4/_assets/media/9571ffbc7954daa4af9f9c381ae4bb3a.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1768241960640",
    "name": "Polea Plastica para BC430-BC520 Paquete de 10 Unidades",
    "description": "Con el tiempo, las muescas internas de la polea se desgastan por la fricción, haciendo que el arranque \"patine\" o se trabe. Renuévala con nuestra polea de alta resistencia y vuelve a encender tu equipo con suavidad y a la primera. ⚡🪚\n\n✅ Material de Alta Tenacidad: Polímero diseñado para resistir tirones fuertes y calor. ✅ Diseño de Precisión: Asegura el correcto rebobinado de la cuerda de arranque. ✅ Referencia: BC430-069-27. ✅ Compatibilidad: Ideal para modelos tipo BC430 y similares.\n\n¡Mantén tu equipo listo para la acción! 💪✨",
    "price": 12.46,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-ouamkmo/_assets/media/b0a81b4a7f8f5375a05d570926936713.png",
    "stock": 7,
    "variants": []
  },
  {
    "id": "1768243704814",
    "name": "Boquilla Giratoria Grande For Fumigadora 768 ",
    "description": "Gracias a su diseño ajustable y giratorio, permite dirigir la nube de aspersión con exactitud, garantizando que el producto penetre en el follaje de manera uniforme. Ideal para fumigadoras motorizadas tipo 768 que requieren un trabajo pesado y constante. 💧✨\n\n✅ Cobertura Amplia: Diseño de campana que optimiza la dispersión del líquido. ✅ Ajuste Versátil: Conector de bronce giratorio para orientar el flujo según la necesidad del cultivo. ✅ Material Duradero: Plástico de alta densidad resistente a químicos agrícolas y boquilla interna de precisión. ✅ Referencia: F768-061-31.\n\n¡Optimiza tu tiempo y tus insumos con el equipo correcto! 💪 Fertilidad y protección en cada descarga.",
    "price": 23.96,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-oucdabs/_assets/media/c0b9583d82d7244eaa05b898e2ab351f.png",
    "stock": 4,
    "variants": []
  },
  {
    "id": "1768244364932",
    "name": "Resorte For 5200 Paquete de 40 Unidades",
    "description": "Te presentamos nuestra referencia S58100-005-15, un resorte de torsión diseñado con acero de alta memoria elástica. Es el encargado de devolver los trinquetes a su posición original para que el sistema de arranque esté siempre listo para el siguiente tirón. ¡Una pieza pequeña que evita grandes frustraciones en el campo! ⚡✨\n\n✅ Máxima Elasticidad: Recupera su forma original incluso tras miles de ciclos de arranque. ✅ Resistencia a la Corrosión: Tratamiento térmico para soportar la humedad y el trabajo pesado. ✅ Ajuste Universal: Compatible con diversos sistemas de arranque de desbrozadoras y motosierras. ✅ Referencia: S58100-005-15.\n\n¡No sufras más con un arranque flojo! Renuévalo hoy mismo. 💪⚙️",
    "price": 8.4,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-oz1aneg/_assets/media/83e4e18c7eb92b85d349196f2099a0b4.png",
    "stock": 15,
    "variants": []
  },
  {
    "id": "1768246006755",
    "name": "Tapon de la Manguera para Maquinas Chinas",
    "description": "Con el tiempo y el contacto constante con la gasolina, la goma tiende a endurecerse o agrietarse, provocando derrames peligrosos y pérdida de presión en el sistema. Cambiarlo es una de las reparaciones más sencillas y económicas para mantener tu equipo impecable. ✨🛠️\n\n✅ Sellado Hermético: Evita la entrada de suciedad al tanque y la salida de combustible. ✅ Diseño de Doble Orificio: Perfecto para sistemas con manguera de succión y retorno. ✅ Material Resistente: Goma de alta calidad diseñada para no degradarse con los hidrocarburos. ✅ Referencia: Tap-001.\n\n¡Un pequeño detalle que hace una gran diferencia en la limpieza de tu trabajo! 💪🍃",
    "price": 26.74,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-o1hyyi8/_assets/media/1106366dfb796e2e9b44ca4d21594fc7.png",
    "stock": 1,
    "variants": [
      {
        "id": "1772293234202",
        "name": "Paquete de 25",
        "price": 29.85,
        "stock": 3
      },
      {
        "id": "1772293267219",
        "name": "Inidvidual",
        "price": 0.3,
        "stock": 25
      }
    ]
  },
  {
    "id": "1768247276665",
    "name": "Amortiguador Pequeño For Husqvarna 61",
    "description": "Con el tiempo, la goma del amortiguador pierde su elasticidad o se agrieta por el contacto con aceites y el calor, haciendo que la máquina se sienta rígida o inestable. Cambiar estos pequeños soportes te devuelve la suavidad de manejo y evita la fatiga muscular. ✨🌲\n\n✅ Absorción Superior: Goma de alta densidad que aísla eficazmente las vibraciones del motor. ✅ Instalación Directa: Incluye el perno roscado reforzado para un montaje rápido y seguro. ✅ Resistencia Profesional: Fabricado para soportar los impactos y la torsión del corte forestal. ✅ Referencia: HQ61-011-27.\n\n¡Trabaja más cómodo y protege los componentes internos de tu equipo! 💪⚙️",
    "price": 45,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-o-qfx0w/_assets/media/e9ddf685f50ab2b737675ab277ec1b7d.png",
    "stock": 1,
    "variants": [
      {
        "id": "1772293593496",
        "name": "Paquete de 25",
        "price": 50.72,
        "stock": 2
      },
      {
        "id": "1772293612465",
        "name": "Inidviual",
        "price": 2.03,
        "stock": 17
      }
    ]
  },
  {
    "id": "1768253170988",
    "name": "Amortiguador Grande For Husqvarna 61",
    "description": "Te presentamos nuestro Amortiguador Grande HQ61-012-27, diseñado específicamente para la robusta Husqvarna 61. Este soporte de goma reforzada absorbe los picos de vibración del motor, permitiéndote realizar cortes más precisos con mucho menos esfuerzo físico. 🌲✨\n\n✅ Goma de Alta Resistencia: Formulada para soportar el calor del motor y la exposición a aceites. ✅ Estructura Robusta: Base metálica vulcanizada con perno de acero para un anclaje firme. ✅ Control Total: Recupera la sensación de \"máquina nueva\" y mejora el guiado en cortes profundos. ✅ Referencia: HQ61-012-27.",
    "price": 0,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-pdnscbi/_assets/media/f16477880fb35cda3d0bc1eb9583ae87.png",
    "stock": 0,
    "variants": [
      {
        "id": "1772293713439",
        "name": "Paquete de 25",
        "price": 53.55,
        "stock": 2
      },
      {
        "id": "1772293742981",
        "name": "Inidviual",
        "price": 2.14,
        "stock": 14
      }
    ]
  },
  {
    "id": "1768254351847",
    "name": "Kit Amortiguador For 6500-GX390",
    "description": "Nuestro Kit de Amortiguador Y6ET-6500-25 está diseñado específicamente para motores de gran tamaño como el GX390. Este soporte de goma reforzada con base metálica actúa como un escudo, absorbiendo el impacto del motor para que tu generador trabaje de forma más silenciosa y segura. ✨🛠️\n\n✅ Estructura de Servicio Pesado: Soporta el peso y torque de motores de 13HP a 15HP. ✅ Base Vulcanizada: Unión ultra resistente entre el metal y el elastómero para evitar desprendimientos. ✅ Instalación de Precisión: Pernos roscados de alta resistencia para un anclaje perfecto al marco. ✅ Referencia: Y6ET-6500-25.\n\n¡No permitas que la vibración acorte la vida de tu planta eléctrica! 💪🔋",
    "price": 11.27,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-pfsnogu/_assets/media/61eba18092c3f9158e8fce610d758768.png",
    "stock": 3,
    "variants": []
  },
  {
    "id": "1768255187820",
    "name": "Cabezal para Shindaiwa | Paquete de 20 Unidades",
    "description": "Este cabezal está diseñado para el trabajo pesado, permitiendo un flujo de nylon constante y resistente a los impactos contra rocas o bordes. Ideal para mantener fincas, jardines extensos y áreas municipales con la calidad que solo un equipo Shindaiwa B45 puede ofrecer. ✨🪚\n\n✅ Construcción Reforzada: Materiales de alta resistencia para una vida útil prolongada bajo uso intensivo. ✅ Fácil Recarga: Sistema diseñado para minimizar el tiempo de inactividad al cambiar el hilo. ✅ Corte Preciso: Balance perfecto que reduce las vibraciones en el eje de la máquina. ✅ Referencia: SHB45-003-18.",
    "price": 74.98,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-ps0slja/_assets/media/a130af4c691af57a05a929aada1dea14.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768255816461",
    "name": "Set Amortiguador For MS381 ",
    "description": "Cuando los amortiguadores se desgastan o se ablandan por el uso, la máquina vibra en exceso, lo que no solo cansa tus brazos, sino que también afecta la precisión de tus cortes. Cambiar este soporte es la solución más efectiva para trabajar con suavidad y proteger la estructura de tu equipo. ✨🛠️\n\n✅ Máxima Absorción: Goma de alta fidelidad que minimiza las sacudidas del motor. ✅ Base Reforzada: Incluye insertos metálicos para un ajuste firme y duradero. ✅ Diseño Específico: Compatible 100% con el chasis de la serie MS361. ✅ Referencia: ST361-017-25.\n\n¡Cuida tu salud y la vida útil de tu motor con repuestos de calidad! 💪⚙️",
    "price": 2.95,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-phxcj2c/_assets/media/cebc6d7f8c0a9cf532f28eb568591dae.png",
    "stock": 4,
    "variants": [
      {
        "id": "1772294031568",
        "name": "Paquete de 10 Unidades",
        "price": 32.69,
        "stock": 10
      },
      {
        "id": "1772294062582",
        "name": "Inidvidual",
        "price": 3.27,
        "stock": 4
      }
    ]
  },
  {
    "id": "1768315766790",
    "name": "Amortiguador Sin Base For Husqvarna 365-372",
    "description": "Nuestro Amortiguador de Resorte HUSQ365-005-25 es la solución ideal para reemplazar resortes cedidos o fatigados. A diferencia de los amortiguadores de goma, este resorte de acero ofrece una respuesta más dinámica y una durabilidad superior en trabajos forestales intensivos. ✨🛠️\n\n✅ Acero de Alta Memoria: Mantiene su tensión y capacidad de absorción por mucho más tiempo. ✅ Reducción de Fatiga: Minimiza las vibraciones transmitidas al manubrio para un manejo más suave. ✅ Ajuste de Precisión: Incluye el buje roscado central para una instalación firme y segura. ✅ Referencia: HUSQ365-005-25.\n\n¡Mantén tu equipo profesional funcionando con la suavidad que mereces! 💪⚙️",
    "price": 24.8,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-t0hjwj0/_assets/media/514de7ac8e1c45acd5bd22d30adecb40.png",
    "stock": 0,
    "variants": []
  },
  {
    "id": "1768316989660",
    "name": "Embolo For 768 ",
    "description": "Si notas que tu máquina ha perdido presión o tiene fugas constantes en la base de la bomba, es muy probable que el émbolo tenga rayaduras o desgaste por el uso de químicos abrasivos. Cambiar esta pieza garantiza un sellado perfecto y una presión constante para que tus cultivos reciban la protección que necesitan. ✨🛠️\n\n✅ Acero de Alta Calidad: Superficie con acabado espejo para reducir la fricción y el desgaste de los sellos. ✅ Resistencia Química: Fabricado para soportar la corrosión de fertilizantes y pesticidas. ✅ Ajuste Exacto: Específico para bombas de fumigadoras serie 768. ✅ Referencia: F768-016-18.\n\n¡Mantén tu fumigación al máximo nivel con repuestos profesionales! 💪🚜",
    "price": 10.82,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag-t-phh3i/_assets/media/f83e50a63cb4ec2d8132fb242ade540e.png",
    "stock": 4,
    "variants": []
  },
  {
    "id": "1772295224197",
    "name": "Clutch Completo Para Stihl 660",
    "description": "Diseñado para soportar el torque extremo de los trabajos forestales más exigentes, este embrague de tres zapatas garantiza un enganche firme y reduce el patinamiento, protegiendo la vida útil de tu motor. 🪓💨\n\n✅ Construcción Reforzada: Sistema de 3 zapatas con resortes de alta tensión para un acople perfecto.\n✅ Resistencia al Calor: Aleaciones metálicas tratadas para soportar altas temperaturas de fricción.\n✅ Compatibilidad Total: Diseñado específicamente para el modelo Stihl MS660 y similares de alta cilindrada.\n✅ Referencia: ST660-095-27.\n\n¡No permitas que un embrague desgastado detenga tu productividad! 🛠️✨",
    "price": 10.82,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcoe7lzno/_assets/media/ca86d831964b0edd815a4072cdbf7cb6.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772295897678",
    "name": "Clutch Completo Para Stihl MS382",
    "description": "Diseñado para soportar las altas revoluciones y el torque exigente del trabajo forestal, este componente garantiza un acople preciso, evitando deslizamientos que puedan sobrecalentar tu equipo. ¡Mantén tu herramienta trabajando al 100%! 🪓💨\n\n✅ Máximo Agarre: Sistema centrífugo de tres zapatas para un contacto firme con la campana.\n✅ Resistencia Térmica: Materiales de alta calidad que soportan las temperaturas extremas de fricción.\n✅ Compatibilidad Garantizada: Repuesto específico para el modelo Stihl MS382.\n✅ Durabilidad: Resortes de alta tensión que mantienen el rendimiento por más tiempo.\n✅ Referencia: ST382-004-25.\n\n¡Asegura cada corte con repuestos de confianza! 🛠️✨\n",
    "price": 7.44,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcolk6gra/_assets/media/9196427b4d3d6d9b6c39840c7dc91ae4.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772297749129",
    "name": "Clutch Completo con Tornillos y Arandelas Para Maruyama 420",
    "description": "Este kit no solo incluye el embrague de alta resistencia, sino también los pernos y arandelas de ajuste necesarios para una instalación completa y segura. ¡Evita que tu equipo patine y pierda presión en pleno trabajo! 💦💪\n\n✅ Kit Completo: Incluye pernos de montaje y arandelas de presión para una renovación total.\n✅ Alta Tracción: Zapatas con material de fricción diseñado para un acople inmediato.\n✅ Compatibilidad: Ideal para fumigadoras tipo 768 y marcas como Maruyama.\n✅ Referencia: MA420-002-18.",
    "price": 9.69,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcomalnoo/_assets/media/b250bfbc997b8472ceeeee935b6f1e6b.png",
    "stock": 4,
    "variants": []
  },
  {
    "id": "1772298959708",
    "name": "Clutch Completo Para Shindaiwa B45/B450",
    "description": "Diseñado para soportar jornadas intensas, este embrague asegura que el movimiento del motor se transmita al cabezal de corte de forma suave pero firme, evitando patinamientos y sobrecalentamientos innecesarios. ¡Haz que tu inversión rinda más! 🚜💨\n\n✅ Construcción de Alta Precisión: Fabricado para encajar perfectamente en sistemas de alto torque.\n✅ Material de Fricción Duradero: Zapatas diseñadas para resistir el desgaste por uso profesional.\n✅ Compatibilidad Garantizada: Ideal para modelos Shindaiwa B45 y B450.\n✅ Referencia: SH4B45-004-27.\n\n¡Mantén tu equipo operativo y listo para el campo! 🛠️✨",
    "price": 11.05,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcoq4hmwu/_assets/media/0ace4c34de159e85f4086596e4d9645f.png",
    "stock": 7,
    "variants": []
  },
  {
    "id": "1772300909937",
    "name": "Clutch, Embrague o Zapata Completo Para Husqvarna 365/372",
    "description": "Este embrague de alto rendimiento está diseñado específicamente para los modelos más robustos de la marca, asegurando un acople firme incluso en las condiciones más extremas del bosque. ¡No dejes que un embrague desgastado le quite fuerza a tu jornada! 🪓💨\n\n✅ Diseño Avanzado: Sistema de tres zapatas con resortes curvos integrados para una respuesta inmediata.\n✅ Máxima Durabilidad: Construcción en aleación de acero resistente al calor y al desgaste.\n✅ Compatibilidad: Diseñado para modelos Husqvarna 365, 372 y 372XP.\n✅ Referencia: HQ503-74-44-01.\n\n¡Calidad profesional para los trabajos más exigentes! 🛠️✨",
    "price": 5.63,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcoam5upe/_assets/media/30f6b488d046d097a6498b75f895650d.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772301269984",
    "name": "Clutch Completo Para Husqvarna 61",
    "description": "Si tu equipo patina al cortar o la cadena se queda sin tracción en troncos pesados, es momento de renovar el sistema centrífugo. Este embrague está diseñado para ofrecer un acople firme y una transferencia de potencia inmediata, ideal para el trabajo duro en el campo. 🪓💨\n\n✅ Diseño Robusto: Sistema de tres zapatas con resortes de alta resistencia.\n✅ Durabilidad Extrema: Fabricado en aleación metálica tratada para soportar fricción intensa.\n✅ Compatibilidad Clásica: Perfecto para modelos Husqvarna 61, 268 y 272.\n✅ Referencia: HQ61-030-25.\n\n¡Mantén tu Husqvarna rugiendo como el primer día! 🛠️✨",
    "price": 8.79,
    "category": "Clutch",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcoadkhro/_assets/media/55004b05e3e34a7ead15b899f43feb95.jpg",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772303828550",
    "name": "Kit de Polea Para Shindaiwa B45 Modelo Viejo 3 piezas (Empaque de 10 unidades)",
    "description": "Fabricada en polímero de alta resistencia, esta polea está diseñada para soportar la fricción constante del cordón, garantizando un mecanismo de retracción suave en cada tirón. ¡Vuelve al trabajo sin frustraciones! 🚜✨\n\n✅ Material Anti-Fricción: Prolonga la vida útil de tu cuerda de arranque.\n✅ Diseño de Precisión: Ajuste exacto para el sistema de encendido original.\n✅ Compatibilidad: Específica para la reconocida desbrozadora Shindaiwa B45.\n✅ Referencia: SHB45-007-15.\n\n¡Pequeños repuestos que hacen una gran diferencia en tu jornada! 💪⚙️",
    "price": 18.04,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcopxuyny/_assets/media/27be7095743f97e839e3e7bc7904f05f.png",
    "stock": 20,
    "variants": []
  },
  {
    "id": "1772304994420",
    "name": "Polea Plastica Para Arranque Para Sthil SR420/FS280 ",
    "description": "Esta polea está diseñada para guiar el cordón con total precisión, evitando enredos internos y garantizando que cada tirón se convierta en potencia pura. ¡Vuelve a trabajar con la eficiencia de siempre! 🚜✨\n\n✅ Ajuste Perfecto: Diseñada específicamente para los modelos Stihl BR420 y SR420.\n✅ Material de Alta Durabilidad: Fabricada en polímero reforzado para resistir la fricción constante.\n✅ Funcionamiento Fluido: Canal de cuerda optimizado para una retracción rápida y segura.\n✅ Referencia: ST420-011-27.\n\n¡Mantén tu equipo listo para la acción! 🛠️💪",
    "price": 8.9,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcom1a8bu/_assets/media/dd5c48e9bfcbc4a8cf7d464e7750dabd.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1772305865712",
    "name": "Polea de Arranque Para Husqvarna 61/268/272 ",
    "description": "Este modelo cuenta con un centro reforzado diseñado específicamente para soportar la tensión de los tirones constantes, asegurando que el mecanismo de retracción funcione siempre con suavidad y precisión. ¡Ideal para las leyendas del trabajo pesado! 🪓💨\n\n✅ Centro de Acero: Mayor resistencia al desgaste en el punto de contacto con el trinquete.\n✅ Material de Alta Densidad: Polímero diseñado para resistir la fricción del cordón de arranque.\n✅ Compatibilidad: Diseñada para los modelos clásicos Husqvarna 61, 268 y 272.\n✅ Referencia: HQ61-084-27.\n\n¡Mantén tu equipo listo para la jornada con repuestos de calidad! 🛠️✨",
    "price": 22,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahco-02kwi/_assets/media/6bdfa7bd85a8cc6c1d84e90d16239030.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1772306701990",
    "name": "Polea de Arranque Para Echo 3605/4605/C350 (Empaque de 10 unidades)",
    "description": "Si sientes que la cuerda se traba o el mecanismo de retracción ha perdido fuerza, es muy probable que el canal de tu polea esté desgastado. ¡Renuévala y vuelve al trabajo sin interrupciones! 🪓💨\n\n✅ Material de Alta Resistencia: Fabricada en polímero reforzado para soportar la fricción constante.\n✅ Diseño de Precisión: Ajuste exacto para el sistema de retracción original de Echo.\n✅ Compatibilidad: Específica para el modelo de motosierra Echo CS360.\n✅ Referencia: ECH-360-15.\n\n¡Pequeños detalles que mantienen tu equipo como nuevo! 🛠️✨",
    "price": 14.88,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahco1bxrgw/_assets/media/03dfb49f8de41ecdce02e4322f978718.jpg",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1772307544992",
    "name": "Polea Plastica Para Arranque de Cinta  Completo Para BC430/BC520 Mitsubishi TL43/ ",
    "description": "Este repuesto es fundamental para el sistema de encendido de las máquinas de trabajo más populares. Fabricada en material termoplástico de alta densidad, esta polea reduce la fricción del cordón y asegura una retracción rápida para que no pierdas tiempo en el campo. 🌿✨\n\n✅ Alta Compatibilidad: Ideal para desbrozadoras chinas y multimarca modelos BC430, BC520 y TL43.\n✅ Resistencia al Desgaste: Canal de cuerda reforzado para soportar tirones constantes.\n✅ Instalación Sencilla: Diseñada para un ajuste exacto en el conjunto de arranque.\n✅ Referencia: BC430-069-27.\n\n¡Mantén tus herramientas siempre listas para la acción! 🛠️💪",
    "price": 12.46,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahco9nsugk/_assets/media/c92e25fd65b7a66d5a873cd8c988be86.png",
    "stock": 7,
    "variants": []
  },
  {
    "id": "1772307828900",
    "name": "Tapa de Combustible Para Husqvarna 281/288 ",
    "description": "Diseñada con un sello hermético de alta calidad y una cuerda de retención para que nunca la pierdas en medio del bosque. ¡Repuestos pequeños que garantizan grandes resultados! 🪓✨\n\n✅ Sellado Hermético: Evita la evaporación y el derrame de combustible.\n✅ Sistema de Retención: Incluye el sujetador interno para evitar pérdidas accidentales.\n✅ Compatibilidad Total: Ideal para modelos Husqvarna 61, 268, 272 y 288.\n✅ Referencia: HU288-001-25.\n\n¡Mantén tu equipo limpio y listo para la acción! 🛠️💪",
    "price": 9,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahco2yqfgw/_assets/media/6a507764651fc0b2d5a0d473a0ce27db.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1772308964064",
    "name": "Campana de 9 Dientes Para BC430/520 Mitsubishi TL43",
    "description": "Si notas vibraciones excesivas o sientes que el cabezal no gira con la fuerza de antes, es probable que el estriado interno de tu campana esté desgastado. ¡Cámbiala y recupera el control total de tu herramienta! 🚜💨\n\n✅ Conexión de Precisión: Eje de 9 estriados para un encaje perfecto y sin juegos.\n✅ Material Reforzado: Fabricada en acero de alta resistencia para soportar el roce constante y el calor.\n✅ Compatibilidad: Ideal para desbrozadoras de 43cc y 52cc (Modelos BC430 / BC520 / TL43).\n✅ Referencia: BC430-081-18.\n\n¡Haz que cada revolución cuente con repuestos de calidad profesional! 💪✨",
    "price": 3.84,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahco94xvnu/_assets/media/afbdd3a3f92b02d2d4b87245d8d42b64.png",
    "stock": 16,
    "variants": []
  },
  {
    "id": "1772310141982",
    "name": "Campana Para Husqvarna HUSQVARNA 143RII",
    "description": "Diseñada para resistir las jornadas más exigentes, esta campana garantiza un acople preciso, minimizando el patinamiento y protegiendo la vida útil de tu embrague. ¡Mantén tu Husqvarna trabajando al nivel profesional que esperas! 🚜💨\n\n✅ Construcción Reforzada: Materiales de alta resistencia al calor y al desgaste por fricción.\n✅ Balanceo de Precisión: Reduce las vibraciones para un manejo más cómodo y seguro.\n✅ Compatibilidad Directa: Diseñada específicamente para el modelo Husqvarna 143R-II.\n✅ Referencia: HQ143-033-18.\n\n¡Calidad que se siente en cada acelerada! 🛠️✨",
    "price": 6.65,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcpca79l8/_assets/media/4075929675efb31e4642dfb56d02889f.png",
    "stock": 2,
    "variants": []
  },
  {
    "id": "1772312252621",
    "name": "Caja Para Fumigadora 768 (Empaque de 10 Unidades)",
    "description": "Este componente es el encargado de acoplar la fuerza del motor a la bomba de fumigación. Si sientes que tu equipo pierde presión o el motor acelera pero no bombea con fuerza, es momento de revisar el estado de las zapatas de tu embrague. ¡No detengas tu producción! 💦✨\n\n✅ Diseño Compacto: Ajuste perfecto para sistemas de embrague centrífugo pequeños.\n✅ Resistencia Comprobada: Materiales tratados para soportar la fricción constante.\n✅ Compatibilidad: Ideal para fumigadoras estacionarias o de mochila modelos 768 y 708.\n✅ Referencia: F768-007-18.\n\n¡Calidad y confianza para el cuidado de tus cultivos! 🛠️🌱",
    "price": 28.18,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcptefvre/_assets/media/bca2ab0e065a88d083038b9dd649942d.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1772313626953",
    "name": "Piñon Loco o Sprocket 404-7  Mejorados Vienen en Tubo Plastico (Empaque de 10 unidades)",
    "description": "Este piñón tipo \"Rim\" o flotante está diseñado para ofrecer un alineamiento perfecto con la barra, reduciendo la fricción y extendiendo la vida útil de tu cadena de corte. ¡Potencia pura para los trabajos más exigentes! 🪓💨\n\n✅ Rendimiento Profesional: Optimiza la velocidad de corte y el torque.\n✅ Desgaste Uniforme: Diseño flotante que se auto-alinea con la cadena.\n✅ Compatibilidad: Diseñado específicamente para el gigante de Stihl, el modelo MS660.\n✅ Referencia: ST660-021-27.\n\n¡Mantén tu MS660 rindiendo al 100%! 🛠️✨",
    "price": 15.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcpbf534a/_assets/media/1fdd16f716a8238a0dbd2a3fe53b8f1d.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1772314203115",
    "name": "Pinion o Sprocket 3/8-7 Mejorados Vienen en Tubo Plastico (Empaque de 10 unidades)",
    "description": "Este piñón tipo \"Rim\" (flotante) permite que la cadena se alinee automáticamente con la espada, reduciendo la fricción y evitando el desgaste irregular. ¡Ideal para mantener tu equipo trabajando con la precisión de fábrica! 🪓💨\n\n✅ Paso de Cadena: 3/8\" con 7 dientes para una velocidad de corte equilibrada.\n✅ Menos Desgaste: Al ser un sistema flotante, prolonga la vida útil de la cadena y la barra.\n✅ Calidad Oregon: Fabricado con los estándares de resistencia que exigen los profesionales del bosque.\n✅ Referencia: ST660-013-18.\n\n¡No esperes a que tu cadena salte! Renueva tu transmisión hoy mismo. 🛠️✨",
    "price": 15.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcpf0muhu/_assets/media/33d3b259a3ae0dbf52949310c3527e75.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1772314827998",
    "name": "Sprocket 325-7 Empacado en tubo plastico (Empaque de 10 unidades)",
    "description": "Este piñón tipo \"Rim\" (flotante) permite un alineamiento automático con la espada, lo que reduce drásticamente las vibraciones y el desgaste innecesario de los eslabones de tracción. ¡Ideal para quienes buscan un acabado profesional en cada jornada! 🪓💨\n\n✅ Configuración Estándar: Paso .325\" con 7 dientes para un equilibrio perfecto entre velocidad y torque.\n✅ Diseño Flotante: Mejora la vida útil de la barra y la cadena al minimizar la fricción lateral.\n✅ Calidad Stihl: Fabricado bajo estándares de alta resistencia para soportar el trabajo pesado.\n✅ Referencia: SPR325-7-25.\n\n¡No dejes que un piñón gastado arruine tu cadena nueva! 🛠️✨",
    "price": 15.78,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dahcprovdhk/_assets/media/4587c514962b15d7fa78bce7d04990b0.png",
    "stock": 10,
    "variants": []
  }
];

export const CATEGORIES: string[] = [
  "Todas",
  "Repuestos",
  "Tornillería",
  "Ferretería",
  "Herramientas",
  "Varios",
  "Maquinaria",
  "Cintas de Arranque",
  "Lanzas",
  "Clutch"
];

export const THEME_COLORS = {
  green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', btnHover: 'hover:bg-emerald-700' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500', btnHover: 'hover:bg-blue-700' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500', btnHover: 'hover:bg-orange-700' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
};
