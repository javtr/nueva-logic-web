export const obtenerIdiomaInicial = () => {
  // 1. PRIORIDAD: ¿El usuario ya eligió idioma antes? (Persistencia)
  // Siempre es buena práctica revisar localStorage primero.
  const preferenciaGuardada = localStorage.getItem('logic_lang');
  if (preferenciaGuardada) {
    return preferenciaGuardada;
  }

  // 2. DETECCIÓN: Preguntar al navegador
  // Esto devuelve cosas como 'es-ES', 'en-US', 'fr-FR', etc.
  const idiomaNavegador = navigator.language || navigator.userLanguage || 'en';

  // 3. REGLA DE NEGOCIO: Hispano vs El Resto
  // Usamos .startsWith('es') para atrapar cualquier variante de español
  if (idiomaNavegador.toLowerCase().startsWith('es')) {
    return 'es'; // Tu código para español
  }

  // 4. FALLBACK: Si no es español, forzamos inglés
  return 'en'; // Tu código para inglés (default)
};
