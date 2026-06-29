import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBriefcase, FaCalendar, FaMapMarker, FaBuilding, 
  FaTasks, FaArrowRight, FaCheckCircle,
  FaCode, FaServer, FaReact, FaChevronDown, FaChevronUp,
  FaClock
} from 'react-icons/fa';

const Stages = () => {
  const [expandedStage, setExpandedStage] = useState(null);

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
      duration: "1 mois",
      type: "Stage d'observation",
      description: "Découverte du fonctionnement administratif interne de l'OFPPT.",
      missions: [
        "Découverte du fonctionnement administratif interne",
        "Initiation à la gestion documentaire",
        "Utilisation des outils bureautiques"
      ],
      technologies: ["Bureautique", "Gestion documentaire"],
      icon: <FaBuilding />
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
      icon: <FaServer />
    },
    {
      id: 3,
      title: "ASURYM",
      subtitle: "Développeur Web",
      companyFull: "Agence d'Assurance Française",
      location: "Kénitra, Maroc",
      period: "Janvier 2025",
      duration: "1 mois",
      type: "Stage technique",
      description: "Développement d'une application TNS pour l'assurance santé et prévoyance.",
      missions: [
        "Développement d'une application TNS (Travailleurs Non Salariés)",
        "Développement d'une application de gestion des clients et contrats",
        "Intégration et utilisation d'APIs pour la gestion des données d'assurance"
      ],
      technologies: ["Laravel", "React", "MySQL", "APIs REST"],
      icon: <FaCode />
    },
    {
      id: 4,
      title: "Low Tech Development",
      subtitle: "Développeur JavaScript/React",
      companyFull: "Agence de développement web Low Tech",
      location: "Kénitra, Maroc",
      period: "01/07/2025 - 01/02/2026",
      duration: "7 mois",
      type: "Stage de fin d'études",
      description: "Développement de sites web avec JavaScript et React.",
      missions: [
        "Développement de sites web avec JavaScript et React",
        "Création d'interfaces utilisateur modernes et responsives",
        "Intégration d'APIs et gestion d'état",
        "Optimisation des performances et SEO"
      ],
      technologies: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind", "Git"],
      icon: <FaReact />
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '120px 20px 80px',
      background: '#f0f2f5',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    wrapper: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    // Header
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    badge: {
      display: 'inline-block',
      padding: '0.3rem 1.2rem',
      background: '#1a1a2e',
      borderRadius: '50px',
      fontSize: '0.7rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#ffffff',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: '800',
      color: '#1a1a2e',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#6a6a8a',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    // Stats
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      marginBottom: '3rem',
    },
    statCard: {
      background: '#ffffff',
      padding: '1.5rem',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    },
    statNumber: {
      display: 'block',
      fontSize: '2rem',
      fontWeight: '800',
      color: '#1a1a2e',
    },
    statLabel: {
      fontSize: '0.8rem',
      color: '#8888aa',
      fontWeight: '500',
    },
    // Stage Card
    stageCard: {
      background: '#ffffff',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      border: '1px solid #e8e8ec',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
    },
    stageCardHover: {
      boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
      borderColor: '#d0d0d8',
      transform: 'translateY(-2px)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
    },
    iconWrapper: {
      width: '52px',
      height: '52px',
      minWidth: '52px',
      borderRadius: '12px',
      background: '#f0f0f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.4rem',
      color: '#1a1a2e',
    },
    cardInfo: {
      flex: 1,
    },
    cardTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#1a1a2e',
      marginBottom: '0.1rem',
    },
    cardSubtitle: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#6a6a8a',
      marginBottom: '0.3rem',
    },
    companyFull: {
      fontSize: '0.85rem',
      color: '#8888aa',
      fontWeight: '400',
    },
    cardMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.2rem',
      marginTop: '0.5rem',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.85rem',
      color: '#8888aa',
    },
    typeBadge: {
      display: 'inline-block',
      padding: '0.15rem 0.8rem',
      background: '#f0f0f5',
      borderRadius: '50px',
      fontSize: '0.7rem',
      fontWeight: '600',
      color: '#6a6a8a',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    toggleBtn: {
      padding: '0.3rem 0.6rem',
      background: '#f5f5f8',
      borderRadius: '50%',
      fontSize: '0.9rem',
      color: '#8888aa',
      transition: 'transform 0.3s ease',
      border: 'none',
      cursor: 'pointer',
    },
    // Expanded
    expandedContent: {
      marginTop: '1.5rem',
      paddingTop: '1.5rem',
      borderTop: '2px solid #f0f0f5',
    },
    description: {
      color: '#444466',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
      padding: '1rem 1.2rem',
      background: '#f8f8fa',
      borderRadius: '10px',
      fontSize: '0.95rem',
      borderLeft: '3px solid #1a1a2e',
    },
    sectionLabel: {
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#8888aa',
      marginBottom: '0.8rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    missionsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginBottom: '1.5rem',
    },
    missionItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.8rem',
      color: '#444466',
      padding: '0.5rem 0',
      lineHeight: '1.6',
      borderBottom: '1px solid #f5f5f8',
    },
    checkIcon: {
      color: '#1a1a2e',
      marginTop: '0.2rem',
      fontSize: '0.8rem',
      minWidth: '16px',
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    techTag: {
      padding: '0.3rem 1rem',
      background: '#1a1a2e',
      borderRadius: '50px',
      fontSize: '0.75rem',
      color: '#ffffff',
      fontWeight: '500',
    },
    // CTA
    cta: {
      marginTop: '2.5rem',
      padding: '2.5rem',
      background: '#1a1a2e',
      borderRadius: '16px',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '0.3rem',
    },
    ctaText: {
      color: '#a0a0be',
      marginBottom: '1.5rem',
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '0.8rem 2.5rem',
      background: '#ffffff',
      color: '#1a1a2e',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
  };

  const totalStages = stages.length;
  const totalTechnologies = [...new Set(stages.flatMap(s => s.technologies))].length;
  const totalCompanies = [...new Set(stages.map(s => s.title))].length;
  const totalMissions = stages.reduce((acc, stage) => acc + stage.missions.length, 0);

  // Gestion du hover avec state
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>✦ Mon Parcours</span>
          <h1 style={styles.title}>Expériences Professionnelles</h1>
          <p style={styles.subtitle}>Découvrez mon parcours à travers mes stages en développement</p>
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
                ...(isHovered ? styles.stageCardHover : {})
              }}
              onMouseEnter={() => setHoveredId(stage.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => toggleExpand(stage.id)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.iconWrapper}>
                  {stage.icon}
                </div>
                <div style={styles.cardInfo}>
                  <div style={styles.cardTop}>
                    <div>
                      <h3 style={styles.cardTitle}>{stage.title}</h3>
                      <p style={styles.cardSubtitle}>{stage.subtitle}</p>
                      <span style={styles.companyFull}>{stage.companyFull}</span>
                    </div>
                    <div style={{ 
                      ...styles.toggleBtn, 
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  <div style={styles.cardMeta}>
                    <span style={styles.metaItem}>
                      <FaCalendar size={13} />
                      {stage.period}
                    </span>
                    <span style={styles.metaItem}>
                      <FaMapMarker size={13} />
                      {stage.location}
                    </span>
                    <span style={styles.metaItem}>
                      <FaClock size={13} />
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
                    <FaTasks size={14} /> Missions réalisées
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
                    <FaCode size={14} /> Technologies utilisées
                  </div>
                  <div style={styles.techTags}>
                    {stage.technologies.map((tech, index) => (
                      <span key={index} style={styles.techTag}>
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
          <h3 style={styles.ctaTitle}>Prête pour de nouvelles aventures ?</h3>
          <p style={styles.ctaText}>Je suis disponible pour des opportunités en développement web</p>
          <Link 
            to="/contact" 
            style={styles.ctaButton}
            onMouseEnter={(e) => { 
              e.target.style.transform = 'translateY(-3px)'; 
              e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.2)'; 
            }}
            onMouseLeave={(e) => { 
              e.target.style.transform = 'translateY(0)'; 
              e.target.style.boxShadow = 'none'; 
            }}
          >
            Me contacter <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stages;