import React, { useState, useContext, useEffect } from "react";
import video_header from "../../assets/img/header_video.mp4";
import avatar from "../../assets/img/avatar.png";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/home-header";

export default function Header() {

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

        <div className="header">
          <div className="header__content">
            <div className="header__content--text">
              <h1>{text.tit}</h1>
              <h2>{text.sub}</h2>
              <div className="header__content--text-testimonials">
                <div className="header__content--text-testimonials-img">
                  <img src={avatar} alt="Avatar" />
                </div>
                <div className="header__content--text-testimonials-txt">
                  <p>{text.tes}</p>
                  <p>{text.nom}</p>
                </div>
              </div>
            </div>
            <div className="header__content--img">
              <video autoPlay loop muted>
                <source src={video_header} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

      ) : (
        <></>
      )}
    </>
    
  );
}
