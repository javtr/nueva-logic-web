import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Header />
        <div className="home__content--container init__c">
          <ProductList />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
