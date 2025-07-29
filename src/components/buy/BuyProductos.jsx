import React, { useState, useContext, useEffect } from "react";
import ProductsData from "../../assets/objects/products";
import { Link } from "react-router-dom";

import LanguageContext from "../../context/langContext";
import { ProductsDataEn, ProductsDataEs } from "../../assets/objects/products";

export default function BuyProductos() {
  const images = require.context("../../assets/img/", true);

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(ProductsDataEn);
    } else if (lang === "es") {
      setText(ProductsDataEs);
    } else {
      setText(ProductsDataEn);
    }

    setIsloading(false);
  }, [lang]);

  return (
    <>
      {!isloading ? (
        <>
          {text !== undefined ? (
            <div className="BuyProducts">
              <div className="BuyProducts__container">
                {text.map((product, index) =>
                  index > 0 ? (
                    <div className="BuyProducts__container--card">
                      <div className="BuyProducts__container--card-content">
                        <div className="BuyProducts__container--card-content-left">
                          <div className="BuyProducts__container--card-content-left-img">
                            <img
                              src={images(product.img01)}
                              alt="product"
                            ></img>
                            <Link
                              to={`/indicator/${product.indLink}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {product.txt01}
                            </Link>
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
                            {lang === "en"? "Buy":"Comprar"}
                          </a>


                          <div className="BuyProducts__container--card-content-right--purchase">
                            <div className="BuyProducts__container--card-content-right--purchase-text">{lang === "en"? "By clicking 'Buy', you accept our":"Al hacer clic en 'Comprar', aceptas nuestras"}</div>
                            <Link className="BuyProducts__container--card-content-right--purchase-footer__policies" to="/policies">{lang === "en"? "Sales and Return Policies.":"Políticas de venta y devolución."}</Link>
                          </div>


                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                )}
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
