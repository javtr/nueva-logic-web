import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo_foot.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--left">
          <Link className="footer__container--left-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="footer__container--left-links">
            <div className="footer__container--left-links-page">
              <Link to="/education">Education</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/buy">Buy</Link>
            </div>

            <div className="footer__container--left-links-web">
              <Link to="https://logicindicators.com/">Instagram</Link>
              <Link to="https://logicindicators.com/">YouTube</Link>
            </div>
          </div>
        </div>
        <div className="footer__container--right">
          <h5>Join</h5>
          <p>
            Your dashboard is mission control for your creator journey. Get
            instant access.
          </p>
          <div className="footer__container--right-form">
            <div></div>
            <div></div>
          </div>
          <button>Join</button>
        </div>
      </div>

      <div className="footer__text">
        <p>Debido a la facilidad de reproducción y almacenamiento de los productos de software, lamentamos informar que no se realizarán reembolsos de ningún tipo. Todas las transacciones son definitivas y no son elegibles para reembolso.</p>
        <p>Las transacciones relacionadas con futuros y divisas conllevan un riesgo significativo y no son adecuadas para todos los inversores. Existe la posibilidad de que un inversor pierda la totalidad o incluso más de su inversión inicial. El capital de riesgo se refiere a fondos que pueden perderse sin afectar la seguridad financiera o el estilo de vida. Se recomienda utilizar únicamente el capital de riesgo para llevar a cabo operaciones, y solo aquellos con suficiente capital de riesgo deben considerar la posibilidad de participar en estas actividades. Es importante destacar que los resultados pasados no garantizan resultados futuros.</p>
        <p>Los resultados hipotéticos tienen muchas limitaciones inherentes, algunas de las cuales se describen a continuación. No se garantiza que las cuentas obtengan o puedan obtener beneficios o pérdidas similares a los mostrados; de hecho, a menudo existen grandes diferencias entre los resultados hipotéticos y los resultados reales obtenidos posteriormente por un programa de negociación concreto. Una de las limitaciones de los resultados hipotéticos es que, por lo general, se elaboran en retrospectiva. Además, la negociación hipotética no implica riesgo financiero, y ningún registro de negociación hipotética puede dar cuenta completamente del impacto del riesgo financiero de la negociación real. Por ejemplo, la capacidad de soportar pérdidas o de seguir un determinado programa de negociación a pesar de las pérdidas son aspectos importantes que también pueden afectar negativamente a los resultados reales de la negociación. Existen otros muchos factores relacionados con los mercados en general o con la aplicación de cualquier programa de negociación específico que no pueden tenerse plenamente en cuenta en la preparación de los resultados hipotéticos de rendimiento y que pueden afectar negativamente a los resultados de negociación.</p>
      </div>

      <p className="footer__mark">@ 2024 Logic Indicators.</p>
    </div>
  );
}
