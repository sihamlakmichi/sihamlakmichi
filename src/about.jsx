import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      padding: 'clamp(80px, 10vh, 120px) clamp(15px, 4vw, 20px) clamp(60px, 8vh, 80px)',
      background: '#f5f7fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    },
    card: {
      maxWidth: 'min(700px, 95%)',
      width: '100%',
      background: '#ffffff',
      borderRadius: 'clamp(16px, 2vw, 20px)',
      padding: 'clamp(1.5rem, 4vw, 3rem)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
      border: '1px solid #e8e8ec',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
    },
    logo: {
      width: 'clamp(80px, 12vw, 110px)',
      height: 'clamp(80px, 12vw, 110px)',
      objectFit: 'contain',
      borderRadius: '50%',
      display: 'block',
      margin: '0 auto clamp(0.8rem, 1.5vw, 1rem)',
      background: '#f5f7fa',
      padding: '0.5rem',
      border: '2px solid #e8e8ec',
      boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
    },
    title: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: '700',
      color: '#1a1a2e',
      marginBottom: 'clamp(0.2rem, 0.5vw, 0.3rem)',
      lineHeight: '1.2',
    },
    role: {
      color: '#6a6a8a',
      fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
    },
    text: {
      color: '#444466',
      lineHeight: '1.8',
      marginBottom: 'clamp(0.8rem, 1.5vw, 1rem)',
      fontSize: 'clamp(0.9rem, 1.1vw, 0.95rem)',
    },
    highlight: {
      color: '#1a1a2e',
      fontWeight: '600',
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'clamp(0.6rem, 1.5vw, 1rem)',
      margin: 'clamp(1.2rem, 2.5vw, 1.5rem) 0',
    },
    stat: {
      textAlign: 'center',
      padding: 'clamp(0.8rem, 1.5vw, 1rem) clamp(0.5rem, 1vw, 1rem)',
      background: '#f5f7fa',
      borderRadius: '10px',
      border: '1px solid #e8e8ec',
      transition: 'transform 0.3s ease',
    },
    statIcon: {
      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
      marginBottom: '0.3rem',
      color: '#1a1a2e',
    },
    statNumber: {
      display: 'block',
      fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
      fontWeight: '700',
      color: '#1a1a2e',
    },
    statLabel: {
      fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)',
      color: '#8888aa',
    },
    buttons: {
      display: 'flex',
      gap: 'clamp(0.8rem, 1.5vw, 1rem)',
      justifyContent: 'center',
      marginTop: 'clamp(1.2rem, 2.5vw, 1.5rem)',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      padding: 'clamp(0.7rem, 1.2vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)',
      background: '#1a1a2e',
      color: '#ffffff',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: 'clamp(0.85rem, 1vw, 1rem)',
      whiteSpace: 'nowrap',
    },
    btnSecondary: {
      padding: 'clamp(0.7rem, 1.2vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)',
      background: 'transparent',
      color: '#1a1a2e',
      border: '1px solid #d0d0d8',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: 'clamp(0.85rem, 1vw, 1rem)',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img src="/logo.png" alt="Logo Siham" style={styles.logo} />
          <h1 style={styles.title}>Lakmichi Siham</h1>
          <p style={styles.role}>Technicienne Spécialisée - OFPPT</p>
        </div>

        <p style={styles.text}>
          Je suis une <span style={styles.highlight}>Technicienne Spécialisée en Développement Web</span>, 
          diplômée de l'OFPPT. Passionnée par la création d'applications web modernes, 
          j'ai acquis des compétences en React, JavaScript, Node.js et les technologies web.
        </p>
        <p style={styles.text}>
          À travers mes <span style={styles.highlight}>stages en entreprise</span> et mes 
          projets personnels, j'ai développé une solide expérience pratique et 
          je suis prête à relever de nouveaux défis.
        </p>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <div style={styles.statIcon}><FaGraduationCap /></div>
            <span style={styles.statNumber}>OFPPT</span>
            <span style={styles.statLabel}>Formation</span>
          </div>
          <div style={styles.stat}>
            <div style={styles.statIcon}><FaBriefcase /></div>
            <span style={styles.statNumber}>4</span>
            <span style={styles.statLabel}>Stages</span>
          </div>
          <div style={styles.stat}>
            <div style={styles.statIcon}><FaCode /></div>
            <span style={styles.statNumber}>5+</span>
            <span style={styles.statLabel}>Projets</span>
          </div>
        </div>

        <div style={styles.buttons}>
          <Link 
            to="/stages" 
            style={styles.btnSecondary}
            onMouseEnter={(e) => { 
              e.target.style.borderColor = '#1a1a2e'; 
              e.target.style.background = '#f0f0f5'; 
            }}
            onMouseLeave={(e) => { 
              e.target.style.borderColor = '#d0d0d8'; 
              e.target.style.background = 'transparent'; 
            }}
          >
            Stages
          </Link>
          <Link 
            to="/projects" 
            style={styles.btnPrimary}
            onMouseEnter={(e) => { 
              e.target.style.transform = 'translateY(-3px)'; 
              e.target.style.boxShadow = '0 8px 25px rgba(26,26,46,0.2)'; 
            }}
            onMouseLeave={(e) => { 
              e.target.style.transform = 'translateY(0)'; 
              e.target.style.boxShadow = 'none'; 
            }}
          >
            Projets <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;