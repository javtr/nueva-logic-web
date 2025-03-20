import React, { useState, useEffect, useContext } from "react";
import { textEn, textEs } from "../../assets/text/buySuscription.js";
import LanguageContext from "../../context/langContext";

const BuySuscripcion = ({ isYearly, setIsYearly }) => {
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
    } else if (lang === "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);

  const selectedPlans = text?.yearly
    ? isYearly
      ? text.lifetime
      : text.yearly
    : [];

  return (
    <div className="subscription">
      {/* Switch para cambiar entre mensual y anual */}
      {lang === "es" && (
        <div className="subscription__switch-container">
          <div
            className={`subscription__switch-option ${
              !isYearly ? "subscription__switch-option--active" : ""
            }`}
            onClick={() => setIsYearly(false)}
          >
            {lang === "en" ? "Yearly" : "Anual"}
          </div>
          <div
            className={`subscription__switch-option ${
              isYearly ? "subscription__switch-option--active" : ""
            }`}
            onClick={() => setIsYearly(true)}
          >
            {lang === "en" ? "Lifetime" : "Lifetime"}
          </div>
        </div>
      )}

      {/* Renderización de los planes */}
      <div className="subscription__plans">
        {selectedPlans.map((plan, index) => (
          <div key={index} className="subscription__plans-card">
            {/* 🔥 Nueva capa para el SVG */}
            <div className="subscription__card-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="subscription__card-svg"
              >
                <defs>
                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                  >
                    {/* ✅ Ahora tomamos los colores directamente desde `plan.color1` y `plan.color2` */}
                    <stop offset="0%" stopColor={plan.color1} />
                    <stop offset="100%" stopColor={plan.color2} />
                  </linearGradient>
                </defs>

                <path
                  d="M 0 100 C 34 29 83 42 100 60 L 100 0 L 0 0 Z"
                  fill={`url(#gradient-${index})`} // ✅ Ahora está correctamente referenciado
                />
              </svg>
            </div>

            {/* CONTENIDO DE LA TARJETA */}

            <div className="subscription__plans-card--price">
              <div
                className="subscription__plans-card--price--circle"
                style={{ color: plan.color1 }}
              >
                ${plan.price}
                <div className="subscription__plans-card--price--details">
                  <h4 className="subscription__plans-card--price--details--price2">
                    ${plan.price2}
                  </h4>
                </div>
              </div>
            </div>
            <h2 className="subscription__plans-card--name">{plan.name}</h2>
            <h5 className="subscription__plans-card--subt">{plan.pricesub}</h5>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span
                    className={`feature-icon ${
                      feature.icon === "✖"
                        ? "feature-icon--error"
                        : "feature-icon--success"
                    }`}
                  >
                    {feature.icon}
                  </span>
                  <span className="feature-text">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="subscription__plans-card--actions">
              <a href={plan.url} target="_blank" rel="noopener noreferrer">
                <button
                  className="subscription__plans-card--button"
                  style={{ borderColor: plan.color1 }}
                >
                  {plan.button}
                </button>
              </a>
              {plan.payments && (
                <div className="subscription__plans-card--payments">
                  <hr></hr>
                  <p className="subscription__plans-card--payments-subt">
                    {plan.paymentstext}
                  </p>
                  <a
                    href={plan.urlpayments}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="subscription__plans-card--payments-button">
                      {plan.payments}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySuscripcion;
