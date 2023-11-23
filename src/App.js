import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import "./App.scss";
import Buy from "./pages/Buy";
import Product from "./components/Product";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/education" element={<Education />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
