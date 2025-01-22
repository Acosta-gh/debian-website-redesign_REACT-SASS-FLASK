import React from "react";

import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header";  
import Footer from "./Footer/Footer";  

function Layout() {
  return (
    <div>
      <Header />  {/* Inserta el Header */}
      
      <main>
        <Outlet />  {/* Rutas anidadas */}
      </main>
      
      <Footer />  {/* Inserta el Footer */}
    </div>
  );
}

export default Layout;
