import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="home init">
      <div className="home__content init__c">
        <div className="home__content--container init__c">
          <ProductList />
          <SideBar />
        </div>
      </div>
    </div>
  );
}
