import React from "react";
import logo from "../../assets/img/NinjaTrader_Wordmark_color_RGB.png";
import logoK from "../../assets/img/Kinetick_Logo.png";

export default function logoSec() {
  return (
    <div className="logoSec">
      <div className="logoSec__container">
        <h3>Our Recommended Trading Platform</h3>
        <a  className="logoSec__container--aninja" href="https://ninjatrader.com/es/LP/VendorDemo/" target="_blank">
          <img className="logoSec__container--imgninja" src={logo} alt="ninjatrader"></img>
        </a>
        <h3>Our Recommended Market Data Feed</h3>
        <a href="https://kinetick.com/NinjaTrader" target="_blank">
          <img  className="logoSec__container--imgk" src={logoK} alt="ninjatrader"></img>
        </a>

      </div>

    </div>
  );
}
