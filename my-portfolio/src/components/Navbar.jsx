import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu}>
            Sadikshya Bashyal
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Navigation links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/home" 
              onClick={closeMenu} 
              className={`navbar-link ${isActive('/home') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              onClick={closeMenu} 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/projects" 
              onClick={closeMenu} 
              className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/skills" 
              onClick={closeMenu} 
              className={`navbar-link ${isActive('/skills') ? 'active' : ''}`}
            >
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              onClick={closeMenu} 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
