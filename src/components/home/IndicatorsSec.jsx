import React from "react";
import IndicatorsList from "./IndicatorsList";
import SideBar from "./SideBar";

export default function IndicatorsSec() {
  return (
    <div className="indicatorsSec">
      <div className="indicatorsSec__content">
        <h2 className="indicatorsSec__content--h2" >Potencia tu Trading con Nuestros Indicadores</h2>
        <h3  className="indicatorsSec__content--h3">
          Descubre una nueva dimensión en tu estrategia de trading con nuestros
          indicadores avanzados, diseñados para ofrecer precisión y rendimiento.
        </h3>
        <div className="indicatorsSec__content--cont">
          <IndicatorsList />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
