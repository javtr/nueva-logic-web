import React, { useContext } from "react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';
import {FloatingWhatsApp} from "react-floating-whatsapp";
import logo from "../assets/img/logo_nav.png";
import ScrollToTop from "react-scroll-to-top";
import { IconContext } from "react-icons";
import { BsFillArrowUpCircleFill } from "react-icons/bs";


import LanguageContext from "../context/langContext";
import { textEn, textEs } from "../assets/text/form-contactLic";



function Layout() {


  const { lang, setLang } = useContext(LanguageContext);
  let repliTime = "";
  let message = "";

  if (lang === "en") {
    repliTime = "Typically replies within 1 hour";
    message = "Hello there! 🤝 \nHow can we help?";
  } else {
    repliTime = "Normalmente responde en 1 hora";
    message = "¡Hola! 🤝 \n¿En qué podemos ayudarte?";
  }







  return (
    <div className="layout">


<ScrollToTop
        className="gl-goTop--cont"
        smooth
        component={
          <IconContext.Provider value={{ className: "gl-goTop" }}>
            <div>
              <BsFillArrowUpCircleFill />
            </div>
          </IconContext.Provider>
        }
      />


<FloatingWhatsApp
        phoneNumber={573113006826}//573113006826
        accountName={"Logic Indicators"}
        avatar={logo}
        chatMessage={message}
        statusMessage={repliTime}
        allowEsc="true"
        allowClickAway="true"
        className="whats_div"
        styles={{
          position: "fixed",
          right: "38px",
          bottom: "25px",
          width: "45px",
          height: "45px",
        }}
      ></FloatingWhatsApp>


      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;