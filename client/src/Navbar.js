import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/reel_logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-holder">
      <div>
        <Link to="/">
          <img src={logo} alt="Reel" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
