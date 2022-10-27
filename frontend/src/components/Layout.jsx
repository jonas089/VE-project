import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./Nav";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
