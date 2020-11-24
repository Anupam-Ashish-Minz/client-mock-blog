import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-items">Home</Link> 
      <Link to="/about" className="navbar-items">About</Link>
      <Link to="/articles" className="navbar-items">Articles</Link>
    </div>
  );
}

export default Navbar;
