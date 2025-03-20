import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../context/langContext";
import { ProductsDataEn, ProductsDataEs } from "../../assets/objects/products";

export default function BuyHeader() {
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
          {text[0] !== undefined ? (


            <div className="BuyHeader">
              <div className="BuyHeader__container">
                <div className="BuyHeader__container--card">
                  <div className="BuyHeader__container--card-img">
                    <img
                      src={images(text[0].img01)}
                      alt="product"
                    ></img>
                  </div>
                  <div className="BuyHeader__container--card-content">
                    <div className="BuyHeader__container--card-content-left">
                      <h4>{text[0].product}</h4>
                      <h3>
                        <span>$</span>
                        {text[0].price}
                        <span> lifetime</span>
                      </h3>
                      <p>{text[0].features.product01}</p>
                      <p>{text[0].features.product02}</p>
                      <p>{text[0].features.product03}</p>
                    </div>
                    <div className="BuyHeader__container--card-content-right">
                      <p>{text[0].description}</p>
                      <p>{text[0].advantages.adv01}</p>
                      <p>{text[0].advantages.adv02}</p>
                      <p>{text[0].advantages.adv03}</p>
                      <p>{text[0].advantages.adv04}</p>
                      <p>{text[0].advantages.adv05}</p>
                      <p>{text[0].advantages.adv06}</p>
                    </div>
                  </div>
                  <a
                    className="BuyHeader__container--card-button"
                    href={text[0].buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                            {lang === "en"? "Buy":"Comprar"}
                  </a>

                  <div className="BuyHeader__container--card--purchase">
                    <div className="BuyHeader__container--card--purchase-text">{lang === "en"? "By clicking 'Buy', you accept our":"Al hacer clic en 'Comprar', aceptas nuestras"}</div>
                    <Link className="BuyHeader__container--card--purchase-footer__policies" to="/policies">{lang === "en"? "Sales and Return Policies.":"Políticas de venta y devolución."}</Link>
                  </div>


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
