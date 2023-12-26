import React, { useEffect, useState } from "react";
import Header from "../components/indicators/Header";
import { BlogGenerator } from "../components/indicators/BlogGenerator";
import { useParams } from "react-router-dom";
import { IndicatorData } from "../assets/text/indicators-page";

export default function Indicator() {
  const params = useParams();
  const ind = params.IndicatorId;

  const [indId, setIndId] = useState(null);

  useEffect(() => {
    setIndId(IndicatorData.findIndex((obj) => obj.url === params.IndicatorId));
  }, []);


  return (
    <>
      {indId !== null ? (
        
        <div>
          <Header />
          <div className="indicator-page">
            <div className="indicator-page__container">
              {Object.keys(IndicatorData[indId]).map((key, index) => {
                return (
                  <BlogGenerator
                    keyJson={key}
                    valueJson={IndicatorData[indId][key]}
                    key={index}
                    i={index}
                  ></BlogGenerator>
                );
              })}
            </div>
          </div>
        </div>

      ) : (
        <></>
      )}
    </>
  );
}
