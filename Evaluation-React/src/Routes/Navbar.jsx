import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "gray",
        padding: "15px",
      }}
    >
      <NavLink to="">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/checkout">CheckOut</NavLink>
    </div>
  );
};

export default Navbar;
