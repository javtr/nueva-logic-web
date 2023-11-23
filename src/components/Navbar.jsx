import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar init">
      <div className="navbar__content init__c">
        <Link className="navbar__content--logo" to="/">
          Logo
        </Link>
        <div className="navbar__content--links">
          <Link to="/education">Education</Link>
          <Link to="/buy">Buy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
