import React, { useEffect, useState, useContext } from "react";
import Header from "../components/indicators/Header";
import { BlogGenerator } from "../components/indicators/BlogGenerator";
import { useParams } from "react-router-dom";
import IndSideBar from "../components/indicators/IndSidebar";

import { IndicatorDataEn, IndicatorDataEs } from "../assets/objects/indicators-page";
import LanguageContext from "../context/langContext";



export default function Indicator() {
  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const params = useParams();
  const [indId, setIndId] = useState(null);


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

        <div>
          <Header />

          <div className="indicator-page">
            <div className="indicator-page__container">
              <div className="indicator-page__container--blog">


                {Object.keys(text[indId]).map((key, index) => {
                  return (
                    <BlogGenerator
                      keyJson={key}
                      valueJson={text[indId][key]}
                      key={index}
                      i={index}
                    ></BlogGenerator>
                  );
                })}


              </div>
              <IndSideBar ind={indId} />
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
