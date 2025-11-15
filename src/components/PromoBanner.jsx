import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FaBolt } from 'react-icons/fa';
import LanguageContext from '../context/langContext';
import '../sass/_promoBanner.scss';

const PromoBanner = () => {
  const { lang } = useContext(LanguageContext);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date('2025-11-23T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return null;
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(timerId);
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [calculateTimeLeft]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const translations = {
    en: {
      preTitle: 'Pre-Black Friday',
      preSubtitle: '20% OFF on individual tools',
      preSuffix: 'until Nov 22',
      mainTitle: 'Black Friday',
      mainSubtitle: '30% OFF on annual & lifetime packs',
      countdownIntro: 'Starts in',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    },
    es: {
      preTitle: 'Pre-Black Friday',
      preSubtitle: "20% DE DESCUENTO en herramientas individuales -",
      preSuffix: 'Hasta Nov 22',
      mainTitle: 'Black Friday',
      mainSubtitle: '30% DE DESCUENTO en packs anuales y lifetime',
      countdownIntro: 'Inicia en',
      days: 'Días',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <div className="promo-banners">
      <div className="promo-banner promo-banner--green" style={{ all: 'initial' }}>
        <div className="promo-banner__container">
          <div className="promo-banner__content promo-banner__content--single">
            <span className="promo-banner__text">
              {t.preTitle} <FaBolt className="promo-banner__icon" /> {t.preSubtitle}
            </span>
            <span className="promo-banner__extra">{t.preSuffix}</span>
          </div>
        </div>
      </div>
      <div className="promo-banner promo-banner--primary" style={{ all: 'initial' }}>
        <div className="promo-banner__container">
          <div className="promo-banner__content promo-banner__content--primary">
            <span className="promo-banner__text">
              {t.mainTitle} <FaBolt className="promo-banner__icon" /> {t.mainSubtitle}
            </span>
            <div className="promo-banner__countdown-wrapper">
              <span className="promo-banner__countdown-intro">{t.countdownIntro}</span>
              <div className="promo-banner__countdown">
                <div className="countdown-item">
                  <span className="countdown-number">{formatTime(timeLeft.days)}</span>
                  <span className="countdown-label">{t.days}</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{formatTime(timeLeft.hours)}</span>
                  <span className="countdown-label">{t.hours}</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{formatTime(timeLeft.minutes)}</span>
                  <span className="countdown-label">{t.minutes}</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-item">
                  <span className="countdown-number">{formatTime(timeLeft.seconds)}</span>
                  <span className="countdown-label">{t.seconds}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
