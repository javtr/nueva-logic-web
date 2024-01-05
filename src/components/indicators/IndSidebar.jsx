import React from "react";
import { ArticlesData } from "../../assets/text/articles-page";
import { useNavigate } from "react-router-dom";
import { IndicatorData } from "../../assets/text/indicators-page";

export default function IndSideBar({ ind }) {

  console.log(ind);

  const obtenerTitkValues = () => {
    const titkValues = [];

    IndicatorData.forEach((elemento) => {
      const titkKeys = Object.keys(elemento).filter((key) =>
        key.startsWith("titk")
      );

      titkKeys.forEach((titkKey) => {
        const [titulo, id] = elemento[titkKey];
        titkValues.push({ titulo, id });
      });
    });

    return titkValues;
  };

  const listaTitkValues = obtenerTitkValues();

  return (
    <div className="indSidebar">
      <div className="indSidebar__content">
        <div className="indSidebar__content--susc">
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
