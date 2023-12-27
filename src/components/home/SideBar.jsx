import React from 'react';
import {ArticlesData} from '../../assets/text/articles-page';


export default function SideBar() {

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__content--susc">
          <h3>¡Mantente al Día!</h3>
          <button>
            <a
              href="https://logic-indicators.lemonsqueezy.com/checkout/buy/8cb9f37d-f138-44de-aff5-9cbe8564f71e?embed=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suscribirse
            </a>
            <script
              src="https://assets.lemonsqueezy.com/lemon.js"
              defer
            ></script>{" "}
          </button>
          <p>Recibe contenido ,actualizaciones en tu correo. Inscríbete.</p>
        </div>
        <div className="sidebar__content--blog">
          <h3>Aprende</h3>
          <div className="sidebar__content--blog-card">
            <h4>{ArticlesData[0].titSec}</h4>
            <p>
            {ArticlesData[0].subSec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
