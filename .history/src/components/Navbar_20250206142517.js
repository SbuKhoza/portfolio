import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <img src='logo.png' alt='My Logo' />
        </div>

        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>

        <ul className={`links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          {/* <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li> */}
          <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
        </ul>

        <div className='contact'>
          Contact
        </div>
      </nav>
    </div>
  );
}

export default Navbar;