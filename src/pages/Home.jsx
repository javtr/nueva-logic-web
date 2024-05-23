import React, { useState, useContext, useEffect } from "react";
import Header from "../components/home/Header";
import IndicatorsSec from "../components/home/IndicatorsSec";
import AdvantagerSec from "../components/home/AdvantagerSec";
import TestimonialSec from "../components/home/TestimonialSec";
import LogoSec from "../components/home/LogoSec";
import { useLocation } from "react-router-dom";
import { SeoDataEs, SeoDataEn } from "../assets/objects/SEO_data";
import LanguageContext from "../context/langContext";

import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
  const { hash } = useLocation();

  const { lang } = useContext(LanguageContext);
  const [text, setText] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setText(SeoDataEn);
    } else if (lang === "es") {
      setText(SeoDataEs);
    } else {
      setText(SeoDataEn);
    }

    setIsloading(false);
  }, [lang]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
    <>
      {!isloading ? (
        <div className="home">
          <Helmet>
            <title>{text[0].title}</title>
            <meta name="description" content={text[0].og_description} />
            <meta name="keywords" content={text[0].keywords} />
            <link rel="canonical" href={text[0].canonical} />

            <meta property="og:title" content={text[0].og_title} />
            <meta property="og:description" content={text[0].og_description} />
            <meta property="og:image" content={text[0].og_image} />
            <meta property="og:url" content={text[0].og_url} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={text[0].og_title} />
            <meta name="twitter:description" content={text[0].og_description} />
            <meta name="twitter:image" content={text[0].og_image} />

            <link rel="icon" href="https://www.logicindicators.com/logic.ico" />
          </Helmet>

          <div className="home__content">
            <Header />
            <IndicatorsSec />
            <AdvantagerSec />
            <TestimonialSec />
            <LogoSec />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
    </HelmetProvider>
  );
}
