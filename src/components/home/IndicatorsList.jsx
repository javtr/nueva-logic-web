import React from "react";
import { useNavigate } from "react-router-dom";
import { IndicatorData } from "../../assets/text/indicators-page";
const images = require.context("../../assets/img/", true);


const IndicatorsList = () => {
  const navigate = useNavigate();

  return (
    <div className="indicatorlist">
      <div className="indicatorlist__content">

        {IndicatorData.map((indicator,index) => (
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
  );
};

export default IndicatorsList;
