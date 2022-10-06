import React from "react"
import { NavLink } from "react-router-dom"
import Button from "./buttons/Button"

export default function Navbar() {
  return (
    <div className="flex w-full h-14  text-white bg-card justify-between items-center">
      <div className="font-bold mx-3 mr-3 text-[22px]">Product Warehouse</div>
      <div className="flex">
        <NavLink to="register">
          <Button content={'Register'}></Button>
        </NavLink>
        <NavLink to="/products">
          <Button content={'Product List'}></Button>
        </NavLink>
      </div>
    </div >
  )
}