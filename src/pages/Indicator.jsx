import React, { useEffect, useState, useContext } from "react";
import Header from "../components/indicators/Header";
import { BlogGenerator } from "../components/indicators/BlogGenerator";
import { useParams } from "react-router-dom";
import IndSideBar from "../components/indicators/IndSidebar";
import { SeoDataEs, SeoDataEn } from "../assets/objects/SEO_data";


import { IndicatorDataEn, IndicatorDataEs } from "../assets/objects/indicators-page";
import LanguageContext from "../context/langContext";

import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Indicator() {
  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [seo, setSeo] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const params = useParams();
  const [indId, setIndId] = useState(null);


  useEffect(() => {
    setIndId(text.findIndex((obj) => obj.url === params.IndicatorId));
  }, [text,params.IndicatorId]);


  useEffect(() => {
    if (lang === "en") {
      setText(IndicatorDataEn);
      setSeo(SeoDataEn);
    } else if (lang === "es") {
      setText(IndicatorDataEs);
      setSeo(SeoDataEs);
    } else {
      setText(IndicatorDataEn);
      setSeo(SeoDataEn);
    }

    setIsloading(false);
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  return (
    <HelmetProvider>
    <>
      {!isloading ? (

    <>
          <Helmet>
            <title>{seo[1].title}</title>
            <meta name="description" content={seo[1].og_description} />
            <meta name="keywords" content={seo[1].keywords} />
            <link rel="canonical" href={seo[1].canonical} />

            <meta property="og:title" content={seo[1].og_title} />
            <meta property="og:description" content={seo[1].og_description} />
            <meta property="og:image" content={seo[1].og_image} />
            <meta property="og:url" content={seo[1].og_url} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo[1].og_title} />
            <meta name="twitter:description" content={seo[1].og_description} />
            <meta name="twitter:image" content={seo[1].og_image} />

            <link rel="icon" href="https://www.logicindicators.com/logic.ico" />
          </Helmet>    

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
        
      )
      
      }

    </>  
    </HelmetProvider>

  );
}
