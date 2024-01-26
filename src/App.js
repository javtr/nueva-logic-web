import React, {useState, useMemo, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import "./App.scss";
import Buy from "./pages/Buy";
import Indicator from "./pages/Indicator";
import Article from "./pages/Article";
import LanguageContext from "../src/context/langContext";


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
    <LanguageContext.Provider value={value}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/indicator/:IndicatorId" element={<Indicator />} />
            <Route path="/education" element={<Education />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </>
    </LanguageContext.Provider>
  );
}

export default App;
