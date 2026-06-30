import React, { useContext } from 'react';
import { FaTree } from 'react-icons/fa';
import LanguageContext from '../context/langContext';
import '../sass/_promoBanner.scss';

const PromoBanner = () => {
  const { lang } = useContext(LanguageContext);

  const translations = {
    en: {
      mainTitle: 'Holiday Promotion',
      mainSubtitle: 'Special discount on all packs and indicators',
      codeText: 'Use code: NAVIDAD12',
    },
    es: {
      mainTitle: 'Promoción Navideña',
      mainSubtitle: '¡Descuento especial! en todos los packs e indicadores',
      codeText: 'Usa el código: NAVIDAD12',
    },
  };

  const t = translations[lang] || translations.en;

  return (
    <div className="promo-banners">
      <div className="promo-banner promo-banner--primary" style={{ all: 'initial' }}>
        <div className="promo-banner__container">
          <div className="promo-banner__content promo-banner__content--primary">
            <span className="promo-banner__text">
              {t.mainTitle} <FaTree className="promo-banner__icon" /> {t.mainSubtitle}
            </span>
            <span className="promo-banner__extra promo-banner__extra--code">{t.codeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
