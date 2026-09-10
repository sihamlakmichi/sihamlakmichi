import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython,
  FaLaravel, FaReact, FaBrain, FaLanguage,
  FaUsers, FaComments, FaLightbulb, FaClock, FaHandshake,
  FaChartLine, FaPuzzlePiece, FaSync, FaCode
} from 'react-icons/fa';
import { SiNextdotjs, SiMysql } from 'react-icons/si';

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // ===== DONNÉES =====
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 95, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, level: 95, color: '#F7DF1E' },
    { name: 'PHP', icon: <FaPhp />, level: 95, color: '#777BB4' },
    { name: 'Python', icon: <FaPython />, level: 95, color: '#3776AB' },
    { name: 'MySQL', icon: <SiMysql />, level: 95, color: '#4479A1' },
    { name: 'Algorithmes', icon: <FaBrain />, level: 95, color: '#00c6ff' },
    { name: 'Laravel', icon: <FaLaravel />, level: 95, color: '#FF2D20' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 95, color: '#ffffff' },
    { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB' }
  ];

  const languages = [
    { name: 'Français', level: 'Courant', percent: 100, flag: '🇫🇷', color: '#0055A4' },
    { name: 'Anglais', level: 'Professionnel', percent: 100, flag: '🇬🇧', color: '#CF142B' },
    { name: 'Allemand', level: 'Niveau B1', percent: 100, flag: '🇩🇪', color: '#FFCE00' }
  ];

  const softSkills = [
    { name: 'Communication', icon: <FaComments />, desc: 'Écoute active et expression claire', color: '#00c6ff' },
    { name: 'Travail en équipe', icon: <FaUsers />, desc: 'Collaboration et entraide', color: '#8b5cf6' },
    { name: 'Résolution de problèmes', icon: <FaLightbulb />, desc: 'Analyse et créativité', color: '#f59e0b' },
    { name: 'Gestion du temps', icon: <FaClock />, desc: 'Organisation et priorités', color: '#10b981' },
    { name: 'Adaptabilité', icon: <FaSync />, desc: 'Flexibilité et apprentissage rapide', color: '#ec4899' },
    { name: 'Esprit d\'équipe', icon: <FaHandshake />, desc: 'Coopération et respect', color: '#06b6d4' },
    { name: 'Créativité', icon: <FaPuzzlePiece />, desc: 'Innovation et originalité', color: '#f43f5e' },
    { name: 'Leadership', icon: <FaChartLine />, desc: 'Initiative et responsabilité', color: '#a855f7' }
  ];

  const categories = [
    { id: 'all', label: 'Tout', icon: <FaCode /> },
    { id: 'technical', label: 'Technique', icon: <FaCode /> },
    { id: 'languages', label: 'Langues', icon: <FaLanguage /> },
    { id: 'soft', label: 'Soft Skills', icon: <FaUsers /> }
  ];

  // ===== STYLES =====
  const styles = {
    container: {
      minHeight: '100vh',
      padding: isMobile ? '80px 16px 40px' : isTablet ? '100px 24px 60px' : '120px 40px 80px',
      background: 'linear-gradient(145deg, #0a0e27 0%, #1a1f3a 50%, #0d1230 100%)',
      color: '#fff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    },

    backgroundDecoration: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      background: `
        radial-gradient(circle at 15% 20%, rgba(0, 198, 255, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 85% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(0, 114, 255, 0.05) 0%, transparent 70%)
      `,
      pointerEvents: 'none'
    },

    // Particules animées en arrière-plan
    particles: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    },

    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },

    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '32px' : '48px',
      animation: 'fadeInDown 0.8s ease-out'
    },

    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '50px',
      background: 'rgba(0, 198, 255, 0.1)',
      border: '1px solid rgba(0, 198, 255, 0.2)',
      color: '#00c6ff',
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      animation: 'pulse 2s ease-in-out infinite'
    },

    title: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.8rem' : '3.5rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #ffffff 0%, #00c6ff 50%, #a0aec0 100%)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.2,
      animation: 'shimmer 3s linear infinite'
    },

    subtitle: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: 'rgba(255,255,255,0.6)',
      textAlign: 'center',
      maxWidth: '650px',
      margin: '0 auto',
      lineHeight: 1.6,
      padding: isMobile ? '0 10px' : '0',
      animation: 'fadeInUp 1s ease-out 0.2s both'
    },

    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '8px' : '12px',
      marginBottom: isMobile ? '32px' : '48px',
      padding: isMobile ? '0 8px' : '0',
      animation: 'fadeInUp 1s ease-out 0.4s both'
    },

    filterBtn: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: isMobile ? '10px 16px' : '12px 22px',
      borderRadius: '50px',
      border: isActive ? '1px solid rgba(0, 198, 255, 0.5)' : '1px solid rgba(255,255,255,0.1)',
      background: isActive 
        ? 'linear-gradient(135deg, rgba(0, 198, 255, 0.25), rgba(0, 114, 255, 0.25))' 
        : 'rgba(255,255,255,0.04)',
      color: isActive ? '#00c6ff' : 'rgba(255,255,255,0.7)',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'inherit',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isActive ? '0 8px 24px rgba(0, 198, 255, 0.25)' : 'none'
    }),

    section: (isVisible) => ({
      marginBottom: isMobile ? '48px' : '64px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    }),

    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: isMobile ? '24px' : '32px',
      paddingBottom: '16px',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    },

    sectionIcon: {
      width: isMobile ? '40px' : '48px',
      height: isMobile ? '40px' : '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.15), rgba(0, 114, 255, 0.15))',
      color: '#00c6ff',
      fontSize: isMobile ? '1rem' : '1.2rem',
      animation: 'rotateIn 0.8s ease-out'
    },

    sectionTitle: {
      fontSize: isMobile ? '1.3rem' : '1.6rem',
      fontWeight: '700',
      margin: 0,
      color: '#fff'
    },

    sectionCount: {
      marginLeft: 'auto',
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.4)',
      background: 'rgba(255,255,255,0.05)',
      padding: '6px 12px',
      borderRadius: '50px',
      fontWeight: '600',
      animation: 'pulse 2s ease-in-out infinite'
    },

    // ===== TECHNICAL =====
    techGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile 
        ? 'repeat(2, 1fr)' 
        : isTablet 
          ? 'repeat(3, 1fr)' 
          : 'repeat(5, 1fr)',
      gap: isMobile ? '12px' : '16px'
    },

    techCard: (hovered, color, index) => ({
      padding: isMobile ? '16px 12px' : '20px 16px',
      background: hovered 
        ? `linear-gradient(135deg, ${color}15, rgba(255,255,255,0.03))`
        : 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: hovered ? `1px solid ${color}66` : '1px solid rgba(255,255,255,0.08)',
      textAlign: 'center',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      transform: hovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
      boxShadow: hovered ? `0 16px 40px ${color}33` : 'none',
      animation: `fadeInScale 0.6s ease-out ${index * 0.08}s both`,
      position: 'relative',
      overflow: 'hidden'
    }),

    techIcon: (color, hovered) => ({
      fontSize: isMobile ? '1.8rem' : '2.2rem',
      color: color,
      marginBottom: '10px',
      transition: 'all 0.4s ease',
      transform: hovered ? 'scale(1.2) rotate(8deg)' : 'scale(1) rotate(0deg)',
      filter: hovered ? `drop-shadow(0 0 12px ${color})` : 'none',
      display: 'inline-block'
    }),

    techName: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontWeight: '600',
      color: '#fff',
      marginBottom: '8px'
    },

    progressBar: {
      width: '100%',
      height: '5px',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '50px',
      overflow: 'hidden',
      position: 'relative'
    },

    progressFill: (level, color, index) => ({
      height: '100%',
      width: `${level}%`,
      background: `linear-gradient(90deg, ${color}, ${color}cc, ${color})`,
      backgroundSize: '200% 100%',
      borderRadius: '50px',
      animation: `progressGrow 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both, progressShine 2s linear infinite`,
      boxShadow: `0 0 12px ${color}99`,
      position: 'relative'
    }),

    techLevel: (color) => ({
      fontSize: '0.7rem',
      color: color,
      marginTop: '6px',
      fontWeight: '700'
    }),

    // ===== LANGUAGES =====
    langGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '16px' : '20px'
    },

    langCard: (hovered, color, index) => ({
      padding: isMobile ? '20px' : '24px',
      background: hovered 
        ? `linear-gradient(135deg, ${color}15, rgba(255,255,255,0.03))`
        : 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '18px',
      border: hovered ? `1px solid ${color}66` : '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: hovered ? `0 16px 40px ${color}33` : 'none',
      animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`
    }),

    langHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },

    langFlag: (hovered) => ({
      fontSize: isMobile ? '2rem' : '2.4rem',
      lineHeight: 1,
      transition: 'all 0.4s ease',
      transform: hovered ? 'scale(1.3) rotate(-10deg)' : 'scale(1) rotate(0deg)',
      display: 'inline-block'
    }),

    langBadge: (color) => ({
      padding: '4px 12px',
      borderRadius: '50px',
      background: `${color}22`,
      border: `1px solid ${color}44`,
      color: color,
      fontSize: '0.7rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }),

    langName: {
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '4px'
    },

    langLevel: {
      fontSize: '0.85rem',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: '16px'
    },

    // ===== SOFT SKILLS =====
    softGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile 
        ? '1fr' 
        : isTablet 
          ? 'repeat(2, 1fr)' 
          : 'repeat(4, 1fr)',
      gap: isMobile ? '12px' : '16px'
    },

    softCard: (hovered, color, index) => ({
      padding: isMobile ? '18px' : '22px',
      background: hovered 
        ? `linear-gradient(135deg, ${color}15, rgba(255,255,255,0.03))`
        : 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: hovered ? `1px solid ${color}66` : '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: hovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
      boxShadow: hovered ? `0 16px 40px ${color}33` : 'none',
      cursor: 'pointer',
      animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
    }),

    softIcon: (color, hovered) => ({
      width: isMobile ? '44px' : '52px',
      height: isMobile ? '44px' : '52px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `${color}22`,
      color: color,
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      marginBottom: '14px',
      transition: 'all 0.4s ease',
      transform: hovered ? 'scale(1.15) rotate(10deg)' : 'scale(1) rotate(0deg)',
      boxShadow: hovered ? `0 0 20px ${color}66` : 'none'
    }),

    softName: {
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '6px'
    },

    softDesc: {
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.5)',
      lineHeight: 1.5
    },

    // ===== STATS =====
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '12px' : '16px',
      marginTop: isMobile ? '40px' : '60px'
    },

    statCard: (index) => ({
      padding: isMobile ? '20px 16px' : '28px 20px',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '18px',
      border: '1px solid rgba(255,255,255,0.08)',
      textAlign: 'center',
      transition: 'all 0.4s ease',
      animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      cursor: 'pointer'
    }),

    statNumber: {
      fontSize: isMobile ? '1.8rem' : '2.4rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #00c6ff, #0072ff, #8b5cf6)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '4px',
      animation: 'shimmer 3s linear infinite'
    },

    statLabel: {
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      color: 'rgba(255,255,255,0.5)',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  };

  // ===== RENDER =====
  const renderTechnical = () => (
    <div 
      id="technical"
      ref={(el) => (sectionRefs.current['technical'] = el)}
      style={styles.section(visibleSections['technical'] !== false)}
    >
      <div style={styles.sectionHeader}>
        <div style={styles.sectionIcon}><FaCode /></div>
        <h2 style={styles.sectionTitle}>Compétences techniques</h2>
        <span style={styles.sectionCount}>{technicalSkills.length}</span>
      </div>
      <div style={styles.techGrid}>
        {technicalSkills.map((skill, i) => (
          <div
            key={i}
            style={styles.techCard(hoveredSkill === `tech-${i}`, skill.color, i)}
            onMouseEnter={() => setHoveredSkill(`tech-${i}`)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div style={styles.techIcon(skill.color, hoveredSkill === `tech-${i}`)}>
              {skill.icon}
            </div>
            <div style={styles.techName}>{skill.name}</div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill(skill.level, skill.color, i)} />
            </div>
            <div style={styles.techLevel(skill.color)}>{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLanguages = () => (
    <div 
      id="languages"
      ref={(el) => (sectionRefs.current['languages'] = el)}
      style={styles.section(visibleSections['languages'] !== false)}
    >
      <div style={styles.sectionHeader}>
        <div style={styles.sectionIcon}><FaLanguage /></div>
        <h2 style={styles.sectionTitle}>Langues</h2>
        <span style={styles.sectionCount}>{languages.length}</span>
      </div>
      <div style={styles.langGrid}>
        {languages.map((lang, i) => (
          <div
            key={i}
            style={styles.langCard(hoveredSkill === `lang-${i}`, lang.color, i)}
            onMouseEnter={() => setHoveredSkill(`lang-${i}`)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div style={styles.langHeader}>
              <span style={styles.langFlag(hoveredSkill === `lang-${i}`)}>{lang.flag}</span>
              <span style={styles.langBadge(lang.color)}>{lang.level}</span>
            </div>
            <div style={styles.langName}>{lang.name}</div>
            <div style={styles.langLevel}>Maîtrise : {lang.percent}%</div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill(lang.percent, lang.color, i)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSoftSkills = () => (
    <div 
      id="soft"
      ref={(el) => (sectionRefs.current['soft'] = el)}
      style={styles.section(visibleSections['soft'] !== false)}
    >
      <div style={styles.sectionHeader}>
        <div style={styles.sectionIcon}><FaUsers /></div>
        <h2 style={styles.sectionTitle}>Soft Skills</h2>
        <span style={styles.sectionCount}>{softSkills.length}</span>
      </div>
      <div style={styles.softGrid}>
        {softSkills.map((skill, i) => (
          <div
            key={i}
            style={styles.softCard(hoveredSkill === `soft-${i}`, skill.color, i)}
            onMouseEnter={() => setHoveredSkill(`soft-${i}`)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div style={styles.softIcon(skill.color, hoveredSkill === `soft-${i}`)}>
              {skill.icon}
            </div>
            <div style={styles.softName}>{skill.name}</div>
            <div style={styles.softDesc}>{skill.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.backgroundDecoration} />
      
      {/* Particules flottantes */}
      <div style={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              borderRadius: '50%',
              background: i % 3 === 0 ? '#00c6ff' : i % 3 === 1 ? '#8b5cf6' : '#0072ff',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
              animation: `float ${Math.random() * 10 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <FaBrain size={12} />
            Mes compétences
          </div>
          <h1 style={styles.title}>Ce que je maîtrise</h1>
          <p style={styles.subtitle}>
            Un aperçu de mes compétences techniques, linguistiques et humaines 
            développées tout au long de mon parcours.
          </p>
        </div>

        {/* Filtres */}
        <div style={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={styles.filterBtn(activeCategory === cat.id)}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sections */}
        {(activeCategory === 'all' || activeCategory === 'technical') && renderTechnical()}
        {(activeCategory === 'all' || activeCategory === 'languages') && renderLanguages()}
        {(activeCategory === 'all' || activeCategory === 'soft') && renderSoftSkills()}

        {/* Stats */}
        <div style={styles.statsGrid}>
          {[
            { num: '10+', label: 'Technologies' },
            { num: '3', label: 'Langues' },
            { num: '8+', label: 'Soft Skills' },
            { num: '100%', label: 'Motivation' }
          ].map((stat, i) => (
            <div
              key={i}
              style={styles.statCard(i)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.borderColor = 'rgba(0, 198, 255, 0.4)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 198, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.statNumber}>{stat.num}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.85) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes progressGrow {
            from { width: 0%; }
          }

          @keyframes progressShine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }

          @keyframes rotateIn {
            from { transform: rotate(-180deg) scale(0); opacity: 0; }
            to { transform: rotate(0deg) scale(1); opacity: 1; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
            25% { transform: translateY(-30px) translateX(15px); opacity: 0.7; }
            50% { transform: translateY(-15px) translateX(-15px); opacity: 0.5; }
            75% { transform: translateY(-40px) translateX(10px); opacity: 0.8; }
          }

          * { box-sizing: border-box; }

          ::selection {
            background: rgba(0, 198, 255, 0.3);
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;