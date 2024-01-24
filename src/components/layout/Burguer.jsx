import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Burguer() {
  const [sideBar, setSideBar] = useState("sideBarInit");

  function turnSideBar() {
    if (sideBar === "sideBarInit") {
      setSideBar("sideBarOn");
    } else if (sideBar === "sideBarOn") {
      setSideBar("sideBarOff");
    } else if (sideBar === "sideBarOff") {
      setSideBar("sideBarOn");
    }
  }

  function turnOffSideBar() {
    setSideBar("sideBarOff");
  }

  return (
    <>
      <div className="burguer" onClick={turnSideBar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={sideBar}>
        <div className="st1" onClick={turnOffSideBar}>
          <div className="st2"></div>
          <div className="st3"></div>
        </div>

        <div className="sideBarLinks">
          <Link className="link-before" onClick={turnOffSideBar} to="/#indicators">
          Indicators
          </Link>
          <Link className="link-before" onClick={turnOffSideBar} to="/education">
            Education
          </Link>
          <Link className="link-before" onClick={turnOffSideBar} to="/buy">
            Buy
          </Link>
          <Link className="link-before" onClick={turnOffSideBar} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
