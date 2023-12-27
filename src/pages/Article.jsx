import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticlesData } from "../assets/text/articles-page";
import { ArtGenerator } from "../components/education/ArtGenerator";


export default function Article() {
  const params = useParams();

  const [indId, setIndId] = useState(null);

  useEffect(() => {
    setIndId(ArticlesData.findIndex((obj) => obj.url === params.articleId));
  }, [params.articleId]);


  return (
    <>
      {indId !== null ? (
        
        <div>
          <div className="indicator-page">
            <div className="indicator-page__container">
              {Object.keys(ArticlesData[indId]).map((key, index) => {
                return (
                  <ArtGenerator
                    keyJson={key}
                    valueJson={ArticlesData[indId][key]}
                    key={index}
                    i={index}
                  ></ArtGenerator>
                );
              })}
            </div>
          </div>

        </div>

      ) : (
        <></>
      )}
    </>
  );
}
