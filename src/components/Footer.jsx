import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo_foot.png"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--left">
          <Link className="footer__container--left-logo" to="/">
            <img src={logo} alt="Logo" />
          </Link>   
          <div className="footer__container--left-links">

            <div  className="footer__container--left-links-page">
              <Link to="/education">Education</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/buy">Buy</Link>
            </div>

            <div className="footer__container--left-links-web">
            <Link to="https://logicindicators.com/">Instagram</Link>
            <Link to="https://logicindicators.com/">YouTube</Link>
            </div>

          </div>
          <p>@ 2024 Logic Indicators.</p>
        </div>
        <div className="footer__container--right">
          <h5>Join</h5>
          <p>Your dashboard is mission control for your creator journey. Get instant access.</p>
          <div className="footer__container--right-form">
            <div></div>
            <div></div>
          </div>     
          <button>Join</button>  
        </div>
      </div>
    </div>
  );
}
