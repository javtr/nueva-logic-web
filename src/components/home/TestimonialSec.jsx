import React, { useState, useContext, useEffect } from "react";
import avatar from "../../assets/img/avatar.png";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/home-experiences";

export default function TestimonialSec() {
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
        <div className="testimonialSec">
          <div className="testimonialSec__container">
            <h2 className="testimonialSec__container--h2">
            {text.tit}
            </h2>
            <h3 className="testimonialSec__container--h3">
            {text.sub}
            </h3>
            <div className="testimonialSec__container--content">
              <div className="testimonialSec__container--content-testimonial">
                <p className="testimonialSec__container--content-testimonial-text">
                {text.txt3}

                </p>
                <div>
                  <img src={avatar} alt="avatar"></img>
                  <h4> {text.tit3}</h4>
                </div>
              </div>

              <div className="testimonialSec__container--content-testimonial">
                <p className="testimonialSec__container--content-testimonial-text">
                {text.txt1}
                </p>
                <div>
                  <img src={avatar} alt="avatar"></img>
                  <h4> {text.tit1}</h4>
                </div>
              </div>

              <div className="testimonialSec__container--content-testimonial">
                <p className="testimonialSec__container--content-testimonial-text">
                {text.txt4}

                </p>
                <div>
                  <img src={avatar} alt="avatar"></img>
                  <h4> {text.tit4}</h4>
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
