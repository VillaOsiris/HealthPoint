import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Logo } from "../Utils/images";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="nav">
      <Link to="/" className="nav__logo">
        <img src={Logo} alt="HealthPoint Logo" />
      </Link>
      <ul className={openNav ? "nav__list show-nav" : "nav__list"}>
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__link">
          <Link to="/events">Events</Link>
        </li>
        <li className="nav__link">
          <Link to="/contact">Contacts</Link>
        </li>
      </ul>

      <button type="button" className="nav__toggle">
        {openNav ? (
          <IoClose onClick={() => setOpenNav(!openNav)} />
        ) : (
          <FaBars onClick={() => setOpenNav(!openNav)} />
        )}
      </button>
    </div>
  );
};

export default NavBar;
