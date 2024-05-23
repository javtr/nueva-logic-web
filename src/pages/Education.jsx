import React, { useEffect, useState, useContext } from "react";
import ArticleList from "../components/education/ArticleList";
import EdHeader from "../components/education/EdHeader";
import { SeoDataEs, SeoDataEn } from "../assets/objects/SEO_data";
import {
  IndicatorDataEn,
  IndicatorDataEs,
} from "../assets/objects/indicators-page";
import LanguageContext from "../context/langContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Education() {
  const { lang } = useContext(LanguageContext);
  const [seo, setSeo] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (lang === "en") {
      setSeo(SeoDataEn);
    } else if (lang === "es") {
      setSeo(SeoDataEs);
    } else {
      setSeo(SeoDataEn);
    }

    setIsloading(false);
  }, [lang]);

  return (
    <HelmetProvider>
      <>
        {!isloading ? (
          <div className="education">
            <Helmet>
              <title>{seo[2].title}</title>
              <meta name="description" content={seo[2].og_description} />
              <meta name="keywords" content={seo[2].keywords} />
              <link rel="canonical" href={seo[2].canonical} />

              <meta property="og:title" content={seo[2].og_title} />
              <meta property="og:description" content={seo[2].og_description} />
              <meta property="og:image" content={seo[2].og_image} />
              <meta property="og:url" content={seo[2].og_url} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={seo[2].og_title} />
              <meta
                name="twitter:description"
                content={seo[2].og_description}
              />
              <meta name="twitter:image" content={seo[2].og_image} />

              <link
                rel="icon"
                href="https://www.logicindicators.com/logic.ico"
              />
            </Helmet>

            <EdHeader />
            <ArticleList />
          </div>
        ) : (
          <></>
        )}
      </>
    </HelmetProvider>
  );
}
