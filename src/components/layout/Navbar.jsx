import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_nav.png";
import Burguer from "./Burguer";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__content">


        <Link className="navbar__content--logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="navbar__content--links">
          <Link to="/#indicators">Indicators</Link>
          <Link to="/education">Education</Link>
          <Link to="/buy">Buy</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Burguer/>

      </div>
    </div>
  );
}
