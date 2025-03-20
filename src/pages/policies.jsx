import React, { useState, useContext, useEffect } from "react";
import LanguageContext from "../context/langContext";
import { textEn, textEs } from "../assets/text/policies";

export default function Policies() {
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
    <div className="policies">
      <div className="policies__container">
        <h1>{text.tit1}</h1>
        <p>{text.txt1}</p>
        <h2>{text.tit2}</h2>
        <p>{text.txt2_1}</p>
        <p>{text.txt2_2}</p>
        <h2>{text.tit3}</h2>
        <p>{text.txt3_1}</p>
        <p>{text.txt3_2}</p>
        <h2>{text.tit4}</h2>
        <p>{text.txt4_1}</p>
        <p>{text.txt4_2}</p>
        <p>{text.txt4_3}</p>
        <p className="policies__container--tab">{text.txt4_3_1}</p>
        <p className="policies__container--tab">{text.txt4_3_2}</p>
        <p className="policies__container--tab">{text.txt4_3_3}</p>
        <h2>{text.tit5}</h2>
        <p>{text.txt5}</p>
        <h2>{text.tit6}</h2>
        <p>{text.txt6}</p>
        <h2>{text.tit7}</h2>
        <p>{text.txt7}</p>





      </div>
    </div>
  );
}
