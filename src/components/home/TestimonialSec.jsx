import React, { useState, useContext, useEffect } from "react";
import avatar1 from "../../assets/img/testimonials/test_04.png";
import avatar2 from "../../assets/img/testimonials/test_03.png";
import avatar3 from "../../assets/img/testimonials/test_01.png";

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
                  <img src={avatar1} alt="avatar"></img>
                  <h4> {text.tit3}</h4>
                </div>
              </div>

              <div className="testimonialSec__container--content-testimonial">
                <p className="testimonialSec__container--content-testimonial-text">
                {text.txt1}
                </p>
                <div>
                  <img src={avatar2} alt="avatar"></img>
                  <h4> {text.tit1}</h4>
                </div>
              </div>

              <div className="testimonialSec__container--content-testimonial">
                <p className="testimonialSec__container--content-testimonial-text">
                {text.txt4}

                </p>
                <div>
                  <img src={avatar3} alt="avatar"></img>
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
