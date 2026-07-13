import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="logo-main-line">
              Philorenda Metal Works<span className="accent-dot">.</span>
            </div>
            <span className="logo-subtext">FABRICATION</span>
          </Link>
        </div>

        {/* Desktop & Mobile Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          {/* <Link to="/capabilities" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            Capabilities
          </Link> */}
          <Link to="/products" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            Our Products
          </Link>
          {/* <Link to="/about" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link> */}
          <Link to="/contact" className="nav-cta-mobile" onClick={() => setIsMobileMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>

        {/* Action Elements: Desktop CTA */}
        <div className="navbar-actions">
          <Link to="/contact" className="nav-cta-btn">
            Get a Quote
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'toggle' : ''}`} 
          onClick={toggleMobileMenu} 
          aria-label="Toggle navigation"
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;