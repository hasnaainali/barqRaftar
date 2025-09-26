import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/images/barqRaftar-logo.png"
          alt="BarqRaftar Logo"
          className="logo-img"
        />
      </div>

      <nav className="nav">
        <NavLink
          to="/cod"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          COD
        </NavLink>
        <NavLink
          to="/business-suite"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Business Suite
        </NavLink>
        <NavLink
          to="/financing"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Financing
        </NavLink>
        <NavLink
          to="/track-order"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Track Order
        </NavLink>
      </nav>

      <div className="buttons">
        <button className="btn-outline">Login</button>
        <button className="btn-primary">Signup</button>
      </div>
    </header>
  );
}

export default Header;
