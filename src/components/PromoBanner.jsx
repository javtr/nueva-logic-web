import React, { useState, useEffect, useCallback } from 'react';
import { FaBolt } from 'react-icons/fa';
import '../sass/_promoBanner.scss';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date('2025-11-30T23:59:59').getTime();
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

  return (
    <div className="promo-banner" style={{ all: 'initial' }}>
      <div className="promo-banner__container">
        <div className="promo-banner__content">
          <span className="promo-banner__text">
            Black Friday Deals <FaBolt className="promo-banner__icon" /> Pre-Sale 50% OFF! 
          </span>
          <div className="promo-banner__countdown">
            <div className="countdown-item">
              <span className="countdown-number">{formatTime(timeLeft.days)}</span>
              <span className="countdown-label">Days</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <span className="countdown-number">{formatTime(timeLeft.hours)}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <span className="countdown-number">{formatTime(timeLeft.minutes)}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <span className="countdown-number">{formatTime(timeLeft.seconds)}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
