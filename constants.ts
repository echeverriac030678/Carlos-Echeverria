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
  "taxRate": 7,
  "instagramUrl": "https://www.instagram.com/ido.pa",
  "whatsappNumber": "50767539193",
  "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.673892809618!2d-82.44111302414707!3d8.434850897258074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa59d672807e371%3A0x8673322d3e42f9e4!2sInversiones%20y%20Desarrollo%20Original!5e0!3m2!1ses!2spa!4v1709845231234!5m2!1ses!2spa",
  "locationInstructions": "Estamos ubicados en la Zona Industrial, cerca de la entrada principal. Busca el galpón color verde con el letrero de IDO.",
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
    "price": 7.72,
    "category": "Repuestos",
    "imageUrl": "\thttps://desbrozadora.my.canva.site/dag9fubfk-0/_assets/media/a921ead92cd62d89358fc57328eeb862.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767718443415",
    "name": "Arranque  Para BC430/BC520 ",
    "description": "Este modelo es la solución definitiva para quienes buscan durabilidad y un ajuste perfecto. No te arriesgues con repuestos que no calzan; elige la ingeniería de Super Maxter.\n\n✅ Máxima Compatibilidad: Ideal para motores BC430, BC520 y TL43 (Tipo Corbatín). ✅ Referencia: BC430-066-27. ✅ Calidad Garantizada: Construcción robusta para soportar el uso diario exigente.\n\n¡Haz que tu equipo encienda sin esfuerzo y a la primera! ⚡",
    "price": 5.25,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9qeesyvq/_assets/media/8165ac8f6d1dc912c40b77dbbba06772.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767718946289",
    "name": "Arranque Para BC430/BC520",
    "description": "Te presentamos el Kit de Arranque Super Maxter para BC430 / 520 CINTA. Incluye la tapa de arranque completa y la taza metálica, asegurando una compatibilidad perfecta y un encendido suave en cada tirón. ✨\n\n✅ Compatibilidad: Diseñado específicamente para modelos BC430 y 520 CINTA (Referencia BC430-067-27). ✅ Componentes de Calidad: Tapa de arranque y campana metálica de alta durabilidad. ✅ Fácil Reemplazo: Renueva tu sistema de arranque rápidamente y sin complicaciones.\n\n¡Vuelve al trabajo con la confianza que te da Super Maxter! 🌿",
    "price": 5.25,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9p8x39ny/_assets/media/ec54bdfa083bcf1e2775eeea519a0750.png",
    "stock": 10,
    "variants": []
  },
  {
    "id": "1767727327841",
    "name": "KIt de Cilindro para BC520/TL52",
    "description": "Este kit incluye todo lo necesario para que tu máquina vuelva a trabajar como el primer día, garantizando un ajuste preciso y una disipación de calor óptima.\n\n✅ Especificaciones Técnicas:\n\nCilindro: Robusto y diseñado para alta resistencia.\n\nPistón: Diámetro de 44mm y altura de 40mm para un rendimiento exacto.\n\nPin/Pasador: Medidas de 10mm x 36mm.\n\nIncluye: Anillos, empaque y accesorios para una instalación completa.\n\nReferencia: BC520-078-23.\n\n¡No permitas que un cilindro rayado detenga tu productividad! 🚜💨",
    "price": 16.45,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9q7yl4g0/_assets/media/4b65d718093b527239072719d477cf9c.jpg",
    "stock": 3,
    "variants": []
  },
  {
    "id": "1767728724506",
    "name": "Carburador Metalico para 420",
    "description": "Optimiza el rendimiento de tus herramientas con el Carburador de Alta Precisión. Diseñado para ofrecer una mezcla perfecta de aire y combustible, asegurando un arranque fácil y un funcionamiento uniforme en todo momento.\n\n✅ Rendimiento superior: Mejora la respuesta del acelerador y la potencia del motor. ✅ Calidad Profesional: Construcción metálica resistente para una mayor vida útil. ✅ Diseño Integrado: Incluye bombín de purga (primer) para un cebado rápido y eficiente.\n\n¡Mantén tu equipo trabajando como nuevo! 🛠️✨",
    "price": 12.48,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9q9rkipe/_assets/media/3623b21d2cc6c425cbedf15a38a0a154.png",
    "stock": 5,
    "variants": []
  },
  {
    "id": "1767732519805",
    "name": "Kit Piston para Stihl MS381",
    "description": "Contamos con repuestos de alta gama para el mantenimiento serio de tus equipos. Calidad garantizada en cada componente para prolongar la vida útil de tu motor.\n\nDetalles del producto:\n\n📍 Referencia: ST381-002-23.\n\n📍 Componentes: Incluye pistón, anillos, pin y clips de seguridad.\n\n📍 Uso: Ideal para reparaciones que exigen precisión técnica.\n\nAsegura un rendimiento óptimo y evita averías costosas con repuestos diseñados para el trabajo pesado. 💪",
    "price": 6.94,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9rjv9brk/_assets/media/8f2b946795fd886bae4740f0f6113b10.png",
    "stock": 15,
    "variants": []
  },
  {
    "id": "1767732709607",
    "name": "Kit Piston para Stihl MS382",
    "description": "Sabemos que la durabilidad de tus herramientas depende de la calidad de sus componentes. Por eso, nuestro kit está fabricado con los más altos estándares para asegurar un ajuste perfecto y un rendimiento constante, incluso en las jornadas más pesadas. 🚜💪\n\n✅ ¿Qué incluye este kit?\n\nPistón de alta resistencia: Diseñado para soportar altas temperaturas.\n\nAnillos de sellado: Para una compresión óptima.\n\nPasador y empaque: Todo listo para una instalación profesional.\n\nReferencia: ST382-002-23.\n\n¡No comprometas el corazón de tu máquina! Elige repuestos que garantizan resultados.\n\n📩 Escríbenos al DM para más información o pedidos.",
    "price": 7.13,
    "category": "Repuestos",
    "imageUrl": "\thttps://desbrozadora.my.canva.site/dag9rev2f80/_assets/media/3e7480171843a21def7185bc404833b4.png",
    "stock": 15,
    "variants": []
  },
  {
    "id": "1767735336328",
    "name": "Kit Cilindro para TL33",
    "description": "Este kit completo está diseñado para restaurar la compresión original y garantizar un funcionamiento suave y potente, permitiéndote terminar tus trabajos en menos tiempo.\n\n✅ Todo en uno: Incluye cilindro, pistón, anillos, pasador y seguros para una reparación integral. ✅ Durabilidad extrema: Fabricado con materiales de alta resistencia para soportar las jornadas más exigentes. ✅ Referencia: BC430-077-23 / BC430-077-23.\n\n¡No permitas que un motor desgastado te detenga! 🚜💨",
    "price": 15.85,
    "category": "Repuestos",
    "imageUrl": "\thttps://desbrozadora.my.canva.site/dag9rqcxusi/_assets/media/7f2e042d4a784e67feceea51dd656e27.png",
    "stock": 3,
    "variants": []
  },
  {
    "id": "1767882753904",
    "name": "Carburador para BC430/520",
    "description": "Optimiza el corazón de tu herramienta con nuestro Carburador de Alta Precisión. Diseñado para ofrecer una mezcla perfecta, este repuesto asegura un arranque suave y una aceleración constante, permitiéndote trabajar sin interrupciones. 🛠️✨\n\n✅ Arranque Fácil: Incluye bombín de purga (primer) para un cebado rápido. ✅ Estabilidad: Mantiene el ralentí perfecto y mejora la respuesta del motor. ✅ Calidad Garantizada: Construcción metálica de alta resistencia para una mayor vida útil. ✅ Referencia: BC430-035-25.\n\n¡Haz que tu equipo rinda como el primer día! 💪",
    "price": 10.77,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9v95rz9c/_assets/media/09cda879a03746b1e1c489ef00fef79c.png",
    "stock": 15,
    "variants": []
  },
  {
    "id": "1767882990455",
    "name": "Carburador para 143 RII",
    "description": "Asegura un encendido instantáneo y potente con nuestra Bobina de Encendido Fuji HQ143-017-18. Diseñada para ofrecer la máxima fiabilidad eléctrica, esta bobina garantiza que tu motor trabaje de manera estable y eficiente en todo momento.\n\n✅ Alta Tensión: Genera una chispa constante para un arranque sin esfuerzo. ✅ Calidad Fuji: Durabilidad y resistencia probadas para uso intensivo. ✅ Referencia: HQ143-017-18.\n\n¡No pierdas más tiempo tirando de la cuerda! Dale a tu motor la energía que necesita ⚡🚜",
    "price": 9.69,
    "category": "Repuestos",
    "imageUrl": "\thttps://desbrozadora.my.canva.site/dag9v1jhmga/_assets/media/031e04535af2a230923e90696df5f5fe.png",
    "stock": 6,
    "variants": []
  },
  {
    "id": "1767883145466",
    "name": "Bujia 6A",
    "description": "Mantener tu bujía en buen estado no solo facilita el encendido, sino que también protege tu motor y optimiza el consumo de combustible. ¡No dejes que una bujía vieja afecte tu productividad!\n\n✅ Encendido Confiable: Tecnología NGK líder en el mercado para una chispa potente y constante. ✅ Versatilidad: Compatible con una amplia gama de maquinaria de jardín y agro. ✅ Durabilidad: Diseñada para resistir altas temperaturas y prevenir la acumulación de depósitos.\n\n¡Pequeños repuestos que hacen grandes diferencias! 🛠️✨",
    "price": 9.93,
    "category": "Repuestos",
    "imageUrl": "\thttps://desbrozadora.my.canva.site/dag9wifoq2u/_assets/media/de51cd9c9635c8deb55de5bf15595643.png",
    "stock": 8,
    "variants": []
  },
  {
    "id": "1767883707568",
    "name": "CMR 5H",
    "description": "No dejes que una bujía desgastada le reste potencia a tu motor o aumente el consumo de combustible. Cambia a NGK, el líder mundial en tecnología de encendido.\n\n✅ Máxima Eficiencia: Excelente disipación de calor y resistencia a la corrosión. ✅ Diseño Compacto: Especialmente diseñada para motores pequeños de alta exigencia. ✅ Calidad Original: El estándar de confianza para las mejores marcas de maquinaria.\n\n¡Mantén tu equipo trabajando al 100%! 🛠️🌿",
    "price": 3.89,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag9wyeadri/_assets/media/c8a204831aa4ad1a885d39f33e9417f4.png",
    "stock": 3,
    "variants": []
  },
  {
    "id": "1767884296708",
    "name": "Tuerca para F160",
    "description": "No arriesgues la integridad de tu equipo ni tu seguridad con piezas desgastadas. Esta tuerca de alta resistencia garantiza que tu cuchilla se mantenga en su lugar, incluso en las jornadas más intensas de limpieza y desmalezado. 🌿💪Máxima Sujeción: Diseño con inserto de seguridad para evitar que se afloje con la vibración. ✅ Referencia: ST160-015-27.\n\n¡Mantén tu herramienta lista para la acción! 🚀",
    "price": 17.1,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag91rstjtu/_assets/media/fbd040faa5d1882e7edba64054f65338.png",
    "stock": 38,
    "variants": []
  },
  {
    "id": "1767886003190",
    "name": "Kit Tensor para Motosierra China 5200/5800",
    "description": "Te presentamos nuestro Kit de Tensor para Motosierra China, la pieza clave para mantener la tensión perfecta en cada corte. Un ajuste preciso no solo mejora el rendimiento de tu motosierra, sino que evita accidentes y desgastes innecesarios.\n\n✅ Precisión Total: Diseño de tornillo sin fin para un ajuste milimétrico. ✅ Durabilidad: Fabricado en acero de alta resistencia para soportar la vibración constante. ✅ Referencia: S5800-011-27.\n\n¡Mantén tu equipo a punto y trabaja con confianza! 💪✨",
    "price": 0.9,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag917ii3wq/_assets/media/3aed61722f9a39fd4e9b99833a663776.jpg",
    "stock": 30,
    "variants": []
  },
  {
    "id": "1767887185570",
    "name": "Esparrago para Motosierra China 5200/5800",
    "description": "Un colector desgastado o con fugas puede causar fallos en el ralentí y pérdida de fuerza. Asegura un rendimiento óptimo y una respuesta inmediata del acelerador con este repuesto de alta calidad.\n\n✅ Conexión Perfecta: Diseñado para un sellado hermético que evita entradas de aire no deseadas. ✅ Durabilidad Hustil: Fabricado con materiales resistentes al calor y a los químicos del combustible. ✅ Referencia: S58100-010-27\n\n¡Mantén tu equipo trabajando con la máxima eficiencia! 🛠️✨",
    "price": 0.39,
    "category": "Repuestos",
    "imageUrl": "\thttps://desbrozadora.my.canva.site/dag9108cmjs/_assets/media/07c07e4672d47174315f3b96397faf56.jpg",
    "stock": 100,
    "variants": []
  },
  {
    "id": "1767888739831",
    "name": "Tapon de Bujia para Stihl",
    "description": "Te presentamos nuestro Kit de Capuchón y Resorte de Bujía, la solución económica y efectiva para asegurar que la corriente llegue con total intensidad desde la bobina hasta el corazón de tu motor.\n\n✅ Conexión Firme: El resorte de alta tensión garantiza un contacto constante, evitando chispas perdidas por vibración. ✅ Protección Total: Capuchón de goma aislante de alta resistencia que protege contra la humedad y el polvo. ✅ Referencia: ST-001-25.\n\n¡Pequeños detalles que mantienen tu motor rugiendo! 🛠️✨",
    "price": 0.9,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag92e4ylo8/_assets/media/a83e56c6722c140f544575d3b5d78ba8.png",
    "stock": 4,
    "variants": []
  },
  {
    "id": "1767890656404",
    "name": "Tornillo Torx M5X18",
    "description": "No permitas que tornillos desgastados o de mala calidad pongan en riesgo tu trabajo. Elige repuestos con el ajuste preciso para mantener la integridad de tu motor en todo momento.\n\n✅ Diseño Robusto: Cabeza tipo Torx/Cilíndrica para una transmisión de torque eficiente sin barrer la rosca. ✅ Material de Calidad: Acero galvanizado para mayor resistencia a la corrosión y al desgaste. ✅ Referencia: TO18-012-27.\n\n¡Pequeñas piezas que garantizan grandes resultados! 🛠️✨",
    "price": 0.20,
    "category": "Repuestos",
    "imageUrl": "https://desbrozadora.my.canva.site/dag92p3wmyi/_assets/media/92d98d5370d0b54a59aa7a667652e5ee.png",
    "stock": 87,
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
  "Maquinaria"
];

export const THEME_COLORS = {
  green: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', btnHover: 'hover:bg-emerald-700' },
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-500', btnHover: 'hover:bg-blue-700' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-700', ring: 'focus:ring-orange-500', btnHover: 'hover:bg-orange-700' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-700', ring: 'focus:ring-red-500', btnHover: 'hover:bg-red-700' },
};