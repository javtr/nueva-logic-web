import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticlesData } from "../assets/text/articles-page";
import { ArtGenerator } from "../components/education/ArtGenerator";
import EdSideBar from "../components/education/EdSidebar"

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
          <div className="education-page">
            <div className="education-page__container">
              <div className="education-page__container--blog">
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
              <EdSideBar ind={indId} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
