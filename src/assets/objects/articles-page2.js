//imagenes: miniatura: 765x400, grande: 1240x470
//---- articulo ----------
//imgb,grande: "./"
//iinb_1, imagenes internas pequeñas: "./"
//titb_1, titulos internos: "string"
//tit2_1, titulos internos: "string"
//tit3_1, titulos internos 3: "string"
//titk_1, titulo con id: ["titulo","id"]
//subb_1, subtitulo: "string"
//txtb_1, parrafos: "string"
//txlb_1, texto con link: ["texto","link"]
//dotb_2, texto con dot: "string"
//dtlb_1, texto con dot y link: ["texto","link"]
//bytb, autor: "string"
//date, fecha: "string"
//vidb,ID video youtube: "6BAv9sIQ6BU"
//lnkb: boton: ["link","nombre boton"]
//key_: etiquetas
//sepA: espacio de 10px
//sepB: espacio de 25px
//sepC: espacio de 40px
//sepD: espacio de 100px
export const ArticlesDataEs = [
  {
    titSec: "Anomalías del Order Flow",
    subSec: "Cómo Identificar Señales Clave para Tomar Decisiones de Trading Más Informadas",
    img01Sec: "./articles_page/art5_anom.webp",
    img02Sec: "./articles_page/art5_anom.webp",
    url: "order-flow-anomalies",
    titb: "Identificar Señales Clave",
    imgb: "./articles_page/art_05_init.jpg",
    subb_1:
      "Una anomalía es un dato que no se ajusta a lo esperado. Identificar anomalías en el Order Flow puede brindarnos una ventaja en el mercado. A continuación, exploraremos algunas de estas anomalías:",
    sepA_1: "",
    
    sepC_13: "",
    sepB_13: "",
  
    titk_1: ["Imbalance", "imbalance"],
    txtb_1:
      "Un imbalance alcista ocurre cuando se negocian más contratos de compra agresiva (lado derecho, ASK) en comparación con las ventas agresivas (lado izquierdo, BID) en una cantidad determinada, que puedes definir como 2, 3, 4 veces, etc.",
    sepA_2: "",


    txtb_2:
      "Por otro lado, un imbalance bajista se presenta cuando en ciertos niveles de precio se negocian más contratos de venta agresiva (lado izquierdo, BID) que en el lado derecho de compras agresivas (ASK).",

    sepC_1:"",

    imgb_1: "./articles_page/futuros_02.jpg",
    
    sepC_2:"",

    dotb_1:"Los números rojos reflejan que el número del lado izquierdo BID, es mayor en tres veces que su diagonal ASK, eso denota una agresividad y una mayor agresividad de venta en esos niveles de precios.",
    

    
    dotb_3:"Los números verdes reflejan una actividad compradora mayor en tres veces respecto a las ventas agresivas.",


    sepC_12: "",
    sepB_12: "",




    titk_2: ["Subasta inacabada (unfinished auction)", "unfinished"],

    txtb_3:
      "Cuando se forma correctamente un nuevo máximo, el final de la subasta alcista del mercado se caracteriza por 0 contratos negociados en la Oferta (no hay más compradores).",

      sepC_4: "",
      
      imgb_2: "./articles_page/futuros_02.jpg",
      
      sepC_3: "",
      
      txtb_4:
      "Una subasta inacabada ocurre cuando el máximo tiene volumen de compra y venta. La presencia de operaciones de oferta en el máximo de una barra podría significar que el movimiento ascendente aún no se ha agotado y existe la probabilidad de que el precio regrese a ese nivel pronto para completar el proceso.",

      sepC_5: "",

      imgb_3: "./articles_page/futuros_02.jpg",

      sepC_6: "",


      sepC_11: "",
      sepB_11: "",
      

    titk_3: ["Divergencias delta", "diver"],

    txtb_5:
      "Ocurre cuando una vela alcista (vela verde) o vela bajista (vela roja) no posee un delta acorde a su color, es decir una vela verde (alcista) por definición deberá tener un delta positivo, y una vela roja (bajista) deberá tener un delta negativo. Cuando no es así, se considera una divergencia, vela roja y delta positivo, o vela verde y delta negativo. Es más común encontrarlas en temporalidades bajas.",

      sepC_7: "",
      
      imgb_4: "./articles_page/futuros_02.jpg",
      
      sepC_8: "",
      
      txtb_6:
      "Tenemos un delta de 266 y la vela es roja, y una vela positiva con delta de -8. En temporalidades bajas es más común tener estas divergencias.",


      sepC_10: "",
      sepB_10: "",


      titk_4: ["Divergencias en COT", "cot"],

      txtb_7:
      "Hay otras métricas que ayudan a ver la presión compradora versus la vendedora, una de ellas es el COT (Commitment of Trade) que cuantifica el efecto neto de la demanda y la oferta dentro de una barra de negociación particular. Tenemos dos datos el COT High y COT Low.",

      txtb_8:
      "El COT High (COT Low) mide el Delta acumulado de oferta/demanda desde el punto en el que el precio alcanza un nuevo máximo (mínimo) o vuelve a visitar uno anterior. Es una herramienta valiosa para evaluar el equilibrio entre la actividad de compra y venta después de que se alcanza un nuevo nivel de precio.",

      imgb_9: "./articles_page/futuros_02.jpg",

      txtb_9:
      "Calculemos el COT HIGH. En una vela alcista (fuerte).",


      imgb_10: "./articles_page/futuros_02.jpg",

      txtb_10:
      "En una vela alcista (fuerte), algo “normal” para el COT High es un valor negativo “pequeño” o incluso cero, en este ejemplo -200.",

      txtb_11:
      "Ahora calculemos el COT LOW. En una vela alcista (fuerte).",

      imgb_11: "./articles_page/futuros_02.jpg",


      txtb_12:
      "En una vela alcista (fuerte), algo “normal” es un valor positivo ligeramente superior al delta close. en este caso 1200.",

      txtb_13:
      "Podemos observar anomalías cuando en una vela o un conjunto de velas tenemos datos fuera de los parámetros “normales”.",


      imgb_12: "./articles_page/futuros_02.jpg",

      sepC_9: "",
      sepB_9: "",



      titk_5: ["Absorciones", "abs"],
      

      txtb_14:
      "Ocurre cuando en algunos niveles de precio se transaccionan una gran cantidad de contratos  sin que el precio genere el movimiento esperado.",

      txtb_15:
      "También es conocido como Esfuerzo No resultado. En este ejemplo las ventas agresivas son absorbidas por compras limitadas, el precio no se desplaza ni un solo tick.",


      imgb_13: "./articles_page/futuros_02.jpg",



  },

  {
    titSec: "Manual basico Trading de futuros #1",
    subSec: "Descubriendo el Mundo del Trading de Futuros",
    img01Sec: "./articles_page/art1_min.png",
    img02Sec: "./articles_page/art1_min.png",
    url: "futures-trading-guide-1",
    titb: "Operando Futuros desde la Base: Guía Esencial para Principiantes",
    imgb: "./articles_page/art1_01.png",
    subb_1:
      "Bienvenido a nuestro blog, donde nos sumergiremos en el emocionante universo del trading de futuros. Si eres un entusiasta del mercado financiero o un inversor en ciernes, este espacio te brindará información valiosa para comprender y dominar el arte del trading de futuros.",
    sepA_1: "",
    titk_1: ["¿Qué son los Futuros?", "futuros"],
    txtb_1:
      "Los futuros son instrumentos financieros derivados que desempeñan un papel fundamental en los mercados financieros modernos. Estos contratos estandarizados ofrecen a los participantes la posibilidad de comprar o vender un activo subyacente a un precio fijo en una fecha futura preestablecida. Originados en el siglo XIX, inicialmente vinculados a las cosechas, los futuros han evolucionado para abarcar una amplia variedad de activos, desde materias primas hasta índices bursátiles y tasas de interés.",
    sepA_2: "",

    imgb_1: "./articles_page/futuros_01.jpg",
    
    titk_2: ["Historia y Origen:", "historia"],
    txtb_2:
      "El concepto de futuros surgió en el siglo XIX como una solución ingeniosa a los desafíos enfrentados por los agricultores. Estos profesionales, expuestos a pérdidas debido a fluctuaciones en la demanda y eventos climatológicos imprevistos, encontraron en los contratos de futuros una herramienta valiosa para gestionar su riesgo.",
    txtb_3:
      "Los primeros futuros estaban directamente relacionados con las cosechas, permitiendo a los agricultores acordar la venta de una cantidad específica de productos a un precio acordado con los compradores. Esta transacción se programaba para su entrega en una fecha futura preestablecida. Este enfoque innovador no solo brindó estabilidad a los agricultores, sino que también sentó las bases para el desarrollo de mercados financieros más amplios.",
    sepA_3: "",
    titk_3: ["Características Clave de los Futuros:", "caracteristicas"],
    txtb_4:
      "1. Estandarización: La clave del éxito de los futuros radica en su estandarización. Cada contrato sigue parámetros detallados que incluyen el tamaño del contrato, el precio de ejercicio y la fecha de vencimiento. Esto proporciona transparencia y eficiencia en la negociación.",
    txtb_5:
      "2. Precio y Fecha Fijos: Los futuros establecen un precio prefijado para el activo subyacente y una fecha de vencimiento predeterminada. Esto permite a los participantes planificar y gestionar sus inversiones con certeza.",
    txtb_6:
      "3. Diversificación de Activos: Aunque los futuros tienen sus raíces en las cosechas agrícolas, la evolución del mercado ha llevado a la inclusión de una amplia gama de activos. Desde commodities hasta divisas, los futuros ofrecen una diversificación invaluable para los inversores.",
    txtb_7:
      "4. Gestión de Riesgos: Originalmente concebidos como una herramienta de cobertura para los agricultores, los futuros continúan desempeñando un papel crucial en la gestión de riesgos para una variedad de participantes del mercado.",
    txtb_8:
      "5. Un aspecto distintivo de los futuros es la capacidad del trader para vender un contrato sin necesidad de haberlo comprado previamente, conocido como posición corta. Esta característica añade versatilidad al trading de futuros",
    sepB_1: "",
    titk_5: [
      "Contratos de Futuros: Explorando los Más Negociados por Volumen",
      "contratos",
    ],
    txtb_12:
      "Conocer los contratos de futuros más negociados por volumen es esencial para comprender las dinámicas del mercado financiero. A continuación, presentamos una lista de los contratos de futuros más negociados, ordenados de mayor a menor volumen:",
    
      imgb_2: "./articles_page/futuros_02.jpg",
    
      tit3_10: "Futuros sobre Tipos de Interés:",
    txtb_13:
      "Vinculados a las tasas de interés, estos futuros son cruciales para la gestión de riesgos relacionados con las fluctuaciones en las tasas de interés.",
    tit3_11: "Futuros sobre Índices Bursátiles:",
    txtb_14:
      "Populares entre los inversores que desean especular sobre el rendimiento del mercado en su conjunto, sin necesidad de comprar cada acción individualmente.",
    tit3_12: "Futuros de Energía:",
    txtb_15:
      "Centrados en productos energéticos como el petróleo y el gas natural, son esenciales para gestionar la exposición a los movimientos de precios en el sector energético.",
    tit3_13: "Futuros de Productos Agrícolas:",
    txtb_16:
      "Incluyen una amplia variedad, desde granos hasta ganado, siendo fundamentales para gestionar el riesgo en la producción y venta de productos agrícolas.",
    tit3_5: "Futuros Forex:",
    txtb_17:
      "Permiten especular sobre los movimientos de los tipos de cambio entre diferentes monedas, siendo una herramienta vital para gestionar el riesgo asociado con las fluctuaciones en los mercados de divisas.",
    tit3_6: "Futuros sobre Metales:",
    txtb_18:
      "Incluyen metales preciosos como oro, plata y platino, siendo atractivos para inversores que buscan diversificar sus carteras y protegerse contra la volatilidad en los mercados de metales.",
      imgb_3: "./articles_page/art1_02.png",
    titk_10: ["Especulando en el mercado de futuros", "operar"],
    txtb_20:
      "En el mundo de los contratos de futuros, muchos traders eligen la especulación como su enfoque principal. Esto implica comprar y vender contratos de futuros con el objetivo de aprovechar los movimientos de precios, sin la intención de ejecutar los contratos en la fecha de vencimiento. Este enfoque, conocido como trading de futuros, se centra en la captura de oportunidades en los mercados financieros, independientemente de cuándo se materialice la ejecución del contrato.",
    tit3_20: "Características Clave del Trading de Futuros:",
    dotb_20:
      "Movimientos de Precios: El objetivo principal es capitalizar las fluctuaciones en los precios de los activos subyacentes. Los traders de futuros buscan identificar tendencias y patrones que les permitan tomar decisiones informadas.",
    dotb_22:
      "Flexibilidad Temporal: A diferencia de aquellos que operan con la intención de ejecutar contratos en la fecha de vencimiento, los especuladores en futuros no están limitados por plazos específicos. Pueden entrar y salir de posiciones según las oportunidades del mercado.",
    dotb_24:
      "Diversidad de Activos: Los traders especulativos pueden participar en una amplia variedad de mercados, desde divisas hasta materias primas y desde índices bursátiles hasta tasas de interés. Esta diversificación les brinda la capacidad de adaptarse a diferentes condiciones del mercado.",
    dotb_26:
      "Gestión de Riesgos: Aunque la especulación puede implicar cierto nivel de riesgo, los traders de futuros aplican estrategias de gestión de riesgos para proteger sus inversiones. Esto puede incluir la utilización de órdenes de stop-loss y técnicas de diversificación.",
    tit3_24: "Beneficios del Trading de Futuros como Especulación:",
    dotb_28:
      "Potencial de Ganancias: Los movimientos de precios significativos pueden resultar en ganancias sustanciales para los especuladores hábiles.",
    dotb_30:
      "Diversificación: La diversidad de activos subyacentes permite a los traders especulativos explorar oportunidades en diferentes sectores y clases de activos.",
    dotb_32:
      "Acceso a Mercados Internacionales: El trading de futuros facilita la participación en mercados globales, permitiendo a los especuladores capitalizar eventos económicos y políticos a nivel mundial.",
    txtb_22:
      "El trading de futuros como estrategia de especulación ofrece a los traders la libertad de buscar oportunidades en los mercados financieros sin las restricciones temporales asociadas con la ejecución de contratos en la fecha de vencimiento. En futuras entradas de blog, exploraremos estrategias específicas y consejos para aquellos que buscan perfeccionar sus habilidades en este emocionante enfoque de inversión.",
    lnkb3: [
      "/#indicators",
      "Potencia tu Estrategia: Accede a Nuestros Indicadores",
    ],
    txtb_100:
      "Los contratos de futuros no solo han resistido la prueba del tiempo, sino que también han prosperado y evolucionado para convertirse en herramientas esenciales en el arsenal de inversores y traders modernos. En futuras entradas de blog, exploraremos más a fondo estrategias, beneficios y consejos para aprovechar al máximo este emocionante mundo de los futuros.",
    txtb_101:
      " Estamos emocionados de acompañarte en este viaje educativo hacia el fascinante mundo del trading de futuros. ¡Comencemos!",
  },
  {
    titSec: "NINJATRADER 8, Guía completa",
    subSec: "¿Qué es NinjaTrader y cómo funciona esta plataforma?",
    img01Sec: "./articles_page/art2_min.png",
    img02Sec: "./articles_page/art2_min.png",
    url: "ninja-trader-guide",
    titb: "Operando Futuros con NINJATRADER 8",
    imgb: "./articles_page/art1_01.png",
    subb_1:
      "NinjaTrader, una plataforma de trading líder fundada en 2003, ha evolucionado con la industria financiera durante más de dos décadas. En esta guía completa, exploraremos las características, ventajas y desventajas de NinjaTrader, así como las estrategias y oportunidades de trading que ofrece.",
    sepA_1: "",
    titk_1: ["Ventajas de la plataforma", "ventajas"],

    imgb_1: "./articles_page/ninja_01.jpg",
    
    txtb_1:
      "1. Herramientas Gráficas de Primera Categoría: Experiencia en trading mejorada con opciones de personalización y una amplia gama de indicadores técnicos.",
    txtb_2:
      "2. Simulación de Operaciones: Ideal para principiantes y traders experimentados, permite realizar operaciones en papel sin riesgos financieros.",
    txtb_3:
      "3. Biblioteca Educativa Integral: Recursos educativos que guían a los traders en todo el proceso, desde principiantes hasta avanzados.",
    titk_2: ["Características Principales:", "caracteristicas"],

    imgb_2: "./articles_page/ninja_02.jpg",
    
    txtb_10:
      "NinjaTrader se destaca como una plataforma integral con asociaciones clave con brokers populares como Interactive Brokers y TD Ameritrade. Algunas de sus características principales incluyen:",
    dotb_10:
      "Trading de Futuros Micro E-mini: Contratos más pequeños para S&P 500, Dow Jones, NASDAQ-100 y Russell 2000.",
    dotb_12:
      "Micro Petróleo Crudo (MCL): Oportunidad de operar en los mercados de energía a una fracción del precio del contrato estándar.",
    dotb_14:
      "Nano Bitcoin: Futuros de Bitcoin en una centésima parte del precio, ideal para especuladores de criptomonedas.",
    dotb_16:
      "Conexión con Brokers Reconocidos: Integración con brokers como Interactive Brokers y TD Ameritrade para operar una amplia gama de activos.",
    tit3_10: "¿Qué Contratos de Futuros Puedo Operar en NinjaTrader?",
    txtb_20:
      "Explora la gama completa de futuros Micro E-mini, Micro Petróleo Crudo, Nano Bitcoin y otras emocionantes oportunidades de trading.",
    titk_3: ["Explorando los Gráficos:", "graficos"],
    txtb_30:
      "Descubre cómo NinjaTrader transforma la experiencia de trading con sus avanzadas herramientas de visualización y gráficos. Desde características únicas hasta la posibilidad de operar directamente desde el gráfico, esta plataforma ofrece un conjunto de herramientas que permiten a los traders reaccionar rápidamente a los cambios del mercado.",
    tit3_30: "Colocación de Órdenes Directamente desde el Gráfico:",

    imgb_3: "./articles_page/ninja_03.jpg",
    
    txtb_32:
      "NinjaTrader va más allá de los gráficos convencionales al permitir a los traders colocar operaciones directamente desde la interfaz del gráfico. Esta funcionalidad única capacita a los usuarios para tomar decisiones rápidas y precisas, optimizando su tiempo de reacción ante las fluctuaciones del mercado.",
    tit3_36: "Teclas de Acceso Rápido y Ejecución Eficiente:",
    txtb_36:
      "Personaliza tu experiencia de trading preconfigurando teclas de acceso rápido. Esto te permitirá ejecutar órdenes con rapidez, capitalizando incluso los pequeños movimientos del mercado. Descubre cómo agilizar tu proceso de trading para aprovechar al máximo cada oportunidad.",
    tit3_38: "Adaptabilidad a tu Estilo de Trading:",
    txtb_38:
      "Los gráficos en NinjaTrader admiten una amplia variedad de indicadores técnicos, tanto populares como personalizados. Ajusta los gráficos según tu estilo de trading, incorporando las herramientas que mejor se adapten a tus necesidades y estrategias.",
    tit3_40: "Visualización Clara del Estado de Operación:",
    txtb_40:
      "En NinjaTrader, el estado de tus operaciones se presenta de manera transparente en los gráficos. Las ganancias o pérdidas se muestran directamente junto con el estado de ejecución, brindándote una comprensión inmediata de tus posiciones.",
    txtb_41:
      "Explora esta sección detallada para aprovechar al máximo las herramientas de gráficos y flujo de órdenes en NinjaTrader. Desde la operación eficiente hasta la personalización completa, descubre cómo esta plataforma eleva tu experiencia de trading a nuevos niveles.",
    titk_5: ["Descubre sin Riesgos: Cuentas Demo en NinjaTrader", "demo"],
    txtb_50:
      "Ingresar al mundo del trading puede ser desafiante, pero NinjaTrader facilita el proceso al ofrecer cuentas demo que permiten a los traders explorar y perfeccionar sus habilidades antes de arriesgar su capital. En esta sección, exploraremos cómo las cuentas demo de NinjaTrader brindan a los usuarios una valiosa oportunidad de desarrollo y familiarización con la plataforma.",
    tit3_52: "Simulación y Backtesting:",
    txtb_52:
      "Incluso sin una cuenta financiada, NinjaTrader proporciona herramientas de simulación y backtesting de vanguardia. Estas funciones permiten a los traders desarrollar estrategias, ajustar sus enfoques y explorar la plataforma sin la presión de operar con dinero real. La simulación ofrece un entorno de práctica realista, replicando las condiciones del mercado.",
    
      imgb_4: "./articles_page/ninja_04.jpg",
    
      tit3_54: "Desarrolla tu Estrategia:",
    txtb_54:
      "Las cuentas demo en NinjaTrader son un terreno de juego seguro para desarrollar y perfeccionar estrategias de trading. Los traders pueden experimentar con diferentes enfoques, probar teorías y ajustar sus tácticas según sea necesario, todo sin arriesgar fondos reales.",
    tit3_56: "Familiarízate con NinjaTrader:",
    txtb_56:
      "Antes de sumergirte en el trading en vivo, las cuentas demo te permiten familiarizarte con la plataforma NinjaTrader. Explora las herramientas, ajusta la configuración y comprende la interfaz, todo ello sin la preocupación de posibles pérdidas financieras.",
    tit3_58: "Prueba de Rendimiento con Backtesting:",
    txtb_58:
      "La función de backtesting en NinjaTrader te permite evaluar el rendimiento histórico de tu estrategia en condiciones de mercado anteriores. Esta herramienta es esencial para comprender cómo podría haber funcionado tu estrategia en el pasado y ajustarla para el futuro.",
  },
  {
    titSec: "Futuros Mini y Micro, Que son y como funcionan",
    subSec: "¿Qué son y como funcionan?",
    img01Sec: "./articles_page/art3_min.png",
    img02Sec: "./articles_page/art3_min.png",
    url: "mini-micro-futures",
    titb: "Futuros Mini y Micro ¿Qué son y como funcionan?",
    imgb: "./articles_page/art1_01.png",
    subb_1:
      "Los contratos mini y micro se presentan como herramientas innovadoras que permiten a los inversores participar en los mercados financieros con una inversión más modesta. En esta entrada, exploraremos a fondo qué son los futuros mini y micro, cómo desempeñan un papel crucial en el acceso a mercados previamente inaccesibles y por qué están ganando terreno entre inversores de todos los niveles.",
      
    
      titk_1: ["¿Cuál es la finalidad de los futuros mini y micro?", "mini"],

    
    txtb_1:
      "Los futuros mini y micro tienen la noble misión de simplificar el acceso a mercados que, de otra manera, podrían resultar desafiantes debido a su complejidad logística o costos elevados. Pensemos, por ejemplo, en los mercados de materias primas y la logística involucrada en la recepción, transporte, aseguramiento y almacenamiento de dichos activos. Estos contratos se erigen como soluciones que abren las puertas del trading a un espectro más amplio de inversores.",
    txtb_2:
      "Además, los contratos mini y micro ofrecen la posibilidad de participar en los mercados con una inversión considerablemente menor que la requerida para contratos estándar. Aunque no existe una escala única, los futuros mini sobre índices, por ejemplo, pueden cotizar entre una quinta y una décima parte del valor del contrato estándar. De manera similar, los futuros micro pueden reducir la inversión necesaria en la misma proporción, e incluso llegar a ser 100 veces más asequibles que los futuros estándar.",
   
      imgb_1: "./articles_page/micro_01.jpg",
      titk_2: [
      "Características clave de los futuros mini y micro: ",
      "caracteristicas",
    ],
    txtb_20:
      "Los futuros mini y micro establecen una obligación entre dos partes, el tenedor y el emisor, comprometiéndose a realizar un intercambio acordado del activo y el correspondiente pago en el futuro. A diferencia de otros instrumentos, como los warrants, estos contratos se negocian en mercados regulados, proporcionando un entorno más seguro y transparente.",
    txtb_21:
      "Es esencial destacar que los futuros mini y micro son solo una de las formas de acceder a los mercados. Aunque requieren una asignación de capital más baja, otros instrumentos como los turbos permiten personalizar el nivel de apalancamiento según la estrategia de inversión.",
    titk_3: ["Cómo funcionan los futuros mini y micro: ", "funcionamiento"],
    txtb_30:
      "Estos contratos permiten a los inversores operar según sus expectativas, ya sea al alza o a la baja, respecto a los movimientos previstos en los precios del mercado subyacente. Aunque comparten el mismo principio de funcionamiento que los contratos futuros estándar, la característica distintiva de los futuros mini y micro radica en el precio del contrato.",
    txtb_32:
      "Por ejemplo, los futuros mini y micro sobre índices prominentes, como el S&P 500 y el Russell 2000, reducen la inversión inicial necesaria en 5 y 50 veces, respectivamente, en comparación con los futuros estándar. En el caso del S&P 500 Mini, negociado en el CME (Chicago Mercantile Exchange), representa una quinta parte del valor del futuro estándar sobre el S&P 500. Por su parte, la versión micro (o micro e-mini future) del S&P 500 reduce aún más la inversión, representando 1/10 del costo del contrato mini y 1/50 del precio del contrato estándar.",
    
    
      titk_4: ["Ejemplos de futuros mini y micro:", "ejemplos"],
    txtb_40:
      "Los futuros mini y micro abarcan diversos mercados, incluyendo forex con pares de divisas clave (EUR/USD, GBP/USD) y materias primas como oro, plata y crudo, todo ello en formatos más asequibles. Entre los más populares se encuentran los futuros mini y micro que siguen índices bursátiles líderes a nivel mundial, como Nasdaq 100, DAX 30, FTSE 100, S&P 500 e Ibex 35.",
   
      imgb_2: "./articles_page/micro_02.jpg",
   
      titk_5: ["Diferencia entre futuros mini y otros futuros:", "diferencias"],
    txtb_50:
      "En esencia, los contratos de futuros mini ofrecen una inversión más accesible en comparación con los futuros estándar, permitiendo así la participación de un mayor número de inversores. Los futuros micro llevan este concepto aún más lejos, requiriendo un capital aún menor y volviéndose más asequibles para un espectro aún más amplio de inversores.",
    txtb_52:
      "El trading en futuros, ya sea mini, micro o estándar, proporciona una alternativa atractiva para incluir diversos mercados en un portafolio de inversión con una fracción de los costos asociados a la adquisición directa de estos activos. Al operar en futuros, los inversores pueden especular sobre los cambios en los precios del mercado subyacente sin necesidad de tomar posesión física del activo.",
  },
  {
    titSec: "METODO WYCKOFF ¡Descubre el movimiento del mercado!",
    subSec: "El Método Wyckoff explicado paso a paso",
    img01Sec: "./articles_page/art4_min.png",
    img02Sec: "./articles_page/art4_min.png",
    url: "wyckoff-method",
    titb: "El Método Wyckoff Guia completa",
    imgb: "./articles_page/wyckoff_03.jpg",
    
    subb_1:
      "En el vasto mundo de la inversión, el método Wyckoff destaca como una estrategia centenaria creada por Richard Wyckoff. Este enfoque, basado en el análisis de las fases del mercado, ha resistido la prueba del tiempo y continúa siendo una herramienta valiosa para inversores que buscan predecir movimientos futuros de activos. Descubramos juntos cómo implementar esta estrategia y cómo puede beneficiar a los inversionistas.",
    titk_1: ["¿Qué Es?", "wyckoff"],
    txtb_1:
      "El método Wyckoff es un sistema de inversión que, a través del análisis de las fases del mercado, busca prever los movimientos futuros de las cotizaciones. Diseñado por Richard Wyckoff, este método se enfoca en generar ganancias a largo plazo en el mercado de valores. Proporciona un marco para identificar las mejores acciones para invertir y determinar el momento óptimo para ejecutar transacciones. Es importante destacar que esta estrategia está orientada hacia inversiones a largo plazo.",
    titk_2: ["¿Quién Era Richard Wyckoff?", "historia"],

    iinb_1: "./articles_page/wyckoff_01.jpg",
    
    txtb_2:
      "Richard Wyckoff, un pionero del trading a principios del siglo XX, desarrolló este método. Fue uno de los primeros en analizar técnicas que le brindaran resultados beneficiosos en la bolsa de valores. Wyckoff se destacó por su enfoque en el análisis técnico, utilizando gráficos y observando el precio y volumen de instrumentos financieros. Su trabajo sentó las bases para lo que conocemos como análisis técnico hoy en día.",
    titk_3: [
      "Claves para Entender los Fundamentos del Trading según Wyckoff:",
      "claves",
    ],
    txtb_30:
      "El método Wyckoff ofrece claves fundamentales para comprender el trading. Wyckoff formuló tres leyes esenciales para respaldar su método:",
    txtb_32:
      "1. Ley de Oferta y Demanda Determina el Precio: Los precios suben con una mayor demanda y bajan con una oferta superior. Los traders analizan el equilibrio entre oferta y demanda al comparar barras de precios y volumen.",
    txtb_34:
      "2. Ley de Causa y Efecto: Permite medir el alcance potencial de una tendencia basándose en un rango de trading. La acumulación o distribución de fuerza en el mercado se convierte en una tendencia.",
    txtb_36:
      "3. Ley de Esfuerzo y Resultado: Actúa como un indicador de posibles cambios en el movimiento del mercado, evaluando la diferencia entre precio y volumen.",
    titk_4: ["Fases de Mercado según Wyckoff:", "fases"],
    dotb_40:
      "Fase de Acumulación (Fase A): Marca el fin de la tendencia bajista. Se caracteriza por movimientos laterales del precio, picos de volumen y un rango definido.",
    dotb_42:
      "Fase de Tendencia (Fase B): Representa una leve tendencia ascendente con volumen constante. Aquí, los grandes intereses acumulan acciones a precios bajos en preparación para la siguiente fase.",
    dotb_44:
      "Fase de Distribución (Fase C): La fase final, donde grandes inversores comienzan a prever movimientos del mercado. Se incrementa el volumen mientras se deshacen de acciones acumuladas, preparándose para una nueva fase.",
    
      imgb_1: "./articles_page/wyckoff_02_es.jpg",
    
      titk_5: [
      "Aplicación del Método Wyckoff en Inversiones Diarias",
      "aplicaciones",
    ],
    txtb_50:
      "Aunque Wyckoff está diseñado para inversiones a largo plazo, puede aplicarse a operaciones diarias en cinco pasos:",
    txtb_52:
      "1. Evaluar la Posición del Mercado: Determinar si el mercado está en consolidación o en una tendencia alcista o bajista.",
    txtb_54:
      "2. Observar Acciones: Seleccionar acciones con movimientos armoniosos y más fuertes que el mercado en tendencia alcista, y viceversa.",
    txtb_56:
      "3. Elegir Acciones de Acuerdo con Objetivos: Escoger acciones en fases de acumulación para posiciones largas, asegurándose de que cumplan con objetivos establecidos.",
    txtb_58:
      "4. Elegir Acciones de Acuerdo con Objetivos: Escoger acciones en fases de acumulación para posiciones largas, asegurándose de que cumplan con objetivos establecidos.",
    txtb_60:
      "5. Aplicar Principios de Wyckoff: Utilizar las leyes de oferta y demanda, causa y efecto, y esfuerzo y resultado para guiar decisiones comerciales.",
    txtb_80:
      "El método Wyckoff, fruto de la visión pionera de Richard Wyckoff, sigue siendo una guía valiosa en el mundo de la inversión. Ya sea para inversiones a largo plazo o para operaciones diarias, este método ofrece un enfoque sólido basado en el análisis profundo del mercado. Al comprender sus fundamentos, los inversionistas pueden tomar decisiones más informadas y potencialmente beneficiarse de los movimientos del mercado. En Libertex, estamos comprometidos a proporcionar información vital para que te aventures con éxito en el emocionante mundo de la inversión. ¡Sigue explorando nuestro blog para más conocimientos y estrategias!",
  },





];
export const ArticlesDataEn = [
  {
    titSec: "Basic Manual for Futures Trading #1",
    subSec: "Discovering the World of Futures Trading",
    img01Sec: "./articles_page/art1_min.png",
    img02Sec: "./articles_page/art1_min.png",
    url: "futures-trading-guide-1",
    titb: "Trading Futures from the Ground Up: Essential Guide for Beginners",
    imgb: "./articles_page/art1_01.png",
    subb_1:
      "Welcome to our blog, where we dive into the exciting universe of futures trading. Whether you're a financial market enthusiast or an aspiring investor, this space will provide valuable information to understand and master the art of futures trading.",
    sepA_1: "",
    
    titk_1: ["What are Futures?", "futures"],
    txtb_1:
      "Futures are derivative financial instruments that play a fundamental role in modern financial markets. These standardized contracts offer participants the opportunity to buy or sell an underlying asset at a fixed price on a predetermined future date. Originating in the 19th century, initially linked to crops, futures have evolved to cover a wide range of assets, from commodities to stock indices and interest rates.",
    
      sepA_2: "",
      imgb_1: "./articles_page/futuros_01.jpg",

    titk_2: ["History and Origin:", "history"],
    txtb_2:
      "The concept of futures emerged in the 19th century as a clever solution to challenges faced by farmers. These professionals, exposed to losses due to fluctuations in demand and unforeseen weather events, found in futures contracts a valuable tool to manage their risk.",
    txtb_3:
      "The early futures were directly related to crops, allowing farmers to agree on the sale of a specific quantity of products at an agreed-upon price with buyers. This transaction was scheduled for delivery on a predetermined future date. This innovative approach not only provided stability to farmers but also laid the groundwork for the development of broader financial markets.",
    sepA_3: "",
    titk_3: ["Key Features of Futures:", "features"],
    txtb_4:
      "1. Standardization: The key to the success of futures lies in their standardization. Each contract follows detailed parameters, including contract size, exercise price, and expiration date. This provides transparency and efficiency in trading.",
    txtb_5:
      "2. Fixed Price and Date: Futures establish a predetermined price for the underlying asset and a predefined expiration date. This allows participants to plan and manage their investments with certainty.",
    txtb_6:
      "3. Asset Diversification: Although futures have their roots in agricultural crops, market evolution has led to the inclusion of a wide range of assets. From commodities to currencies, futures offer invaluable diversification for investors.",
    txtb_7:
      "4. Risk Management: Originally conceived as a hedging tool for farmers, futures continue to play a crucial role in risk management for a variety of market participants.",
    txtb_8:
      "5. A distinctive aspect of futures is the trader's ability to sell a contract without having bought it previously, known as a short position. This feature adds versatility to futures trading.",
    sepB_1: "",
    titk_5: [
      "Futures Contracts: Exploring the Most Traded by Volume",
      "contracts",
    ],
    txtb_12:
      "Knowing the futures contracts most traded by volume is essential to understand the dynamics of the financial market. Below, we present a list of the most traded futures contracts, ranked from highest to lowest volume:",
    
      imgb_2: "./articles_page/futuros_02.jpg",
    
      tit3_10: "Interest Rate Futures:",
    txtb_13:
      "Linked to interest rates, these futures are crucial for risk management related to fluctuations in interest rates.",
    tit3_11: "Stock Index Futures:",
    txtb_14:
      "Popular among investors who want to speculate on the overall market performance without the need to buy each individual stock.",
    tit3_12: "Energy Futures:",
    txtb_15:
      "Focused on energy products such as oil and natural gas, they are essential for managing exposure to price movements in the energy sector.",
    tit3_13: "Agricultural Product Futures:",
    txtb_16:
      "Include a wide variety, from grains to livestock, and are crucial for risk management in the production and sale of agricultural products.",
    tit3_5: "Forex Futures:",
    txtb_17:
      "Allow speculation on currency exchange rate movements, being a vital tool for managing the risk associated with fluctuations in currency markets.",
    tit3_6: "Metal Futures:",
    txtb_18:
      "Include precious metals such as gold, silver, and platinum, being attractive to investors looking to diversify their portfolios and protect against volatility in metal markets.",
      imgb_3: "./articles_page/art1_03.png",
    titk_10: ["Speculating in the Futures Market", "trading"],
    txtb_20:
      "In the world of futures contracts, many traders choose speculation as their primary focus. This involves buying and selling futures contracts with the aim of capitalizing on price movements, without the intention of executing the contracts on the expiration date. This approach, known as futures trading, focuses on capturing opportunities in financial markets, regardless of when the contract execution occurs.",
    tit3_20: "Key Features of Futures Trading:",
    dotb_20:
      "Price Movements: The main goal is to capitalize on fluctuations in the prices of underlying assets. Futures traders seek to identify trends and patterns that allow them to make informed decisions.",
    dotb_22:
      "Temporal Flexibility: Unlike those who trade with the intention of executing contracts on the expiration date, speculators in futures are not limited by specific deadlines. They can enter and exit positions based on market opportunities.",
    dotb_24:
      "Asset Diversity: Speculative traders can participate in a wide variety of markets, from currencies to commodities and from stock indices to interest rates. This diversification gives them the ability to adapt to different market conditions.",
    dotb_26:
      "Risk Management: Although speculation may involve some level of risk, successful futures traders employ risk management strategies to protect their capital. This may include setting stop-loss orders and defining risk-reward ratios.",
    sepB_2: "",
    titk_11: ["Conclusion", "conclusion"],
    txtb_27:
      "This introductory guide provides a glimpse into the fascinating world of futures trading. Whether you're intrigued by the history of futures contracts, interested in the most traded futures, or considering speculative trading, understanding the fundamentals is the first step toward success.",
    txtb_28:
      "In future articles, we'll delve deeper into specific aspects of futures trading, providing valuable insights and practical tips for both beginners and experienced traders. Stay tuned as we navigate the exciting and dynamic landscape of financial markets.",
    conSec: "Stay informed with our latest articles and updates.",
    conSecLink: "./blog",
    conSecLinktxt: "Visit the Blog",
  },
  {
    titSec: "NINJATRADER 8, Complete Guide",
    subSec: "What is NinjaTrader and How Does This Platform Work?",
    img01Sec: "./articles_page/art2_min.png",
    img02Sec: "./articles_page/art2_min.png",
    url: "ninja-trader-guide",
    titb: "Trading Futures with NINJATRADER 8",
    imgb: "./articles_page/art1_01.png",
    subb_1:
      "NinjaTrader, a leading trading platform founded in 2003, has evolved with the financial industry for over two decades. In this complete guide, we will explore the features, advantages, and disadvantages of NinjaTrader, as well as the trading strategies and opportunities it offers.",
    sepA_1: "",
    titk_1: ["Platform Advantages", "advantages"],

    imgb_1: "./articles_page/ninja_01.jpg",
    txtb_1:
      "1. First-Class Charting Tools: Enhanced trading experience with customization options and a wide range of technical indicators.",
    txtb_2:
      "2. Trade Simulation: Ideal for beginners and experienced traders, it allows paper trading without financial risks.",
    txtb_3:
      "3. Comprehensive Educational Library: Educational resources that guide traders through the entire process, from beginners to advanced.",
    titk_2: ["Key Features", "features"],

    imgb_2: "./articles_page/ninja_02.jpg",
    txtb_10:
      "NinjaTrader stands out as a comprehensive platform with key partnerships with popular brokers like Interactive Brokers and TD Ameritrade. Some of its key features include:",
    dotb_10:
      "Micro E-mini Futures Trading: Smaller contracts for S&P 500, Dow Jones, NASDAQ-100, and Russell 2000.",
    dotb_12:
      "Micro Crude Oil (MCL): Opportunity to trade in energy markets at a fraction of the standard contract price.",
    dotb_14:
      "Nano Bitcoin: Bitcoin futures at one-hundredth of the price, ideal for cryptocurrency speculators.",
    dotb_16:
      "Integration with Recognized Brokers: Integration with brokers like Interactive Brokers and TD Ameritrade to trade a wide range of assets.",
    tit3_10: "Which Futures Contracts Can I Trade on NinjaTrader?",
    txtb_20:
      "Explore the full range of Micro E-mini futures, Micro Crude Oil, Nano Bitcoin, and other exciting trading opportunities.",
    titk_3: ["Exploring Charts", "charts"],
    txtb_30:
      "Discover how NinjaTrader transforms the trading experience with its advanced visualization tools and charts. From unique features to the ability to trade directly from the chart, this platform offers a set of tools that allow traders to react quickly to market changes.",
    tit3_30: "Placing Orders Directly from the Chart:",
    imgb_3: "./articles_page/ninja_03.jpg",
    
    txtb_32:
      "NinjaTrader goes beyond conventional charts by allowing traders to place trades directly from the chart interface. This unique functionality empowers users to make quick and precise decisions, optimizing their reaction time to market fluctuations.",
    tit3_36: "Quick Access Keys and Efficient Execution:",
    txtb_36:
      "Customize your trading experience by preconfiguring quick access keys. This will allow you to execute orders quickly, capitalizing on even small market movements. Learn how to streamline your trading process to make the most of every opportunity.",
    tit3_38: "Adaptability to Your Trading Style:",
    txtb_38:
      "Charts in NinjaTrader support a wide variety of technical indicators, both popular and custom. Adjust the charts according to your trading style, incorporating tools that best suit your needs and strategies.",
    tit3_40: "Clear Visualization of Trade Status:",
    txtb_40:
      "In NinjaTrader, the status of your trades is presented transparently on the charts. Profits or losses are displayed directly along with the execution status, giving you an immediate understanding of your positions.",
    txtb_41:
      "Explore this detailed section to make the most of charting and order flow tools in NinjaTrader. From efficient trading to complete customization, discover how this platform elevates your trading experience to new levels.",
    titk_5: ["Risk-Free Exploration: Demo Accounts in NinjaTrader", "demo"],
    txtb_50:
      "Entering the world of trading can be challenging, but NinjaTrader simplifies the process by offering demo accounts that allow traders to explore and hone their skills before risking their capital. In this section, we will explore how NinjaTrader demo accounts provide users with a valuable opportunity for development and familiarization with the platform.",
    tit3_52: "Simulation and Backtesting:",
    txtb_52:
      "Even without a funded account, NinjaTrader provides state-of-the-art simulation and backtesting tools. These functions allow traders to develop strategies, fine-tune their approaches, and explore the platform without the pressure of trading with real money. Simulation provides a realistic practice environment, replicating market conditions.",
      imgb_4: "./articles_page/ninja_04.jpg",
    
    
      tit3_54: "Develop Your Strategy:",
    txtb_54:
      "Demo accounts in NinjaTrader are a safe playground to develop and refine trading strategies. Traders can experiment with different approaches, test theories, and adjust tactics as needed, all without risking real funds.",
    tit3_56: "Familiarize Yourself with NinjaTrader:",
    txtb_56:
      "Before diving into live trading, demo accounts allow you to familiarize yourself with the NinjaTrader platform. Explore the tools, adjust settings, and understand the interface, all without the concern of potential financial losses.",
    tit3_58: "Performance Testing with Backtesting:",
    txtb_58:
      "The backtesting feature in NinjaTrader allows you to evaluate the historical performance of your strategy in previous market conditions. This tool is essential for understanding how your strategy might have performed in the past and adjusting it for the future.",
  },
  {
    titSec: "Mini and Micro Futures, What Are They and How Do They Work",
    subSec: "What Are They and How Do They Work?",
    img01Sec: "./articles_page/art3_min.png",
    img02Sec: "./articles_page/art3_min.png",
    url: "mini-micro-futures",
    titb: "Mini and Micro Futures: What Are They and How Do They Work?",
    imgb: "./articles_page/art1_01.png",
    subb_1:
      "Mini and micro contracts present themselves as innovative tools that allow investors to participate in financial markets with a more modest investment. In this entry, we will thoroughly explore what mini and micro futures are, how they play a crucial role in accessing previously inaccessible markets, and why they are gaining ground among investors of all levels.",
    titk_1: ["What is the Purpose of Mini and Micro Futures?", "mini"],
    txtb_1:
      "Mini and micro futures have the noble mission of simplifying access to markets that might otherwise be challenging due to their logistical complexity or high costs. Consider, for example, commodity markets and the logistics involved in receiving, transporting, securing, and storing such assets. These contracts emerge as solutions that open the doors of trading to a broader spectrum of investors.",
    txtb_2:
      "Moreover, mini and micro contracts offer the possibility to participate in markets with a considerably lower investment than required for standard contracts. Although there is no one-size-fits-all scale, mini futures on indices, for example, can trade between one-fifth and one-tenth of the standard contract value. Similarly, micro futures can reduce the required investment in the same proportion, and even be 100 times more affordable than standard futures.",
    
      imgb_1: "./articles_page/micro_01.jpg",
      titk_2: ["Key Features of Mini and Micro Futures:", "features"],
    txtb_20:
      "Mini and micro futures establish an obligation between two parties, the holder and the issuer, committing to an agreed exchange of the asset and the corresponding payment in the future. Unlike other instruments, such as warrants, these contracts are traded on regulated markets, providing a safer and more transparent environment.",
    txtb_21:
      "It is essential to highlight that mini and micro futures are just one of the ways to access markets. While requiring a lower capital allocation, other instruments like turbos allow customizing the level of leverage according to the investment strategy.",
    titk_3: ["How Mini and Micro Futures Work:", "operation"],
    txtb_30:
      "These contracts allow investors to trade based on their expectations, whether upward or downward, regarding anticipated movements in the prices of the underlying market. Although they share the same operating principle as standard futures contracts, the distinctive feature of mini and micro futures lies in the contract price.",
    txtb_32:
      "For example, mini and micro futures on prominent indices, such as the S&P 500 and Russell 2000, reduce the initial investment required by 5 and 50 times, respectively, compared to standard futures. In the case of the S&P 500 Mini, traded on the CME (Chicago Mercantile Exchange), it represents one-fifth of the value of the standard future on the S&P 500. On the other hand, the micro version (or micro e-mini future) of the S&P 500 further reduces the investment, representing 1/10 of the cost of the mini contract and 1/50 of the price of the standard contract.",
    titk_4: ["Examples of Mini and Micro Futures:", "examples"],
    txtb_40:
      "Mini and micro futures cover various markets, including forex with key currency pairs (EUR/USD, GBP/USD) and commodities like gold, silver, and crude oil, all in more affordable formats. Among the most popular are mini and micro futures tracking leading global stock indices, such as Nasdaq 100, DAX 30, FTSE 100, S&P 500, and Ibex 35.",
    
      imgb_2: "./articles_page/micro_02.jpg",
      titk_5: [
      "Difference Between Mini Futures and Other Futures:",
      "differences",
    ],
    txtb_50:
      "Essentially, mini futures contracts offer a more accessible investment compared to standard futures, thus allowing the participation of a larger number of investors. Micro futures take this concept even further, requiring even less capital and becoming more affordable for an even broader spectrum of investors.",
    txtb_52:
      "Trading in futures, whether mini, micro, or standard, provides an attractive alternative to include diverse markets in an investment portfolio at a fraction of the costs associated with the direct acquisition of these assets. By trading in futures, investors can speculate on changes in the prices of the underlying market without the need to physically take possession of the asset.",
  },
  {
    titSec: "WYCKOFF METHOD Discover Market Movement!",
    subSec: "The Wyckoff Method Explained Step by Step",
    img01Sec: "./articles_page/art4_min.png",
    img02Sec: "./articles_page/art4_min.png",
    url: "wyckoff-method",
    titb: "Wyckoff Method Complete Guide",
    imgb: "./articles_page/wyckoff_03.jpg",
    subb_1:
      "In the vast world of investment, the Wyckoff method stands out as a century-old strategy created by Richard Wyckoff. This approach, based on market phase analysis, has withstood the test of time and continues to be a valuable tool for investors seeking to predict future asset movements. Let's explore together how to implement this strategy and how it can benefit investors.",
    titk_1: ["What Is It?", "wyckoff"],
    txtb_1:
      "The Wyckoff method is an investment system that, through the analysis of market phases, seeks to predict future price movements. Designed by Richard Wyckoff, this method focuses on generating long-term profits in the stock market. It provides a framework for identifying the best stocks to invest in and determining the optimal time to execute transactions. It is essential to note that this strategy is oriented towards long-term investments.",
    titk_2: ["Who Was Richard Wyckoff?", "history"],
    
    iinb_1: "./articles_page/wyckoff_01.jpg",
    txtb_2:
      "Richard Wyckoff, a pioneer in trading in the early 20th century, developed this method. He was one of the first to analyze techniques that would provide beneficial results in the stock market. Wyckoff stood out for his focus on technical analysis, using charts and observing the price and volume of financial instruments. His work laid the foundation for what we know as technical analysis today.",
    titk_3: ["Keys to Understanding Wyckoff's Trading Fundamentals:", "keys"],
    txtb_30:
      "The Wyckoff method offers fundamental keys to understanding trading. Wyckoff formulated three essential laws to support his method:",
    txtb_32:
      "1. Law of Supply and Demand Determines Price: Prices rise with increased demand and fall with higher supply. Traders analyze the balance between supply and demand by comparing price bars and volume.",
    txtb_34:
      "2. Law of Cause and Effect: Allows measuring the potential extent of a trend based on a trading range. Accumulation or distribution of strength in the market turns into a trend.",
    txtb_36:
      "3. Law of Effort and Result: Acts as an indicator of possible changes in market movement by evaluating the difference between price and volume.",
    titk_4: ["Market Phases According to Wyckoff:", "phases"],
    dotb_40:
      "Accumulation Phase (Phase A): Marks the end of the bearish trend. Characterized by sideways price movements, volume spikes, and a defined range.",
    dotb_42:
      "Trend Phase (Phase B): Represents a mild upward trend with constant volume. Here, significant interests accumulate stocks at low prices in preparation for the next phase.",
    dotb_44:
      "Distribution Phase (Phase C): The final phase, where major investors begin to anticipate market movements. Volume increases as they unload accumulated stocks, preparing for a new phase.",
      imgb_1: "./articles_page/wyckoff_02_en.jpg",
   
      titk_5: [
      "Application of the Wyckoff Method in Daily Investments",
      "applications",
    ],
    txtb_50:
      "Although Wyckoff is designed for long-term investments, it can be applied to daily trades in five steps:",
    txtb_52:
      "1. Evaluate Market Position: Determine if the market is consolidating or in an uptrend or downtrend.",
    txtb_54:
      "2. Observe Stocks: Select stocks with harmonious and stronger movements than the market in an uptrend, and vice versa.",
    txtb_56:
      "3. Choose Stocks According to Objectives: Pick stocks in accumulation phases for long positions, ensuring they meet established objectives.",
    txtb_58:
      "4. Choose Stocks According to Objectives: Pick stocks in accumulation phases for long positions, ensuring they meet established objectives.",
    txtb_60:
      "5. Apply Wyckoff Principles: Use the laws of supply and demand, cause and effect, and effort and result to guide trading decisions.",
    txtb_80:
      "The Wyckoff method, born out of Richard Wyckoff's pioneering vision, remains a valuable guide in the investment world. Whether for long-term investments or daily trades, this method offers a solid approach based on in-depth market analysis. By understanding its fundamentals, investors can make more informed decisions and potentially benefit from market movements. At Libertex, we are committed to providing vital information to help you venture successfully into the exciting world of investment. Keep exploring our blog for more insights and strategies!",
  },
];
