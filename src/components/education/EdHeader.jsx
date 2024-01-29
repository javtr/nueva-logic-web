import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import headerImg from "../../assets/img/of_home.jpeg";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/ed-header";



export default function EdHeader() {

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

        <>
      {text !== undefined ? (



    <div className="ed-header">
      <div className="ed-header__container">
        <div className="ed-header__container--text">
          <h2>{text.tit}</h2>
          <p>
          {text.sub}
          </p>
            <Link to="/buy">{text.lnk}</Link>
        </div>
        <div className="ed-header__container--img">
          <img
            src={headerImg}
            alt="indicator"
          ></img>
        </div>
      </div>
    </div>

    ) : (
        <></>
      )}
    </>

    ) : (
        <></>
      )}
    </>

  );
}
