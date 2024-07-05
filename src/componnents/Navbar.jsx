import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbarContainerDiv flex justify-between items-center m-16">
      <div className="brandName text-3xl">
        <h1>Rapture Athletics</h1>
      </div>
      <div className="navLinksDiv flex-1 flex justify-center">
        <ul className="navLinks flex gap-6 text-2xl">
          <li className="navLink">Home</li>
          <li className="navLink">About</li>
          <li className="navLink">Services</li>
          <li className="navLink">Contact</li>
        </ul>
      </div>
      <div className="rightSide flex gap-6 items-center">
        <FaSearch className="searchIcon" />
        <FaShoppingCart className="cartIcon" />
        <FaUser className="profileIcon" />
      </div>
    </div>
  );
};

export default Navbar;
