import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { freeIndicatorsContent } from "../assets/objects/freeIndicators";
import LanguageContext from "../context/langContext";
import "../sass/_freeIndicators.scss";

const IndicatorDetails = ({ indicator }) => (
  <div className="free-indicators__indicator">
    <img src={indicator.image} alt={indicator.name} />
    <div className="free-indicators__indicator__details">
      <h2>{indicator.name}</h2>
      {indicator.description && <p className="description">{indicator.description}</p>}
      <ul>
        {indicator.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      {indicator.downloadUrl ? (
        <a
          className="download-btn"
          href={indicator.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {indicator.downloadText}
        </a>
      ) : (
        <button>{indicator.downloadText}</button>
      )}
    </div>
  </div>
);

const FreeIndicators = () => {
  const { lang } = useContext(LanguageContext);
  const content = freeIndicatorsContent[lang] || freeIndicatorsContent["en"];
  const { indicatorPath } = useParams();

  const selectedIndicator =
    content.indicators.find((ind) => ind.path === indicatorPath) ||
    content.indicators[0];

  return (
    <div className="free-indicators">
      <div className="free-indicators__header">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>

      <div className="free-indicators__buttons">
        {content.indicators.map((indicator) => (
          <Link
            key={indicator.path}
            to={`/free/${indicator.path}`}
            className={selectedIndicator.path === indicator.path ? "active" : ""}
          >
            {indicator.name}
          </Link>
        ))}
      </div>

      <IndicatorDetails indicator={selectedIndicator} />
    </div>
  );
};

export default FreeIndicators;