import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
         Siddharth TravelBooking
        </Link>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search destinations..." />
          <button>Search</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
