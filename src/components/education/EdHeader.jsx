import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../assets/img/of_home.jpeg";


export default function EdHeader() {

  return (
    <div className="ed-header">
      <div className="ed-header__container">
        <div className="ed-header__container--text">
          <h2>Explora Recursos Educativos para Transformar tu Trading</h2>
          <p>
            Explora nuestra extensa gama de recursos educativos diseñados para
            transformar tu enfoque en el mundo del trading. Desde conceptos
            fundamentales hasta estrategias avanzadas, nuestro material
            educativo está creado para empoderarte y elevar tu habilidad como
            trader. Sumérgete en este viaje educativo y descubre cómo adquirir
            el conocimiento necesario para alcanzar nuevos niveles de éxito en
            tus operaciones.
          </p>
            <Link to="/buy">Buy</Link>
        </div>
        <div className="ed-header__container--img">
          <img
            src={headerImg}
            alt="indicator"
          ></img>
        </div>
      </div>
    </div>
  );
}
