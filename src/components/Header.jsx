import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header style={{display: "flex", width: "100%", justifyContent: "center", padding: "20px", backgroundColor: "#202020"}}>
        <nav  style={{display: "flex",justifyContent: "space-around", width: "800px"}}>
          <li>
            <NavLink className="text-[22px]" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="text-[22px]" to="/add">AddProduct</NavLink>
          </li>
          <li>
            <NavLink className="text-[22px]" to="/list">ListProduct</NavLink>
          </li>
        </nav>
      </header>
  );
};

export default Header;
