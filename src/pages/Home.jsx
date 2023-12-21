import React from "react";
import Header from "../components/Header";
import ProductsSec from "../components/ProductsSec";
import AdvantagerSec from "../components/AdvantagerSec";
import TestimonialSec from "../components/TestimonialSec";
import LogoSec from "../components/LogoSec";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Header />
        <ProductsSec />
        <AdvantagerSec />
        <TestimonialSec />
        <LogoSec />
      </div>
    </div>
  );
}
