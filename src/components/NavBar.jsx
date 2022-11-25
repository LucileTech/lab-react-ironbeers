import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
