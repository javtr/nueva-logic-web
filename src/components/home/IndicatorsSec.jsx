import React, { useState, useContext, useEffect } from "react";
import IndicatorsList from "./IndicatorsList";
import SideBar from "./SideBar";

import LanguageContext from "../../context/langContext";
import { textEn, textEs } from "../../assets/text/home-indicators";

export default function IndicatorsSec() {

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

        <div className="indicatorsSec">
          <div className="indicatorsSec__content">
            <h2 className="indicatorsSec__content--h2" id="indicators">
              {text.tit}
            </h2>
            <h3 className="indicatorsSec__content--h3">{text.sub}</h3>
            <div className="indicatorsSec__content--cont">
              <IndicatorsList />
              <SideBar />
            </div>
          </div>
        </div>

      ) : (
        <></>
      )}
    </>
    
  );
}
