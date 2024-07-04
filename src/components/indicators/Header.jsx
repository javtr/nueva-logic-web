import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { IndicatorDataEn, IndicatorDataEs } from "../../assets/objects/indicators-page";
import LanguageContext from "../../context/langContext";



export default function Header() {
  const images = require.context("../../assets/img/", true);
  const params = useParams();

  const [indId, setIndId] = useState(null);


  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);


  useEffect(() => {
    setIndId(text.findIndex((obj) => obj.url === params.IndicatorId));
  }, [text,params.IndicatorId]);



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



  return (

    <>
      {!isloading ? (



    <>
      {text[indId] !== undefined ? (

        <div className="ind-header">
          <div className="ind-header__container">
            <div className="ind-header__container--text">
              <h2>{text[indId].titSec}</h2>
              <p>{text[indId].subSec}</p>
                <Link to="/buy">{lang === "en"? "Buy":"Comprar"}</Link>
            </div>
            <div className="ind-header__container--img">
              <img src={images(text[indId].img02Sec)} alt="indicator"></img>
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
