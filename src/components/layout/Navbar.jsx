import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_nav.png";
import Burguer from "./Burguer";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/navbar";


export default function Navbar() {



  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const changeLanguage = (selectedLanguage) => {
    setLang(selectedLanguage);
    localStorage.setItem("logic_lang", selectedLanguage);
  };

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
    } else if (lang === "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }

    setIsloading(false);
  }, [lang]);





  return (

    
    <>
      {!isloading ? (


        <div className="navbar">
          <div className="navbar__content">
            <Link className="navbar__content--logo" to="/">
              <img src={logo} alt="Logo" />
            </Link>

            <div className="navbar__content--links">
              <Link to="/risk">{text.dec}</Link>
              <Link to="/indicators">{text.ind}</Link>
              <Link to="/education">{text.edu}</Link>
              <Link to="/buy">{text.buy}</Link>
              <Link to="/contact">{text.con}</Link>
            </div>

            <div className="navbar__content--languaje">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={lang}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <Burguer />
          </div>
        </div>



      ) : (
        <></>
      )}
    </>



  );
}
