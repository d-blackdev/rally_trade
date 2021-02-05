import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import { motion } from "framer-motion";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdown(false);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showDropdown = () => {
    setDropdown(true);
  };
  const MouseExit = () => {
    setDropdown(false);
  };
  const hideDropdown = () => {
    closeMobileMenu();
    setDropdown(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeNavBarBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavBarBackground);
  return (
    // <IconContext.Provider value={{ color: "#fff" }}>

    <nav
      className={
        navbar ? "navbar-containers active" : "containers navbar-containers"
      }
    >
      <NavLink to="/" className="navbar-logo" onClick={hideDropdown}>
        <p className={navbar ? ".nav_logo_change" : ""}>RallyTrade</p>
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* NAV_DROPDOWN */}

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink exact className="nav-links" to="/" onClick={hideDropdown}>
            Home
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            exact
            className={navbar ? "active_color nav-links" : "nav-links"}
            to="/get-a-kit"
            onClick={hideDropdown}
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={navbar ? "active_color nav-links" : "nav-links"}
            to="/what-we-do"
            onClick={hideDropdown}
          >
            Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={navbar ? "active_color nav-links" : "nav-links"}
            to="/what-we-do"
            onClick={hideDropdown}
          >
            Trading
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            className={navbar ? "active_color nav-links" : "nav-links"}
            to="/what-we-do"
            onClick={hideDropdown}
          >
            Partners
          </NavLink>
        </li>

        {/* BUTTON */}
        <li className="nav-btn">
          {button ? (
            <NavLink className="btn-link" to="/login" onClick={hideDropdown}>
              <button className="btn-primary btn">LOGIN</button>
            </NavLink>
          ) : (
            <NavLink className="btn-link" to="/login" onClick={hideDropdown}>
              <button className="btn-mobile btn">LOGIN</button>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>

    // </IconContext.Provider>
  );
}

export default Navbar;
