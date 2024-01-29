import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArtGenerator } from "../components/education/ArtGenerator";
import EdSideBar from "../components/education/EdSidebar"

import LanguageContext from "../context/langContext";
import { ArticlesDataEn, ArticlesDataEs } from "../assets/objects/articles-page2";


export default function Article() {
  const params = useParams();
  const [indId, setIndId] = useState(null);


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

  
  useEffect(() => {
    setIndId(text.findIndex((obj) => obj.url === params.articleId));
  }, [text, params.articleId]);

  return (

    <>
      {!isloading ? (

        <>
      {text[indId] !== undefined ? (




    <>
      {indId !== null ? (
        <div>
          <div className="education-page">
            <div className="education-page__container">
              <div className="education-page__container--blog">
                {Object.keys(text[indId]).map((key, index) => {
                  return (
                    <ArtGenerator
                      keyJson={key}
                      valueJson={text[indId][key]}
                      key={index}
                      i={index}
                    ></ArtGenerator>
                  );
                })}
              </div>
              <EdSideBar ind={indId} />
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

    ) : (
        <></>
      )}
    </>


  );
}
