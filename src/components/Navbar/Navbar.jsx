// Navbar.jsx
import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className={`n-list ${mobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;