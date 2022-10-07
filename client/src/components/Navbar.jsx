import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex w-full h-14 bg-slate-900 text-white bg-card justify-between items-center">
      <div className="font-bold mx-3 mr-3 text-[32px]">Product Warehouse</div>
      <NavLink to="/home">
        <div className="w-fit px-3 mx-3 py-1 cursor-pointer font-normal text-[22px] hover:text-sky-500">
          Home
        </div>
      </NavLink>
    </div>
  );
}
