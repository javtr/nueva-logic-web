import React from "react";
import { ArticlesData } from "../../assets/objects/articles-page";
import { useNavigate } from "react-router-dom";
import { IndicatorData } from "../../assets/objects/indicators-page";

export default function EdSideBar({ ind }) {

  console.log(ind);

  const obtenerTitkValues = () => {

    const titkValues = [];

    const titkKeys = Object.keys(ArticlesData[ind]).filter((key) =>
    key.startsWith("titk")
  );
  
  
  titkKeys.forEach((titkKey) => {
    const [titulo, id] = ArticlesData[ind][titkKey];
    titkValues.push({ titulo, id });
  });

    return titkValues;
  };

  const listaTitkValues = obtenerTitkValues();

  return (
    <div className="edSidebar">
      <div className="edSidebar__content">
        <div className="edSidebar__content--susc">
        <h3>Contenido</h3>
          <ul>
            {listaTitkValues.map(({ titulo, id }, index) => (
              <li key={index}>
                <a href={`#${id}`}>{titulo}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
