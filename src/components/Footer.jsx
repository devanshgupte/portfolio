import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo-container" onClick={(e) => handleNavClick(e, 'root')}>
  <div className="logo-main">
    DEVANSH<span className="accent-dot">.</span>
  </div>
  <div className="logo-sub">PORTFOLIO</div>
</Link>
            <p className="footer-tagline">
              Freelance Full-Stack Developer. Crafting high-performance digital solutions from Madhya Pradesh, India.
            </p>
            <div className="social-links left-aligned">
              <a href="https://github.com/devanshgupte" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/devansh-gupte/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
                <li><a href="#work" onClick={(e) => handleNavClick(e, 'work')}>Projects</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Specialties</h4>
              <ul>
                <li>Full-Stack Web Apps</li>
                <li>React Native Mobile Apps</li>
                <li>AI Voice Integrations</li>
                <li>School ERP Systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Devansh Gupte. All rights reserved.
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}