import React, { useState, useContext, useEffect } from "react";
import LanguageContext from "../context/langContext";
import { textEn, textEs } from "../assets/text/risk";

export default function Risk() {

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
    <div>
        <h2>{text.tit1}</h2>
        <p>{text.txt1}</p>

    </div>
  )
}
