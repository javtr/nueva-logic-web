import React, { useState, useEffect, useContext } from 'react';
import { textEn, textEs } from "../../assets/text/blackFriday.js";
import LanguageContext from "../../context/langContext.js";


function BlackFridayCountdown() {
    const { lang } = useContext(LanguageContext);
    const [text, setText] = useState(textEn);
  

    useEffect(() => {
      if (lang == "en") {
        setText(textEn);
      } else if (lang == "es") {
        setText(textEs);
      } else {
        setText(textEn);
      }
    }, [lang]);
  
  


  const calculateTimeLeft = () => {
    const targetDate = new Date('December 3, 2024 0:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="black-friday">
      <h1 className="title">BLACK FRIDAY</h1>
      <div className="countdown">
      <div className="time-box quedan">
          <span role="img" aria-label="alarm">⏰</span> {text.txt_01}
        </div>
        <div className="time-container">
          <div className="time-box">
            <span className="time-value">{timeLeft.days || '00'}</span>
            <span className="time-label">{text.txt_02}</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours || '00'}</span>
            <span className="time-label">{text.txt_03}</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes || '00'}</span>
            <span className="time-label">{text.txt_04}</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds || '00'}</span>
            <span className="time-label">{text.txt_05}</span>
          </div>
          </div>
      </div>
      <div className="coupon">
        <div className="coupon-box">
          <p>20% OFF</p>
          <p>{text.txt_06} </p>
          <p><strong>BF20</strong></p>
        </div>
      </div>
      <div className="validity">
      {text.txt_07}
      </div>
    </div>
  );
}

export default BlackFridayCountdown;

