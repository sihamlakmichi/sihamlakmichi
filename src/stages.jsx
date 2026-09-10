import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './foter';

import { 
  FaBriefcase, FaCalendar, FaMapMarker, FaBuilding, 
  FaTasks, FaArrowRight, FaCheckCircle,
  FaCode, FaServer, FaReact, FaChevronDown, FaChevronUp,
  FaClock, FaLaptopCode, FaDatabase, FaPaintBrush
} from 'react-icons/fa';

const Stages = () => {
  const [expandedStage, setExpandedStage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = (id) => {
    setExpandedStage(expandedStage === id ? null : id);
  };

  const stages = [
    {
      id: 1,
      title: "ADMINISTRATION OFPPT",
      subtitle: "Stagiaire Administratif",
      companyFull: "Office de la Formation Professionnelle et de la Promotion du Travail",
      location: "Kénitra, Maroc",
      period: "Mai 2024",
      duration: "3 mois",
      type: "Stage d'observation",
      description: "Découverte du fonctionnement administratif interne de l'OFPPT.",
      missions: [
        "Découverte du fonctionnement administratif interne",
        "Initiation à la gestion documentaire",
        "Utilisation des outils bureautiques"
      ],
      technologies: ["Bureautique", "Gestion documentaire"],
      icon: <FaBuilding />,
      color: '#6c5ce7'
    },
    {
      id: 2,
      title: "ONEE",
      subtitle: "Développeur Full Stack",
      companyFull: "Office National de l'Électricité et de l'Eau Potable",
      location: "Kénitra, Maroc",
      period: "Juillet 2024",
      duration: "1 mois",
      type: "Stage technique",
      description: "Développement d'une application web pour la gestion des courriers.",
      missions: [
        "Développement d'une application web pour la gestion des courriers",
        "Utilisation de PHP, MySQL, HTML, CSS, JavaScript",
        "Gestion des droits d'accès utilisateurs selon les catégories"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: <FaServer />,
      color: '#00b894'
    },
    {
      id: 3,
      title: "ASURYM",
      subtitle: "Développeur Web",
      companyFull: "Agence d'Assurance Française",
      location: "Kénitra, Maroc",
      period: "Janvier 2025",
      duration: "2 mois",
      type: "Stage de fin d'études",
      description: "Développement d'une application TNS pour l'assurance santé et prévoyance.",
      missions: [
        "Développement d'une application TNS (Travailleurs Non Salariés)",
        "Développement d'une application de gestion des clients et contrats",
        "Intégration et utilisation d'APIs pour la gestion des données d'assurance"
      ],
      technologies: ["Laravel", "React", "MySQL", "APIs REST"],
      icon: <FaCode />,
      color: '#0984e3'
    },
    {
      id: 4,
      title: "Low Tech Farm",
      subtitle: "Développeur JavaScript/React",
      companyFull: "Agence de développement web Low Tech",
      location: "Kénitra, Maroc",
      period: "01/07/2025 - 01/02/2026",
      duration: "6 mois",
      type: "Stage technique",
      description: "Développement de sites web avec JavaScript et React.",
      missions: [
        "Développement de sites web avec JavaScript et React",
        "Création d'interfaces utilisateur modernes et responsives",
        "Intégration d'APIs et gestion d'état",
        "Optimisation des performances et SEO"
      ],
      technologies: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind", "Git"],
      icon: <FaReact />,
      color: '#e17055'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      padding: isSmallMobile ? '100px 16px 60px' : isMobile ? '110px 24px 70px' : '120px 40px 80px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    wrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    // Header
    header: {
      textAlign: 'center',
      marginBottom: isSmallMobile ? '2.5rem' : isMobile ? '3rem' : '4rem',
    },
    badge: {
      display: 'inline-block',
      padding: isSmallMobile ? '0.4rem 1.2rem' : '0.5rem 1.5rem',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: isSmallMobile ? '1.5px' : '2px',
      color: '#ffffff',
      marginBottom: isSmallMobile ? '0.8rem' : '1rem',
      boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
    },
    title: {
      fontSize: isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '3.2rem',
      fontWeight: '800',
      color: '#2d3436',
      marginBottom: isSmallMobile ? '0.5rem' : '0.8rem',
      lineHeight: '1.2',
      background: 'linear-gradient(135deg, #2d3436, #6c5ce7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1.05rem' : '1.15rem',
      color: '#636e72',
      maxWidth: '550px',
      margin: '0 auto',
      lineHeight: '1.7',
      padding: '0 1rem',
    },
    // Stats
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr 1fr' : isMobile ? '1fr 1fr 1fr' : 'repeat(4, 1fr)',
      gap: isSmallMobile ? '0.8rem' : isMobile ? '1rem' : '1.2rem',
      marginBottom: isSmallMobile ? '2.5rem' : isMobile ? '3rem' : '3.5rem',
    },
    statCard: {
      background: '#ffffff',
      padding: isSmallMobile ? '1.2rem 0.8rem' : isMobile ? '1.5rem 1rem' : '1.8rem',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      border: '1px solid rgba(108, 92, 231, 0.08)',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      display: 'block',
      fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.4rem',
      fontWeight: '800',
      color: '#2d3436',
      marginBottom: '0.2rem',
    },
    statLabel: {
      fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.75rem' : '0.85rem',
      color: '#b2bec3',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    // Stage Card
    stageCard: {
      background: '#ffffff',
      borderRadius: isSmallMobile ? '14px' : isMobile ? '16px' : '20px',
      padding: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem',
      marginBottom: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
      boxShadow: '0 4px 25px rgba(0,0,0,0.06)',
      border: '1px solid #f0f0f0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    stageCardHover: {
      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
      borderColor: 'rgba(108, 92, 231, 0.15)',
      transform: 'translateY(-4px)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: isSmallMobile ? '0.8rem' : isMobile ? '1.2rem' : '1.5rem',
      flexDirection: isSmallMobile ? 'column' : 'row',
    },
    iconWrapper: {
      width: isSmallMobile ? '48px' : isMobile ? '54px' : '60px',
      height: isSmallMobile ? '48px' : isMobile ? '54px' : '60px',
      minWidth: isSmallMobile ? '48px' : isMobile ? '54px' : '60px',
      borderRadius: isSmallMobile ? '12px' : '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '1.3rem' : isMobile ? '1.5rem' : '1.6rem',
      color: '#ffffff',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
    },
    cardInfo: {
      flex: 1,
      width: '100%',
    },
    cardTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    cardTitle: {
      fontSize: isSmallMobile ? '1.05rem' : isMobile ? '1.15rem' : '1.35rem',
      fontWeight: '700',
      color: '#2d3436',
      marginBottom: '0.1rem',
      wordBreak: 'break-word',
    },
    cardSubtitle: {
      fontSize: isSmallMobile ? '0.85rem' : isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      color: '#6c5ce7',
      marginBottom: '0.2rem',
    },
    companyFull: {
      fontSize: isSmallMobile ? '0.75rem' : isMobile ? '0.8rem' : '0.85rem',
      color: '#b2bec3',
      fontWeight: '400',
      display: 'block',
    },
    cardMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isSmallMobile ? '0.5rem' : isMobile ? '0.8rem' : '1.2rem',
      marginTop: isSmallMobile ? '0.5rem' : '0.6rem',
      alignItems: 'center',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.75rem' : '0.85rem',
      color: '#636e72',
      background: '#f8f9fa',
      padding: '0.2rem 0.6rem',
      borderRadius: '6px',
    },
    typeBadge: {
      display: 'inline-block',
      padding: '0.2rem 0.8rem',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '0.6rem' : isMobile ? '0.65rem' : '0.7rem',
      fontWeight: '600',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    toggleBtn: {
      padding: '0.3rem 0.6rem',
      background: '#f8f9fa',
      borderRadius: '50%',
      fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : '0.9rem',
      color: '#b2bec3',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0',
      cursor: 'pointer',
      flexShrink: 0,
      width: isSmallMobile ? '30px' : '34px',
      height: isSmallMobile ? '30px' : '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Expanded
    expandedContent: {
      marginTop: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
      paddingTop: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
      borderTop: '2px solid #f0f0f0',
    },
    description: {
      color: '#2d3436',
      lineHeight: '1.8',
      marginBottom: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
      padding: isSmallMobile ? '0.8rem 1rem' : isMobile ? '0.9rem 1.2rem' : '1rem 1.5rem',
      background: 'linear-gradient(135deg, #f8f9fa, #f0f0f0)',
      borderRadius: '12px',
      fontSize: isSmallMobile ? '0.85rem' : isMobile ? '0.9rem' : '0.95rem',
      borderLeft: '4px solid #6c5ce7',
    },
    sectionLabel: {
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      color: '#b2bec3',
      marginBottom: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    missionsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginBottom: isSmallMobile ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
    },
    missionItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.8rem',
      color: '#2d3436',
      padding: isSmallMobile ? '0.4rem 0' : '0.5rem 0',
      lineHeight: '1.6',
      borderBottom: '1px solid #f5f5f5',
      fontSize: isSmallMobile ? '0.85rem' : isMobile ? '0.9rem' : '1rem',
    },
    checkIcon: {
      color: '#00b894',
      marginTop: '0.2rem',
      fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.75rem' : '0.8rem',
      minWidth: '18px',
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isSmallMobile ? '0.4rem' : isMobile ? '0.5rem' : '0.6rem',
    },
    techTag: {
      padding: isSmallMobile ? '0.3rem 0.8rem' : isMobile ? '0.35rem 1rem' : '0.4rem 1.2rem',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      borderRadius: '50px',
      fontSize: isSmallMobile ? '0.65rem' : isMobile ? '0.7rem' : '0.75rem',
      color: '#ffffff',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      boxShadow: '0 2px 10px rgba(108, 92, 231, 0.2)',
    },
    // CTA
    cta: {
      marginTop: isSmallMobile ? '2.5rem' : isMobile ? '3rem' : '3.5rem',
      padding: isSmallMobile ? '2rem 1.5rem' : isMobile ? '2.5rem 2rem' : '3rem',
      background: 'linear-gradient(135deg, #2d3436, #1a1a2e)',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaDecoration: {
      position: 'absolute',
      top: '-50%',
      right: '-20%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(108, 92, 231, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
    },
    ctaDecoration2: {
      position: 'absolute',
      bottom: '-40%',
      left: '-10%',
      width: '250px',
      height: '250px',
      background: 'radial-gradient(circle, rgba(9, 132, 227, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
    },
    ctaTitle: {
      fontSize: isSmallMobile ? '1.3rem' : isMobile ? '1.5rem' : '1.8rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '0.5rem',
      position: 'relative',
      zIndex: 1,
    },
    ctaText: {
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '1.5rem',
      fontSize: isSmallMobile ? '0.9rem' : isMobile ? '0.95rem' : '1.05rem',
      position: 'relative',
      zIndex: 1,
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: isSmallMobile ? '0.8rem 1.5rem' : isMobile ? '0.9rem 2rem' : '1rem 2.5rem',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      color: '#ffffff',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      fontSize: isSmallMobile ? '0.85rem' : isMobile ? '0.9rem' : '1rem',
      width: isSmallMobile ? '100%' : 'auto',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 4px 20px rgba(108, 92, 231, 0.3)',
    },
  };

  const totalStages = stages.length;
  const totalTechnologies = [...new Set(stages.flatMap(s => s.technologies))].length;
  const totalCompanies = [...new Set(stages.map(s => s.title))].length;
  const totalMissions = stages.reduce((acc, stage) => acc + stage.missions.length, 0);

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          {/* Header */}
          <div style={styles.header}>
            <span style={styles.badge}>✦ Mon Parcours</span>
            <h1 style={styles.title}>Expériences Professionnelles</h1>
            <p style={styles.subtitle}>
              Découvrez mon parcours à travers mes stages en développement web
            </p>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>{totalStages}</span>
              <span style={styles.statLabel}>Stages</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>{totalCompanies}</span>
              <span style={styles.statLabel}>Entreprises</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>{totalMissions}</span>
              <span style={styles.statLabel}>Missions</span>
            </div>
            <div style={styles.statCard}>
              <span style={styles.statNumber}>{totalTechnologies}</span>
              <span style={styles.statLabel}>Technologies</span>
            </div>
          </div>

          {/* Liste des stages */}
          {stages.map((stage) => {
            const isExpanded = expandedStage === stage.id;
            const isHovered = hoveredId === stage.id;
            
            return (
              <div 
                key={stage.id}
                style={{
                  ...styles.stageCard,
                  ...(isHovered && !isSmallMobile ? styles.stageCardHover : {})
                }}
                onMouseEnter={() => !isSmallMobile && setHoveredId(stage.id)}
                onMouseLeave={() => !isSmallMobile && setHoveredId(null)}
                onClick={() => toggleExpand(stage.id)}
              >
                <div style={styles.cardHeader}>
                  <div style={{
                    ...styles.iconWrapper,
                    background: `linear-gradient(135deg, ${stage.color}, ${stage.color}dd)`,
                  }}>
                    {stage.icon}
                  </div>
                  <div style={styles.cardInfo}>
                    <div style={styles.cardTop}>
                      <div style={{ flex: 1, minWidth: '0' }}>
                        <h3 style={styles.cardTitle}>{stage.title}</h3>
                        <p style={styles.cardSubtitle}>{stage.subtitle}</p>
                        <span style={styles.companyFull}>{stage.companyFull}</span>
                      </div>
                      <div style={{ 
                        ...styles.toggleBtn, 
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        background: isExpanded ? `linear-gradient(135deg, ${stage.color}, ${stage.color}dd)` : '#f8f9fa',
                        color: isExpanded ? '#ffffff' : '#b2bec3',
                        borderColor: isExpanded ? stage.color : '#f0f0f0',
                      }}>
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </div>
                    <div style={styles.cardMeta}>
                      <span style={styles.metaItem}>
                        <FaCalendar size={isSmallMobile ? 11 : isMobile ? 12 : 13} />
                        {stage.period}
                      </span>
                      <span style={styles.metaItem}>
                        <FaMapMarker size={isSmallMobile ? 11 : isMobile ? 12 : 13} />
                        {stage.location}
                      </span>
                      <span style={styles.metaItem}>
                        <FaClock size={isSmallMobile ? 11 : isMobile ? 12 : 13} />
                        {stage.duration}
                      </span>
                      <span style={styles.typeBadge}>{stage.type}</span>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div style={styles.expandedContent}>
                    <p style={styles.description}>
                      <strong>Description :</strong> {stage.description}
                    </p>
                    
                    <div style={styles.sectionLabel}>
                      <FaTasks size={isSmallMobile ? 12 : isMobile ? 13 : 14} /> 
                      Missions réalisées
                    </div>
                    <ul style={styles.missionsList}>
                      {stage.missions.map((mission, index) => (
                        <li key={index} style={styles.missionItem}>
                          <FaCheckCircle style={styles.checkIcon} />
                          {mission}
                        </li>
                      ))}
                    </ul>

                    <div style={styles.sectionLabel}>
                      <FaCode size={isSmallMobile ? 12 : isMobile ? 13 : 14} /> 
                      Technologies utilisées
                    </div>
                    <div style={styles.techTags}>
                      {stage.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          style={{
                            ...styles.techTag,
                            background: `linear-gradient(135deg, ${stage.color}, ${stage.color}dd)`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* CTA */}
          <div style={styles.cta}>
            <div style={styles.ctaDecoration}></div>
            <div style={styles.ctaDecoration2}></div>
            <h3 style={styles.ctaTitle}>Prête pour de nouvelles aventures ?</h3>
            <p style={styles.ctaText}>
              Je suis disponible pour des opportunités en développement web
            </p>
            <Link 
              to="/contact" 
              style={styles.ctaButton}
              onMouseEnter={(e) => { 
                if (!isSmallMobile) {
                  e.target.style.transform = 'translateY(-3px)'; 
                  e.target.style.boxShadow = '0 8px 30px rgba(108, 92, 231, 0.4)'; 
                }
              }}
              onMouseLeave={(e) => { 
                e.target.style.transform = 'translateY(0)'; 
                e.target.style.boxShadow = '0 4px 20px rgba(108, 92, 231, 0.3)'; 
              }}
            >
              Me contacter <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;