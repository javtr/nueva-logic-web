import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content--text">
          Header1
          <h1>
            Eleva tu Trading a Nuevos Niveles con Nuestros Indicadores Avanzados
            para NinjaTrader 8.
          </h1>
          <h2>Descubre el Poder del Trading Profesional.</h2>
          <div className="header__content--text-testimonials">
            <div className="header__content--text-testimonials-img"></div>
            <div className="header__content--text-testimonials-txt">
              <p>
                Los indicadores de Logic Indicators han transformado mi carrera
                como trader. La precisión y profundidad de los datos de volumen
                y delta son incomparables. Como trader avanzada, siempre busco
                herramientas que ofrezcan una ventaja real, y estos indicadores
                superan mis expectativas.
              </p>
              <p>María Gómez / Trader Profesional</p>
            </div>
          </div>
        </div>
        <div className="header__content--img">Header2</div>
      </div>
    </div>
  );
}
