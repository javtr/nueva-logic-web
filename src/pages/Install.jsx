import React, { useState, useContext, useEffect } from "react";
import vid_normal_es from "../assets/video/normal.mp4";
import vid_secure_es from "../assets/video/secure.mp4";
import vid_desinst_es from "../assets/video/uninstall.mp4";
import vid_noDllCode_es from "../assets/video/no_dll_cod.mp4";
import vid_noDll_es from "../assets/video/no_dll.mp4";

import vid_normal_en from "../assets/video/normal_en.mp4";
import vid_secure_en from "../assets/video/secure_en.mp4";
import vid_desinst_en from "../assets/video/uninstall_en.mp4";

import vid_noDllCode_en from "../assets/video/no_dll_cod_en.mp4";
import vid_noDll_en from "../assets/video/no_dll_en.mp4";


import LanguageContext from "../context/langContext";

import { textEn, textEs } from "../assets/text/install";

export default function Install() {
  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [langLoaded, setLangLoaded] = useState("en");

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
      setLangLoaded("en");
    } else if (lang === "es") {
      setText(textEs);
      setLangLoaded("es");
    } else {
      setText(textEn);
      setLangLoaded("en");
    }

    setIsloading(false);
  }, [lang]);

  return (

    
      isloading===true ?
      <></>
      :

    <div className="installation">
      <div className="installation__container">
        <h2 className="installation__container--tit1">{text.titg1}</h2>

        <h3 className="installation__container--tit1">{text.tit1}</h3>
        <div className="installation__container--video">
          <iframe
            title="Instalación normal"
            src={`https://www.youtube.com/embed/${text.url1}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <h3 className="installation__container--tit1">{text.tit2}</h3>
        <p className="installation__container--p">{text.subt2}</p>
        <div className="installation__container--video">
          <iframe
            title="Instalación con excepciones (recomendada)"
            src={`https://www.youtube.com/embed/${text.url2}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <h3 className="installation__container--tit1">{text.tit3}</h3>
        <div className="installation__container--video">
          <iframe
            title="Desinstalar indicadores"
            src={`https://www.youtube.com/embed/${text.url3}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>


        <h2 className="installation__container--tit1">{text.titg2}</h2>

        <h3 className="installation__container--tit1">{text.tit4}</h3>
        <p className="installation__container--p">{text.subt4}</p>
        <div className="installation__container--video">
          <iframe
            title="El indicador no se muestra en el gráfico, pero el botón lateral está visible."
            src={`https://www.youtube.com/embed/${text.url4}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <h3 className="installation__container--tit1">{text.tit5}</h3>
        <p className="installation__container--p">{text.subt5}</p>
        <div className="installation__container--video">
          <iframe
            title="El indicador no muestra ningún contenido, ni siquiera el botón lateral."
            src={`https://www.youtube.com/embed/${text.url5}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>


      </div>
    </div>



  );
}
