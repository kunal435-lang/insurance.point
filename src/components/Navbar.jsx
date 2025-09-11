import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo + Title → clickable to Home */}
      <Link to="/" className="navbar-left">
        <div className="logo-circle">
          <span>IP</span>
        </div>
        <span className="navbar-title">Insurance Point</span>
      </Link>

      {/* Navigation Links */}
      <div className="navbar-right">
        <Link to="/" className="navbar-btn">
          Home
        </Link>
        <Link to="/faq" className="navbar-btn">
          FAQ
        </Link>
        <Link to="/contact" className="navbar-btn">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
