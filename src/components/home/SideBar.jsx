import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import LanguageContext from "../../context/langContext";
import {
  ArticlesDataEn,
  ArticlesDataEs,
} from "../../assets/objects/articles-page2";


import { textEn, textEs } from "../../assets/text/home-sidebar";



export default function SideBar() {
  const navigate = useNavigate();



  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [textSidebar, setTextSidebar] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(ArticlesDataEn);
      setTextSidebar(textEn);
    } else if (lang === "es") {
      setText(ArticlesDataEs);
      setTextSidebar(textEs);
    } else {
      setText(ArticlesDataEn);
      setTextSidebar(textEn);
    }

    setIsloading(false);
  }, [lang]);


  const handleClickBlog = () =>{
    navigate(`/article/${text[0].url}`);
  }


  return (
    <>
      {!isloading ? (
        <>
          {text[0] !== undefined ? (


    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__content--susc">
          <h3>{textSidebar.tit}</h3>
            <a
              href={textSidebar.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {textSidebar.lnk}
            </a>
            <script
              src="https://assets.lemonsqueezy.com/lemon.js"
              defer
            ></script>{" "}
          <p>{textSidebar.sub}</p>
        </div>
        <div className="sidebar__content--blog" onClick={handleClickBlog}>
          <h3>{textSidebar.ti2}</h3>
          <div className="sidebar__content--blog-card">
            <h4>{text[0].titSec}</h4>
            <p>
            {text[0].subSec}
            </p>
          </div>
        </div>
      </div>
    </div>


    ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>

  );
}
