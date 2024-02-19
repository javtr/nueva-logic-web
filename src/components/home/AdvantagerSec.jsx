import React, { useState, useContext, useEffect } from "react";
import adv1 from "../../assets/img/adv01.png";
import adv2 from "../../assets/img/adv02.png";
import adv3 from "../../assets/img/adv03.png";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/home-advantages";

export default function AdvantagerSec() {
  
  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(textEn);
    } else if (lang === "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
    setIsloading(false);
  }, [lang]);

  return (

    <>
      {!isloading ? (


        <div className="advantages">
          <div className="advantages__content">
            <h2 className="advantages__content--h2">
            {text.tit}
            </h2>
            <h3 className="advantages__content--h3">
            {text.sub}
            </h3>

            <div className="advantages__content--cards">
              <div className="advantages__content--cards-card">
                <div className="advantages__content--cards-card-img">
                  <img src={adv1} alt="patterns" />
                </div>
                <div className="advantages__content--cards-card-content">
                  <h3 className="advantages__content--cards-card-content-title">
                  {text.tit1}
                  </h3>
                  <p className="advantages__content--cards-card-content-parag">
                  {text.txt1}
                  </p>
                </div>
              </div>
              <div className="advantages__content--cards-card">
                <div className="advantages__content--cards-card-img">
                  <img src={adv1} alt="patterns" />
                </div>
                <div className="advantages__content--cards-card-content">
                  <h3 className="advantages__content--cards-card-content-title">
                  {text.tit2}
                  </h3>
                  <p className="advantages__content--cards-card-content-parag">
                  {text.txt2}
                  </p>
                </div>
              </div>
              <div className="advantages__content--cards-card">
                <div className="advantages__content--cards-card-img">
                  <img src={adv2} alt="patterns" />
                </div>
                <div className="advantages__content--cards-card-content">
                  <h3 className="advantages__content--cards-card-content-title">
                  {text.tit3}
                  </h3>
                  <p className="advantages__content--cards-card-content-parag">
                  {text.txt3}
                  </p>
                </div>
              </div>
              <div className="advantages__content--cards-card">
                <div className="advantages__content--cards-card-img">
                  <img src={adv3} alt="patterns" />
                </div>
                <div className="advantages__content--cards-card-content">
                  <h3 className="advantages__content--cards-card-content-title">
                  {text.tit4}
                  </h3>
                  <p className="advantages__content--cards-card-content-parag">
                  {text.txt4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <></>
      )}
    </>

  );
}
