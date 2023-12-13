import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";

export default function ProductsSec() {
  return (
    <div className="productsSec">
      <div className="productsSec__content">
        <h2>Potencia tu Trading con Nuestros Indicadores</h2>
        <h3>
          Descubre una nueva dimensión en tu estrategia de trading con nuestros
          indicadores avanzados, diseñados para ofrecer precisión y rendimiento.
        </h3>
        <div className="productsSec__content--cont">
          <ProductList />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
