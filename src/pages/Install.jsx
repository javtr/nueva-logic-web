import React, { useState, useContext, useEffect } from "react";
import vid_normal_es from "../assets/vids/ins_norm_d.mp4";
import vid_secure_es from "../assets/vids/ins_seg_d.mp4";
import vid_desinst_es from "../assets/vids/remove_d.mp4";
import vid_normal_en from "../assets/vids/ins_norm_d.mp4";
import vid_secure_en from "../assets/vids/ins_seg_d.mp4";
import vid_desinst_en from "../assets/vids/remove_d.mp4";

import LanguageContext from "../context/langContext";

import { textEn, textEs } from "../assets/text/install";

export default function Install() {
  const { lang, setLang } = useContext(LanguageContext);
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
    <div className="installation">
      <div className="installation__container">

        <h2 className="installation__container--tit1">{text.tit1}</h2>
        <video controls>
          <source src={lang === "en" ? vid_normal_en : vid_normal_es} type="video/mp4" />
        </video>

        <h2 className="installation__container--tit1">{text.tit2}</h2>
        <p className="installation__container--p">{text.subt2}</p>
        <video controls>
          <source src={lang === "en" ? vid_secure_en : vid_secure_es} type="video/mp4" />
        </video>


        <h2 className="installation__container--tit1">{text.tit3}</h2>
        <video controls>
          <source src={lang === "en" ? vid_desinst_es : vid_desinst_es} type="video/mp4" />
        </video>

      </div>
    </div>
  );
}
