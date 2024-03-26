import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../../context/langContext";

import { textEn, textEs } from "../../assets/text/cookies";

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setAcceptedCookies(true);
  };

  // Comprueba si el usuario ya ha aceptado las cookies
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!acceptedCookies && !localStorage.getItem("cookiesAccepted")) {
        // setAcceptedCookies(true);
        setIsVisible(true);
      }
    }, 2000); // 4 segundos de retraso
    return () => clearTimeout(timer);
  }, [acceptedCookies]);

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
    } else if (lang === "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);

  if (acceptedCookies || localStorage.getItem("cookiesAccepted")) {
    return null;
  }

  return (
    <div>
      {isVisible ? (
        <div className="cookie cookie__fade-in">
          <div className="cookie__cont">
            <h5>{text.tit}</h5>
            <p>
              {text.sub}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://policies.google.com/technologies/partner-sites"
              >
                {text.anc}
              </a>
            </p>
            <p>{text.txt}</p>
            <button onClick={acceptCookies}>{text.but}</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CookieBanner;
