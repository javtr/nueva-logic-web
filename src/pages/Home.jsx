import React from "react";
import Header from "../components/home/Header";
import IndicatorsSec from "../components/home/IndicatorsSec";
import AdvantagerSec from "../components/home/AdvantagerSec";
import TestimonialSec from "../components/home/TestimonialSec";
import LogoSec from "../components/home/LogoSec";

export default function Home() {
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
