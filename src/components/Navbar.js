import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <img src='logo.png' alt='My Logo' />
        </div>

        <ul className='links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>

        <div className='contact'>
          Contact
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
