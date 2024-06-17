import React, {useState, useMemo, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import ContactLic from "./pages/ContactLic";
import "./App.scss";
import Buy from "./pages/Buy";
import Indicator from "./pages/Indicator";
import Article from "./pages/Article";
import LanguageContext from "../src/context/langContext";
import { HelmetProvider } from 'react-helmet-async';
import Risk from "./pages/Risk";
import Indicators from "./pages/Indicators";


function App() {
  const [lang, setLang] = useState("");
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  useEffect(() => {
    const langStorage = localStorage.getItem("logic_lang");

    if (langStorage === "en") {
      setLang("en");
    } else if (langStorage === "es") {
      setLang("es");
    } else {
      localStorage.setItem("logic_lang", "en");
      setLang("en");
    }
  }, []);


  return (
    <HelmetProvider>
    <LanguageContext.Provider value={value}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/indicator/:IndicatorId" element={<Indicator />} />
            <Route path="/indicators" element={<Indicators />} />
            <Route path="/education" element={<Education />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lic" element={<ContactLic />} />

            <Route path="/risk" element={<Risk />} />
          </Route>
        </Routes>
      </>
    </LanguageContext.Provider>
    </HelmetProvider>
  );
}

export default App;
