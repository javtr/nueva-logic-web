import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LanguageContext from "../../context/langContext";
import { ArticlesDataEn, ArticlesDataEs } from "../../assets/objects/articles-page2.js";


const images = require.context("../../assets/img/", true);



const ArticleList = () => {
  const navigate = useNavigate();

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


  return (

    <>
      {!isloading ? (

        <>
      {text !== undefined ? (


    <div className="article">
      <div className="article__container">
        {text.map((product, index) => (
          <div
            className="article__container--card"
            key={index}
            onClick={() => navigate(`/article/${product.url}`)}
          >
            <div className="article__container--card-img">
              <img src={images(product.img01Sec)} alt="article"></img>
            </div>

            <div className="article__container--card-content">
              <h3>{product.titSec}</h3>
              <p>{product.subSec}</p>
            </div>
          </div>
        ))}
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
};

export default ArticleList;
