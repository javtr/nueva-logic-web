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
        <video controls>
          <source
            src={lang === "en" ? vid_normal_en : vid_normal_es}
            type="video/mp4"
          />
        </video>

        <h3 className="installation__container--tit1">{text.tit2}</h3>
        <p className="installation__container--p">{text.subt2}</p>
        <video controls>
          <source
            src={lang === "en" ? vid_secure_en : vid_secure_es}
            type="video/mp4"
          />
        </video>

        <h3 className="installation__container--tit1">{text.tit3}</h3>
        <video controls>
          <source
            src={lang === "en" ? vid_desinst_en : vid_desinst_es}
            type="video/mp4"
          />
        </video>


        <h2 className="installation__container--tit1">{text.titg2}</h2>

        <h3 className="installation__container--tit1">{text.tit4}</h3>
        <p className="installation__container--p">{text.subt4}</p>
        <video controls>
          <source
            src={lang === "en" ? vid_noDllCode_en : vid_noDllCode_es}
            type="video/mp4"
          />
        </video>


        <h3 className="installation__container--tit1">{text.tit5}</h3>
        <p className="installation__container--p">{text.subt5}</p>
        <video controls>
          <source
            src={lang === "en" ? vid_noDll_en : vid_noDll_es}
            type="video/mp4"
          />
        </video>


      </div>
    </div>



  );
}
