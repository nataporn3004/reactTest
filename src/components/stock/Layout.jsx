import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" bg-sky-200 h-screen">
      <Header />

      <div>
        <Outlet />
      </div>

    
    </div>
  );
};

export default Layout;
