import React, { useContext, useState } from "react";
import { freeIndicatorsContent } from "../assets/objects/freeIndicators";
import LanguageContext from "../context/langContext";
import "../sass/_freeIndicators.scss";

const FreeIndicators = () => {
  const { lang } = useContext(LanguageContext);
  const content = freeIndicatorsContent[lang] || freeIndicatorsContent['en'];

  const [selectedIndicator, setSelectedIndicator] = useState(0);

  return (
    <div className="free-indicators">
      <div className="free-indicators__header">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>

      <div className="free-indicators__buttons">
        {content.indicators.map((indicator, index) => (
          <button
            key={index}
            className={selectedIndicator === index ? "active" : ""}
            onClick={() => setSelectedIndicator(index)}
          >
            {indicator.name}
          </button>
        ))}
      </div>

      <div className="free-indicators__indicator">
        <img
          src={content.indicators[selectedIndicator].image}
          alt={content.indicators[selectedIndicator].name}
        />
        <div className="free-indicators__indicator__details">
          <h2>{content.indicators[selectedIndicator].name}</h2>
          {content.indicators[selectedIndicator].description && (
            <p className="description">{content.indicators[selectedIndicator].description}</p>
          )}
          <ul>
            {content.indicators[selectedIndicator].features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <button>{content.indicators[selectedIndicator].downloadText}</button>
        </div>
      </div>
    </div>
  );
};

export default FreeIndicators;