import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
