import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/stages', label: 'Stages' },
    { path: '/projects', label: 'Projets' },
    { path: '/skills', label: 'Compétences' },
    { path: '/contact', label: 'Contact' },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(20px)',
      padding: '0.8rem 0',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: '0.3s ease',
    },

    container: {
      maxWidth: '1200px',
      margin: 'auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '1.3rem',
    },

    nav: {
      display: 'flex',
      gap: '25px',
    },

    link: {
      color: '#aaa',
      textDecoration: 'none',
      fontWeight: '500',
      transition: '0.3s',
    },

    mobileBtn: {
      display: 'none',
      fontSize: '1.5rem',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },

    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: isMenuOpen ? 0 : '-100%',
      width: '260px',
      height: '100vh',
      background: '#0a0a0a',
      padding: '80px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      transition: '0.3s ease',
      zIndex: 999,
    },

    mobileLink: {
      color: '#aaa',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '10px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    },

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: isMenuOpen ? 'block' : 'none',
      zIndex: 998,
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>

        {/* LOGO */}
        <Link to="/" style={styles.logo}>
          <FaCode />
          SIHAM
        </Link>

        {/* NAV DESKTOP */}
        <nav style={styles.nav} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                ...styles.link,
                color: isActive ? '#fff' : '#aaa',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* BUTTON MOBILE */}
        <button
          style={styles.mobileBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* OVERLAY */}
      <div
        style={styles.overlay}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div style={styles.mobileMenu}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }

            button {
              display: block !important;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;