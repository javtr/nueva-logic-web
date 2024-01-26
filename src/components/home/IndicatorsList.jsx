import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IndicatorDataEn, IndicatorDataEs } from "../../assets/objects/indicators-page";
import LanguageContext from "../../context/langContext";


const images = require.context("../../assets/img/", true);



const IndicatorsList = () => {
  const navigate = useNavigate();

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


  return (

    <>
      {!isloading ? (

    <div className="indicatorlist">
      <div className="indicatorlist__content">

        {text.map((indicator,index) => (
          <div
            key={index}
            className="indicatorlist__content--card"
            onClick={() => navigate(`/indicator/${indicator.url}`)}
          >
            <div className="indicatorlist__content--card-img">
              <img src={images(indicator.img01Sec)} alt="Order flow"></img>
            </div>

            <div className="indicatorlist__content--card-content">
              <h3>{indicator.titSec}</h3>
              <p>{indicator.subSec}</p>
            </div>

          </div>
        ))}
      </div>
    </div>

    ) : (
        <></>
      )}
    </>  
      
  );
};

export default IndicatorsList;
