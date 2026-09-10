import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, FaEnvelope, FaCode, 
  FaInstagram, FaWhatsapp, FaArrowUp,
  FaPhone, FaMapMarker, FaGithub,
  FaTwitter, FaYoutube, FaPaperPlane
} from 'react-icons/fa';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d0d0d 100%)',
      padding: isSmallMobile ? '2rem 0 1rem' : isMobile ? '3rem 0 1.2rem' : '4rem 0 1.5rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    // Effet de fond décoratif
    footerBg: {
      position: 'absolute',
      top: '-50%',
      right: '-10%',
      width: isMobile ? '300px' : '500px',
      height: isMobile ? '300px' : '500px',
      background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
      borderRadius: '50%',
      pointerEvents: 'none',
    },
    footerBg2: {
      position: 'absolute',
      bottom: '-30%',
      left: '-5%',
      width: isMobile ? '250px' : '400px',
      height: isMobile ? '250px' : '400px',
      background: 'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)',
      borderRadius: '50%',
      pointerEvents: 'none',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isSmallMobile ? '0 0.8rem' : isMobile ? '0 1.2rem' : '0 2.5rem',
      position: 'relative',
      zIndex: 1,
    },
    top: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr 1fr' : isTablet ? '1fr 1fr' : '2fr 1.5fr 1.5fr 1fr',
      gap: isSmallMobile ? '1.5rem' : isMobile ? '2rem' : '3rem',
      paddingBottom: isSmallMobile ? '1.5rem' : isMobile ? '2rem' : '2.5rem',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    },
    // Brand
    brand: {
      display: 'flex',
      flexDirection: 'column',
      gap: isSmallMobile ? '0.5rem' : '0.8rem',
      gridColumn: isSmallMobile ? '1' : 'auto',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: isSmallMobile ? '0.6rem' : '0.8rem',
      textDecoration: 'none',
      justifyContent: isSmallMobile ? 'center' : 'flex-start',
    },
    logoIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isSmallMobile ? '35px' : isMobile ? '38px' : '42px',
      height: isSmallMobile ? '35px' : isMobile ? '38px' : '42px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #333333 0%, #000000 100%)',
      color: '#ffffff',
      fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
      border: '1px solid rgba(255,255,255,0.05)',
    },
    logoText: {
      color: '#ffffff',
      fontSize: isSmallMobile ? '1.2rem' : isMobile ? '1.3rem' : '1.4rem',
      fontWeight: '700',
      letterSpacing: '-0.5px',
    },
    logoAccent: {
      color: '#666666',
    },
    description: {
      color: 'rgba(255,255,255,0.4)',
      fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.85rem' : '0.9rem',
      lineHeight: '1.7',
      maxWidth: isSmallMobile ? '100%' : '350px',
      textAlign: isSmallMobile ? 'center' : 'left',
    },
    socialCompact: {
      display: 'flex',
      gap: isSmallMobile ? '0.6rem' : '0.8rem',
      marginTop: '0.3rem',
      justifyContent: isSmallMobile ? 'center' : 'flex-start',
      flexWrap: 'wrap',
    },
    socialCompactLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isSmallMobile ? '34px' : isMobile ? '36px' : '38px',
      height: isSmallMobile ? '34px' : isMobile ? '36px' : '38px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.03)',
      color: 'rgba(255,255,255,0.4)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255,255,255,0.05)',
      fontSize: isSmallMobile ? '0.8rem' : '0.9rem',
    },
    // Navigation
    navWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: isSmallMobile ? '0.3rem' : '0.5rem',
      textAlign: isSmallMobile ? 'center' : 'left',
    },
    sectionTitle: {
      color: '#ffffff',
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '0.2rem',
      opacity: 0.5,
    },
    navList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isSmallMobile ? '0.2rem' : '0.3rem',
      alignItems: isSmallMobile ? 'center' : 'flex-start',
    },
    link: {
      color: 'rgba(255,255,255,0.35)',
      textDecoration: 'none',
      fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.85rem' : '0.9rem',
      transition: 'all 0.3s ease',
      padding: '0.15rem 0',
      display: 'inline-block',
      position: 'relative',
    },
    // Services
    servicesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isSmallMobile ? '0.2rem' : '0.3rem',
      alignItems: isSmallMobile ? 'center' : 'flex-start',
    },
    serviceItem: {
      color: 'rgba(255,255,255,0.25)',
      fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.85rem' : '0.9rem',
      padding: '0.15rem 0',
      display: 'inline-block',
      cursor: 'default',
    },
    // Contact Section
    contactWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: isSmallMobile ? '0.3rem' : '0.5rem',
      textAlign: isSmallMobile ? 'center' : 'left',
    },
    contactText: {
      color: 'rgba(255,255,255,0.35)',
      fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.85rem' : '0.9rem',
      lineHeight: '1.6',
    },
    contactButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6rem',
      padding: isSmallMobile ? '0.7rem 1.2rem' : isMobile ? '0.8rem 1.5rem' : '0.9rem 1.8rem',
      borderRadius: '50px',
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(255,255,255,0.03)',
      color: '#ffffff',
      fontWeight: '600',
      fontSize: isSmallMobile ? '0.8rem' : isMobile ? '0.85rem' : '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      marginTop: '0.3rem',
      alignSelf: isSmallMobile ? 'center' : 'flex-start',
      width: isSmallMobile ? '100%' : 'auto',
      maxWidth: isSmallMobile ? '280px' : 'auto',
    },
    // Bottom
    bottom: {
      display: 'flex',
      flexDirection: isSmallMobile ? 'column' : isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: isSmallMobile ? '0.8rem' : isMobile ? '1rem' : '1.5rem',
      paddingTop: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
      textAlign: isSmallMobile ? 'center' : isMobile ? 'center' : 'left',
    },
    bottomLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: isSmallMobile ? '0.5rem' : isMobile ? '0.8rem' : '1.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      color: 'rgba(255,255,255,0.2)',
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.8rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    contactIcon: {
      fontSize: isSmallMobile ? '0.6rem' : isMobile ? '0.65rem' : '0.7rem',
      color: 'rgba(255,255,255,0.15)',
    },
    bottomText: {
      color: 'rgba(255,255,255,0.2)',
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.8rem',
    },
    bottomHighlight: {
      color: 'rgba(255,255,255,0.5)',
    },
    bottomLinks: {
      display: 'flex',
      gap: isSmallMobile ? '0.8rem' : isMobile ? '1rem' : '1.5rem',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    bottomLink: {
      color: 'rgba(255,255,255,0.2)',
      textDecoration: 'none',
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.8rem',
      transition: 'color 0.3s ease',
    },
    scrollBtn: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.3)',
      width: isSmallMobile ? '30px' : isMobile ? '33px' : '36px',
      height: isSmallMobile ? '30px' : isMobile ? '33px' : '36px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '0.6rem' : isMobile ? '0.7rem' : '0.8rem',
      padding: 0,
    },
  };

  const socialData = [
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/siham-lakmichi', color: '#0077b5' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com', color: '#ffffff' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com', color: '#1DA1F2' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/siham_lakmichi', color: '#e4405f' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/212601263349', color: '#25d366' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com', color: '#FF0000' },
  ];

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Projets', path: '/projects' },
    { name: 'Stages', path: '/stages' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Développement Web',
    'UI/UX Design',
    'Applications React',
    'API REST',
    'Bases de données',
    'Maintenance',
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.footerBg}></div>
      <div style={styles.footerBg2}></div>
      
      <div style={styles.container}>
        {/* Top Section */}
        <div style={styles.top}>
          {/* Brand */}
          <div style={styles.brand}>
            <Link to="/" style={styles.logo}>
              <div style={styles.logoIcon}><FaCode /></div>
              <span style={styles.logoText}>
                SI<span style={styles.logoAccent}>.</span>HAM
              </span>
            </Link>
            <p style={styles.description}>
              Technicienne Spécialisée en Développement Web. 
              Passionnée par la création d'applications modernes et innovantes.
            </p>
            <div style={styles.socialCompact}>
              {socialData.slice(0, isSmallMobile ? 3 : isMobile ? 4 : 4).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialCompactLink}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.color = '#ffffff';
                    e.target.style.borderColor = social.color;
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = `0 4px 15px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.color = 'rgba(255,255,255,0.4)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={styles.navWrapper}>
            <h4 style={styles.sectionTitle}>Navigation</h4>
            <div style={styles.navList}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255,255,255,0.35)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={styles.navWrapper}>
            <h4 style={styles.sectionTitle}>Services</h4>
            <div style={styles.servicesList}>
              {services.map((service) => (
                <span key={service} style={styles.serviceItem}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Section - Remplacer Newsletter */}
          <div style={styles.contactWrapper}>
            <h4 style={styles.sectionTitle}>Contactez-moi</h4>
            <p style={styles.contactText}>
              Une question ou un projet ? N'hésitez pas à me contacter directement.
            </p>
            <a
              href="tel:+212601263349"
              style={styles.contactButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.08)';
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.03)';
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <FaPhone /> +212 6 01263349
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottom}>
          <div style={styles.bottomLeft}>
            <span style={styles.contactItem}>
              <FaMapMarker style={styles.contactIcon} /> Kénitra, Maroc
            </span>
            <a 
              href="tel:+212601263349" 
              style={styles.contactItem}
              onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.2)'}
            >
              <FaPhone style={styles.contactIcon} /> +212 6 01 26 33 49
            </a>
            <a 
              href="mailto:sihamlakmichi123@gmail.com"
              style={styles.contactItem}
              onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.2)'}
            >
              <FaEnvelope style={styles.contactIcon} /> sihamlakmichi123@gmail.com
            </a>
            <span style={styles.bottomText}>
              © {new Date().getFullYear()} <span style={styles.bottomHighlight}>Siham Lakmichi</span>
            </span>
          </div>

          <div style={styles.bottomLinks}>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.2)'}
            >
              Mentions légales
            </a>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.2)'}
            >
              Confidentialité
            </a>
            <button 
              onClick={scrollToTop}
              style={styles.scrollBtn}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.08)';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = 'rgba(255,255,255,0.15)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.03)';
                e.target.style.color = 'rgba(255,255,255,0.3)';
                e.target.style.borderColor = 'rgba(255,255,255,0.05)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;