import React, { useContext } from 'react';
import { FaBolt } from 'react-icons/fa';
import LanguageContext from '../context/langContext';
import '../sass/_promoBanner.scss';

const PromoBanner = () => {
  const { lang } = useContext(LanguageContext);

  const translations = {
    en: {
      mainTitle: 'Black Friday',
      mainSubtitle: '30% DISCOUNT on annual and lifetime packs',
      codeText: 'Use code: BLACK30'
    },
    es: {
      mainTitle: 'Black Friday',
      mainSubtitle: '30% DE DESCUENTO en packs anuales y lifetime',
      codeText: 'Usa el código: BLACK30'
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <div className="promo-banners">
      <div className="promo-banner promo-banner--primary" style={{ all: 'initial' }}>
        <div className="promo-banner__container">
          <div className="promo-banner__content promo-banner__content--primary">
            <span className="promo-banner__text">
              {t.mainTitle} <FaBolt className="promo-banner__icon" /> {t.mainSubtitle}
            </span>
            <span className="promo-banner__extra">{t.codeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
