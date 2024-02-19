import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo_foot.png";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/footer";



export default function Footer() {

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

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

    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--left">
          <Link className="footer__container--left-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="footer__container--left-links">
            <div className="footer__container--left-links-page">
              <Link to="/education">{text.link1}</Link>
              <Link to="/contact">{text.link2}</Link>
              <Link to="/buy">{text.link3}</Link>
            </div>

            <div className="footer__container--left-links-web">
              <Link to="https://logicindicators.com/">Instagram</Link>
              <Link to="https://logicindicators.com/">YouTube</Link>
            </div>
          </div>
        </div>
        <div className="footer__container--right">

          {/* <h5>Join</h5>
          <p>
            Your dashboard is mission control for your creator journey. Get
            instant access.
          </p>
          <div className="footer__container--right-form">
            <div></div>
            <div></div>
          </div>
          <button>Join</button> */}

        </div>
      </div>

      <div className="footer__text">
        <p>{text.pr1}</p>
        <p>{text.pr2}</p>
        <p>{text.pr3}</p>
      </div>

      <p className="footer__mark">@ 2024 Logic Indicators.</p>
    </div>

    ) : (
        <></>
      )}
    </>



  );
}
