import React from "react";
import { useNavigate } from "react-router-dom";
import { ArticlesData } from "../../assets/objects/articles-page.js";
const images = require.context("../../assets/img/", true);

const ArticleList = () => {
  const navigate = useNavigate();

  return (
    <div className="article">
      <div className="article__container">
        {ArticlesData.map((product, index) => (
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
  );
};

export default ArticleList;
