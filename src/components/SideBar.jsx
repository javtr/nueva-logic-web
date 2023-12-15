import React, { useEffect, useRef } from 'react';
import articlesData from '../assets/text/articles.json';


export default function SideBar() {
  const childRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const childElement = childRef.current;

  //     if (childElement) {
  //       const parentElement = childElement.parentElement;

  //       if (parentElement) {
  //         const parentRect = parentElement.getBoundingClientRect();
  //         const childRect = childElement.getBoundingClientRect();

  //         const maxTop = parentRect.height - childRect.height;

  //         const scrollY = window.scrollY || window.pageYOffset;

  //         if (scrollY > parentRect.top) {
  //           if (scrollY < parentRect.top + maxTop) {
  //             childElement.style.top = `${scrollY - parentRect.top}px`;
  //           } else {
  //             childElement.style.top = `${maxTop}px`;
  //           }
  //         } else {
  //           childElement.style.top = '0';
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);



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
            <h4>{articlesData[0].name}</h4>
            <p>
            {articlesData[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
