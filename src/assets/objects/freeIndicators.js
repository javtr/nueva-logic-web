export const freeIndicatorsContent = {
en: {
  title: "Free Indicators",
  description: "Get the free indicators that will transform the way you analyze the market.",
  indicators: [
    {
      name: "Logic PocBar",
      path: "logic-pocbar-free", // Unique path for this indicator
      image: require("../../assets/img/poc-image.jpg"),
      description:
        "LogicPocBar displays the Point of Control (POC) of each bar in real time, providing an instant view of the price levels with the highest activity. It’s a lightweight, visual, and highly customizable tool—perfect for traders who want to identify dynamic support and resistance zones without cluttering the chart.",
      features: [
        "Displays each bar’s POC directly on the price chart.",
        "Customize opacity, color, and style to match your layout.",
        "Filter bars by volume thresholds to focus only on relevant activity.",
        "Use color intensity gradients to highlight areas of higher trading activity.",
      ],
      downloadText: "Download Now",
      downloadUrl: "https://www.youtube.com/",
    },
    {
      name: "Logic Profile Free Version",
      path: "logic-profile-free", // Unique path for this indicator
      image: require("../../assets/img/profile-image.jpg"),
      description:
        "LogicProfileFree is a simplified version of the powerful Logic Volume Profile indicator, allowing you to visualize market profiles directly on the chart. While advanced modes are disabled, it offers a manual profile drawing feature that lets you study market structure and key volume levels with professional precision.",
      features: [
        "Draw custom Market Profiles and Volume Profiles directly on the chart.",
        "Calculate key reference levels such as POC, VAH, and VAL for each profile.",
        "Fast and optimized calculation engine.",
        "Flexible display modes for different trading styles.",
      ],
      downloadText: "Download Now",
      downloadUrl: "https://www.youtube.com/",
    },
  ],
},

  es: {
    title: "Indicadores Gratuitos",
    description: "Obtén gratis los indicadores que transformarán tu forma de analizar el mercado.",
    indicators: [
      {
        name: "Logic PocBar",
        path: "logic-pocbar-free", // Ruta única para este indicador
        image: require("../../assets/img/poc-image.jpg"),
        description: "LogicPocFree muestra el Point of Control (POC) de cada barra en tiempo real, ofreciendo una visión inmediata de las zonas de mayor actividad del precio. Es una herramienta ligera, visual y altamente configurable, ideal para traders que buscan identificar soportes y resistencias dinámicos sin sobrecargar el gráfico.",
        features: [
          "Muestra el POC de cada barra directamente sobre el precio.",
          "Personaliza la opacidad, color y estilo para adaptarse a tu gráfico.",
          "Filtra barras según umbrales de volumen para centrarte solo en la actividad relevante.",
          "Usa escalas de color por intensidad para destacar las áreas de mayor negociación.",
        ],
        downloadText: "Descargar Ahora",
        downloadUrl: "/downloads/logic-pocbar-free.zip",
      },
      {
        name: "Logic Profile Versión Gratuita",
        path: "logic-profile-free", // Ruta única para este indicador
        image: require("../../assets/img/profile-image.jpg"),
        description: "LogicProfileFree es una versión simplificada del potente indicador Logic Volume Profile, que permite visualizar perfiles de mercado directamente en el gráfico. Aunque las funciones avanzadas están deshabilitadas, ofrece un modo de dibujo de perfiles manuales que te permitirá estudiar la estructura del volumen y los niveles clave del mercado con precisión profesional.",
        features: [
          "Dibuja Market Profiles y Volume Profiles personalizados directamente en el gráfico.",
          "Calcula niveles esenciales como POC, VAH y VAL para cada perfil.",
          "Cálculo rápido y optimizado",
          "Modos de visualización flexibles",
        ],
        downloadText: "Descargar Ahora",
        downloadUrl: "/downloads/logic-profile-free.zip",
      },
    ],
  },
};