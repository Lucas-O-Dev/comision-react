import React from 'react';
import MySVGImage from '../assets/react.svg'; // SVG
import '../sass/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={MySVGImage} alt="company logo" className="logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
