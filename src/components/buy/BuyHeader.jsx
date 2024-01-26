import React from "react";
import ProductsData from "../../assets/objects/products";

export default function BuyHeader() {
  const images = require.context("../../assets/img/", true);

  return (
    <div className="BuyHeader">
      <div className="BuyHeader__container">
        <div className="BuyHeader__container--card">
          <div className="BuyHeader__container--card-img">
            <img src={images(ProductsData[0].img01)} alt="product"></img>
          </div>
          <div className="BuyHeader__container--card-content">
            <div className="BuyHeader__container--card-content-left">
              <h4>{ProductsData[0].product}</h4>
              <h3><span>$</span>{ProductsData[0].price}<span> lifetime</span></h3>
              <p>{ProductsData[0].features.product01}</p>
              <p>{ProductsData[0].features.product02}</p>
              <p>{ProductsData[0].features.product03}</p>
            </div>
            <div className="BuyHeader__container--card-content-right">
              <p>{ProductsData[0].description}</p>
              <p>{ProductsData[0].advantages.adv01}</p>
              <p>{ProductsData[0].advantages.adv02}</p>
              <p>{ProductsData[0].advantages.adv03}</p>
              <p>{ProductsData[0].advantages.adv04}</p>
              <p>{ProductsData[0].advantages.adv05}</p>
              <p>{ProductsData[0].advantages.adv06}</p>
            </div>
          </div>
            <a className="BuyHeader__container--card-button" href={ProductsData[0].buyLink} target="_blank" rel="noopener noreferrer">Comprar</a>
        </div>
      </div>
    </div>
  );
}
