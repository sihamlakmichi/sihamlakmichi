import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, FaBriefcase, FaCode, 
  FaArrowRight, FaSchool, FaLaptopCode,
  FaCalendar, FaUserGraduate
} from 'react-icons/fa';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      padding: '120px 20px 80px',
      background: '#0a0a0a',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#ffffff',
    },
    wrapper: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    badge: {
      display: 'inline-block',
      padding: '0.4rem 1.2rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#ffffff',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#888888',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    card: {
      background: '#1a1a1a',
      borderRadius: '20px',
      padding: '2.5rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      marginBottom: '2rem',
    },
    intro: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '2rem',
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #ffffff, #666666)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      flexShrink: 0,
    },
    introText: {
      flex: 1,
    },
    introTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '0.3rem',
    },
    introRole: {
      color: '#888888',
      fontSize: '1rem',
    },
    description: {
      color: '#aaaaaa',
      lineHeight: '1.8',
      fontSize: '1rem',
      marginBottom: '1rem',
    },
    highlight: {
      color: '#ffffff',
      fontWeight: '600',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    infoCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    infoIcon: {
      fontSize: '1.5rem',
      color: '#ffffff',
      marginBottom: '0.5rem',
    },
    infoTitle: {
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#666666',
      marginBottom: '0.3rem',
    },
    infoValue: {
      fontSize: '1rem',
      color: '#ffffff',
    },
    infoValueSmall: {
      fontSize: '0.9rem',
      color: '#aaaaaa',
    },
    cta: {
      textAlign: 'center',
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.8rem 2.5rem',
      background: '#ffffff',
      color: '#0a0a0a',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '1.5rem',
    },
    btnSecondary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.8rem 2rem',
      background: 'transparent',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>✦ À propos</span>
          <h1 style={styles.title}>Qui suis-je ?</h1>
          <p style={styles.subtitle}>
            Technicien spécialisé passionné par le développement web
          </p>
        </div>

        {/* Main Card */}
        <div style={styles.card}>
          {/* Introduction */}
          <div style={styles.intro}>
            <div style={styles.avatar}>👨‍💻</div>
            <div style={styles.introText}>
              <h2 style={styles.introTitle}>Lakmichi Siham</h2>
              <p style={styles.introRole}>Technicien Spécialisé en Développement Web</p>
            </div>
          </div>

          {/* Description */}
          <p style={styles.description}>
            Je suis un <span style={styles.highlight}>Technicien Spécialisé</span> diplômé de l'OFPPT, 
            passionné par le développement web. J'ai acquis une solide formation en 
            programmation et en conception d'applications web.
          </p>
          <p style={styles.description}>
            À travers mes <span style={styles.highlight}>stages et projets</span>, j'ai développé 
            des compétences pratiques en React, JavaScript, Node.js et les technologies 
            du web moderne. Je suis constamment à la recherche de nouvelles opportunités 
            pour apprendre et créer.
          </p>

          {/* Informations */}
          <div style={styles.grid}>
            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>
                <FaUserGraduate />
              </div>
              <div style={styles.infoTitle}>Formation</div>
              <div style={styles.infoValue}>Technicien Spécialisé</div>
              <div style={styles.infoValueSmall}>OFPPT - Développement Web</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>
                <FaSchool />
              </div>
              <div style={styles.infoTitle}>Établissement</div>
              <div style={styles.infoValue}>OFPPT</div>
              <div style={styles.infoValueSmall}>Maroc</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>
                <FaBriefcase />
              </div>
              <div style={styles.infoTitle}>Stages</div>
              <div style={styles.infoValue}>2 Stages</div>
              <div style={styles.infoValueSmall}>En entreprise</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.infoIcon}>
                <FaCode />
              </div>
              <div style={styles.infoTitle}>Projets</div>
              <div style={styles.infoValue}>+5 Projets</div>
              <div style={styles.infoValueSmall}>Personnels & Académiques</div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={styles.cta}>
            <p style={{ color: '#888888', marginBottom: '1rem' }}>
              Découvrez mon parcours à travers mes stages et projets
            </p>
            <div style={styles.buttonGroup}>
              <Link 
                to="/stages" 
                style={styles.btnSecondary}
                onMouseEnter={(e) => { e.target.style.borderColor = '#ffffff'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'transparent'; }}
              >
                Voir mes stages
              </Link>
              <Link 
                to="/projects" 
                style={styles.ctaButton}
                onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 10px 30px rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
              >
                Voir mes projets <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;