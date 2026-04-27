import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <Link to="/" className="logo" onClick={(e) => handleNavClick(e, 'root')} style={{ textDecoration: 'none', color: 'white' }}>
          Devansh<span>.</span>
        </Link>
        
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Work</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">✕</button>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
        <a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Work</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </div>
    </>
  );
}