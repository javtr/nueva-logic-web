import React from "react";
import ProductsData from "../../assets/objects/products";
import { Link } from "react-router-dom";


export default function BuyProductos() {
  const images = require.context("../../assets/img/", true);

  return (
    <div className="BuyProducts">
      <div className="BuyProducts__container">
        {ProductsData.map((product, index) =>
          index > 0 ? (
            <div className="BuyProducts__container--card">
              <div className="BuyProducts__container--card-content">
                <div className="BuyProducts__container--card-content-left">
                  <div className="BuyProducts__container--card-content-left-img">
                    <img src={images(product.img01)} alt="product"></img>
                    <Link to={`/indicator/${product.indLink}`} target="_blank" rel="noopener noreferrer">Leer más</Link>
                  </div>

                  <h4>{product.product}</h4>
                  <h3>
                    <span>$</span>
                    {product.price}
                    <span> lifetime</span>
                  </h3>
                </div>
                <div className="BuyProducts__container--card-content-right">
                  <p>{product.description}</p>
                  <p>{product.advantages.adv01}</p>
                  <p>{product.advantages.adv02}</p>
                  <p>{product.advantages.adv03}</p>
                  <p>{product.advantages.adv04}</p>

                  <a
                    className="BuyProducts__container--card-content-right-button"
                    href={product.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}
