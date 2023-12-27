import React, { useEffect, useState } from "react";
import { IndicatorData } from "../../assets/text/indicators-page";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const images = require.context("../../assets/img/", true);
  const params = useParams();

  const [indId, setIndId] = useState(null);

  useEffect(() => {
    setIndId(IndicatorData.findIndex((obj) => obj.url === params.IndicatorId));
  }, [params.IndicatorId]);

  return (
    <>
      {indId !== null ? (
        <div className="ind-header">
          <div className="ind-header__container">
            <div className="ind-header__container--text">
              <h2>{IndicatorData[indId].titSec}</h2>
              <p>{IndicatorData[indId].subSec}</p>
              <button>
                <Link to="/buy">Buy</Link>
              </button>
            </div>
            <div className="ind-header__container--img">
              <img src={images(IndicatorData[indId].img01Sec)} alt="indicator"></img>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
