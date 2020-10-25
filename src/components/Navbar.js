import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/home">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/articles">Articles</Link>
    </div>
  );
}

export default Navbar;