import React, { useEffect, useState, useContext } from "react";

import { IndicatorDataEn, IndicatorDataEs } from "../../assets/objects/indicators-page";
import LanguageContext from "../../context/langContext";



export default function IndSideBar({ ind }) {

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);


  useEffect(() => {
    if (lang === "en") {
      setText(IndicatorDataEn);
    } else if (lang === "es") {
      setText(IndicatorDataEs);
    } else {
      setText(IndicatorDataEn);
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
      {listaTitkValues !== null ? (


    <div className="indSidebar">
      <div className="indSidebar__content">
        <div className="indSidebar__content--susc">
        <h3>Contenido</h3>
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
