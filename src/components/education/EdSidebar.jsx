import React, { useState, useContext, useEffect } from "react";

import LanguageContext from "../../context/langContext";
import {
  ArticlesDataEn,
  ArticlesDataEs,
} from "../../assets/objects/articles-page2";

export default function EdSideBar({ ind }) {

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(ArticlesDataEn);
    } else if (lang === "es") {
      setText(ArticlesDataEs);
    } else {
      setText(ArticlesDataEn);
    }

    setIsloading(false);
  }, [lang]);


  const obtenerTitkValues = () => {

    if (text[ind]!==undefined) {


    const titkValues = [];

    const titkKeys = Object.keys(text[ind]).filter((key) =>
      key.startsWith("titk")
    );

    titkKeys.forEach((titkKey) => {
      const [titulo, id] = text[ind][titkKey];
      titkValues.push({ titulo, id });
    });

    return titkValues;

  }else{
    return null;
  }



  };

  const listaTitkValues = obtenerTitkValues();

  return (
    <>
      {!isloading ? (
        <>
          {listaTitkValues !== undefined ? (

            <div className="edSidebar">
              <div className="edSidebar__content">
                <div className="edSidebar__content--susc">
                  <h3>{lang === "en" ? "Content" : "Contenido"}</h3>
                  <ul>
                    {listaTitkValues.map(({ titulo, id }, index) => (
                      <li key={index}>
                        <a href={`#${id}`}>{titulo}</a>
                      </li>
                    ))}
                  </ul>
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
