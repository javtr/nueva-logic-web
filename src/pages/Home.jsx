import React,{ useEffect } from "react";
import Header from "../components/home/Header";
import IndicatorsSec from "../components/home/IndicatorsSec";
import AdvantagerSec from "../components/home/AdvantagerSec";
import TestimonialSec from "../components/home/TestimonialSec";
import LogoSec from "../components/home/LogoSec";
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="home">
      <div className="home__content">
        <Header />
        <IndicatorsSec />
        <AdvantagerSec />
        <TestimonialSec />
        <LogoSec />
      </div>
    </div>
  );
}
