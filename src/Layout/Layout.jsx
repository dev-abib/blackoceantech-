import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const Layout = () => {

  useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev || "auto";
    };
  }, []);

  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={location => location.pathname} />
    </>
  );
};

export default Layout;
