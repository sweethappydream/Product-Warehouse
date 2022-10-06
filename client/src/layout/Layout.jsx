import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen bg-mainBack">
        <div className="flex-grow-0 ">
          <Navbar />
        </div>
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default Layout;