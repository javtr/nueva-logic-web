import React from "react";
import Header from "../components/Header";
import ProductsSec from "../components/ProductsSec";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Header />
        <ProductsSec />
      </div>
    </div>
  );
}
