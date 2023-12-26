import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;