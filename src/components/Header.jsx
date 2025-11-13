import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { FaInstagram, FaLinkedinIn, FaHome, FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to={user ? '/home' : '/'} className="logo">
          <div className="logo-icon">R</div>
          <span className="logo-text">React Blog</span>
        </Link>

        <button 
          className="burger-menu" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {user ? (
            <>
              <NavLink to="/home" className="nav-link">
                <FaHome /> <span>Home</span>
              </NavLink>
              <NavLink to="/userinfo" className="nav-link">
                <FaUser /> <span>{user.username}</span>
              </NavLink>
              <NavLink to="/logout" className="nav-link logout-link">
                <FaSignOutAlt /> <span>Logout</span>
              </NavLink>
            </>
          ) : (
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/tamta-khutsishvili-85395b343/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          )}
        </nav>
      </div>
      
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
    </header>
  );
};

export default Header