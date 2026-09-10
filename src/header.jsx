import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

/* ---------- Hook : détecte le breakpoint mobile ---------- */
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

  // Breakpoint mobile (768px)
  const isMobile = useMediaQuery('(max-width: 768px)');

  /* ---------- Scroll ---------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- Ferme le menu si on repasse en desktop ---------- */
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  /* ---------- Bloque le scroll du body quand le menu est ouvert ---------- */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  /* ---------- Ferme avec la touche Escape ---------- */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/stages', label: 'Stages' },
    { path: '/projects', label: 'Projets' },
    { path: '/skills', label: 'Compétences' },
    { path: '/contact', label: 'Contact' },
  ];

  /* ------------------ Styles inline (inchangés dans l'esprit) ------------------ */
  const styles = {
    header: {
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
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
      gap: '1rem',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem',
      textDecoration: 'none',
      color: '#ffffff',
      fontSize: isMobile ? '1.2rem' : '1.5rem',
      fontWeight: 700,
    },
    logoIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isMobile ? 32 : 40,
      height: isMobile ? 32 : 40,
      borderRadius: 8,
      background: 'linear-gradient(135deg, #ffffff, #888888)',
      color: '#0a0a0a',
      fontSize: isMobile ? '0.9rem' : '1.2rem',
    },
    logoDot: { color: '#888888' },
    nav: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    navLink: {
      color: '#888888',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: 500,
      padding: '0.5rem 0',
      position: 'relative',
      transition: 'color 0.3s ease',
    },
    navLinkActive: { color: '#ffffff' },
    navLinkUnderline: {
      position: 'absolute',
      bottom: -2, left: 0,
      width: 0, height: 2,
      background: '#ffffff',
      transition: 'width 0.3s ease',
    },
    navLinkUnderlineActive: { width: '100%' },
    hamburger: {
      display: isMobile ? 'flex' : 'none',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1001,
    },
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      zIndex: 999,
      animation: 'fadeIn 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0, right: 0,
      width: 'min(280px, 85vw)',
      height: '100dvh',
      background: 'rgba(10,10,10,0.98)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '80px 2rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      borderLeft: '1px solid rgba(255,255,255,0.05)',
      zIndex: 1000,
      transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      opacity: isMenuOpen ? 1 : 0,
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      pointerEvents: isMenuOpen ? 'auto' : 'none',
    },
    mobileLink: {
      color: '#888888',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 500,
      padding: '0.8rem 0.5rem',
      borderBottom: '1px solid rgba(255,255,255,0.03)',
      transition: 'all 0.3s ease',
      display: 'block',
    },
    mobileLinkActive: {
      color: '#ffffff',
      paddingLeft: '1rem',
      borderLeft: '3px solid #ffffff',
    },
  };

  const animationStyles = `
    @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  `;

  return (
    <>
      <style>{animationStyles}</style>

      {/* Overlay mobile */}
      {isMobile && isMenuOpen && (
        <div style={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}

      <header style={styles.header}>
        <div style={styles.container}>
          <Link to="/" style={styles.logo} onClick={() => setIsMenuOpen(false)}>
            <div style={styles.logoIcon}><FaCode /></div>
            <span>SI<span style={styles.logoDot}>.</span>HAM</span>
          </Link>

          {/* Navigation desktop */}
          {!isMobile && (
            <nav style={styles.nav}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  style={({ isActive }) => ({
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        style={{
                          ...styles.navLinkUnderline,
                          ...(isActive ? styles.navLinkUnderlineActive : {}),
                        }}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          )}

          {/* Bouton hamburger (mobile uniquement) */}
          {isMobile && (
            <button
              style={styles.hamburger}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}

          {/* Menu mobile latéral */}
          {isMobile && (
            <nav
              style={styles.mobileMenu}
              aria-hidden={!isMenuOpen}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  style={({ isActive }) => ({
                    ...styles.mobileLink,
                    ...(isActive ? styles.mobileLinkActive : {}),
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;