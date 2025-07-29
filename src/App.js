import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  const [lang, setLang] = useState("");
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  useEffect(() => {
    const langStorage = localStorage.getItem("logic_lang");
    if (langStorage === "en" || langStorage === "es") {
      setLang(langStorage);
    } else {
      localStorage.setItem("logic_lang", "en");
      setLang("en");
    }
  }, []);

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

            {/* Cualquier otra ruta vuelve al Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </HelmetProvider>
  );
}

export default App;
