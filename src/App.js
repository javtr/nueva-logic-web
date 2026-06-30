import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import ContactLic from "./pages/ContactLic";
import Buy from "./pages/Buy";
import Indicator from "./pages/Indicator";
import Article from "./pages/Article";
import Risk from "./pages/Risk";
import Indicators from "./pages/Indicators";
import Install from "./pages/Install";
import Policies from "./pages/policies";
import LanguageContext from "../src/context/langContext";
import { HelmetProvider } from "react-helmet-async";
import "./App.scss";
import FreeIndicators from "./pages/FreeIndicators";

function App() {
  const [lang, setLang] = useState("");
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  // Idioma
  useEffect(() => {
    // 1. PRIORIDAD: ¿El usuario cambió idioma manualmente?
    const preferenciaManual = localStorage.getItem("logic_lang_manual");
    if (preferenciaManual === "en" || preferenciaManual === "es") {
      setLang(preferenciaManual);
    } else {
      // 2. DETECCIÓN AUTOMÁTICA: Si no hay preferencia manual
      const idiomaNavegador = navigator.language || navigator.userLanguage || 'en';
      const idiomaDetectado = idiomaNavegador.toLowerCase().startsWith('es') ? 'es' : 'en';
      setLang(idiomaDetectado);
    }
  }, []);

  // === Lemon Squeezy: persistencia de ?aff en rutas con enlaces a productos ===
  const location = useLocation();

  useEffect(() => {
    const url = new URL(window.location.href);
    const currentAff = url.searchParams.get("aff");

    // Rutas donde quieres mantener visible ?aff (incluye subrutas)
    const allowPrefixes = ["/buy", "/indicators", "/indicator", "/education", "/"]; 
    // Si NO quieres mostrar ?aff en la home, quita "/" del array de arriba.

    // Normaliza el path (quita slash final excepto si es "/")
    let path = location.pathname;
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

    const isAllowed = allowPrefixes.some((p) => path === p || path.startsWith(p + "/"));

    if (currentAff) {
      // Si llegó un ?aff, guárdalo para mantenerlo en navegación SPA
      sessionStorage.setItem("lsq_aff", currentAff);
    } else {
      // Si no hay ?aff en la URL pero tenemos uno guardado y la ruta está permitida, lo reinyectamos
      const saved = sessionStorage.getItem("lsq_aff");
      if (saved && isAllowed) {
        url.searchParams.set("aff", saved);
        window.history.replaceState({}, "", url.toString());
        return; // ya actualizamos la URL
      }
    }

    // (Opcional) si hay ?aff en una ruta NO permitida, limpiarlo para no contaminar SEO/analytics
    if (currentAff && !isAllowed) {
      url.searchParams.delete("aff");
      window.history.replaceState({}, "", url.toString());
    }
  }, [location.pathname]);
  // === Fin Lemon Squeezy ===

  return (
    <HelmetProvider>
      <LanguageContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Ruta principal */}
            <Route index element={<Home />} />

            {/* Rutas relativas */}
            <Route path="indicator/:IndicatorId" element={<Indicator />} />
            <Route path="indicators" element={<Indicators />} />
            <Route path="education" element={<Education />} />
            <Route path="article/:articleId" element={<Article />} />
            <Route path="buy" element={<Buy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="lic" element={<ContactLic />} />
            <Route path="policies" element={<Policies />} />
            <Route path="risk" element={<Risk />} />
            <Route path="install" element={<Install />} />
            <Route path="free">
              <Route index element={<Navigate to="/free/otm-deltabar-free" replace />} />
              <Route path=":indicatorPath" element={<FreeIndicators />} />
            </Route>

            {/* Cualquier otra ruta vuelve al Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </HelmetProvider>
  );
}

export default App;
