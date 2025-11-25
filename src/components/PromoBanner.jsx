import React, { useContext, useState, useEffect, useCallback } from 'react';
import { FaBolt } from 'react-icons/fa';
import LanguageContext from '../context/langContext';
import '../sass/_promoBanner.scss';

const PromoBanner = () => {
  const { lang } = useContext(LanguageContext);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date('2025-11-28T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return null;
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
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

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const translations = {
    en: {
      mainTitle: 'Black Friday',
      mainSubtitle: '30% DISCOUNT on annual and lifetime packs',
      codeText: 'Use code: BLACK30',
      countdownPrefix: 'REMAINING:',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    es: {
      mainTitle: 'Black Friday',
      mainSubtitle: '30% DE DESCUENTO en packs anuales y lifetime',
      codeText: 'Usa el código: BLACK30',
      countdownPrefix: 'QUEDAN:',
      days: 'Días',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
    },
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
            <div className="promo-banner__countdown-wrapper">
              <div className="promo-banner__countdown">
                <span className="promo-banner__countdown-intro">{t.countdownPrefix}</span>
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
              <span className="promo-banner__extra promo-banner__extra--code">{t.codeText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
