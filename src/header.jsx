import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    setMatches(mql.matches);
    mql.addEventListener('change', handler);

    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((v) => !v);
  }, []);

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
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'all 0.4s ease',
      padding: scrolled ? '0.6rem 0' : '1rem 0',
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      textDecoration: 'none',
      color: '#fff',
      fontWeight: 700,
      fontSize: isMobile ? '1.2rem' : '1.5rem',
    },

    logoImg: {
      width: isMobile ? 32 : 40,
      height: isMobile ? 32 : 40,
      objectFit: 'contain',
      borderRadius: 6,
    },

    logoDot: { color: '#888' },

    nav: {
      display: isMobile ? 'none' : 'flex',
      gap: '2rem',
    },

    link: {
      color: '#aaa',
      textDecoration: 'none',
    },

    hamburger: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '1.6rem',
      cursor: 'pointer',
    },

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 998,
    },

    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '75%',
      height: '100vh',
      background: '#111',
      padding: '90px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 999,
      transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: '0.3s ease',
    },

    mobileLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.1rem',
    },
  };

  return (
    <>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.container}>

          {/* LOGO */}
          <Link to="/" style={styles.logo}>
            <img src="/logo.png" alt="logo" style={styles.logoImg} />
            <span>
              SI<span style={styles.logoDot}>.</span>HAM
            </span>
          </Link>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <nav style={styles.nav}>
              {navLinks.map((l) => (
                <NavLink key={l.path} to={l.path} style={styles.link}>
                  {l.label}
                </NavLink>
              ))}
            </nav>
          )}

          {/* HAMBURGER */}
          {isMobile && (
            <button style={styles.hamburger} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>
      </header>

      {/* OVERLAY */}
      {isMobile && isMenuOpen && (
        <div style={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}

      {/* MOBILE MENU */}
      {isMobile && (
        <div style={styles.mobileMenu}>
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              style={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;