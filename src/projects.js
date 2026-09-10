import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './foter';
import { 
  FaGithub, FaExternalLinkAlt, FaCode, 
  FaDatabase, FaReact, FaNodeJs, FaLaravel,
  FaServer, FaMobileAlt, FaDesktop, FaCloud,
  FaSearch, FaFilter, FaTimes, FaArrowRight,
  FaStar, FaEye
} from 'react-icons/fa';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Gestion des Courriers - ONEE",
      description: "Application web pour la gestion des courriers avec gestion des droits d'accès selon les catégories d'utilisateurs.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "web",
      type: "Stage",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Gestion des courriers entrants/sortants",
        "Gestion des droits d'accès par catégorie",
        "Suivi des statuts des courriers",
        "Archivage et recherche avancée"
      ],
      icon: <FaServer />
    },
    {
      id: 2,
      title: "Application TNS - ASURYM",
      description: "Application de gestion des clients et contrats pour les Travailleurs Non Salariés dans le domaine de l'assurance.",
      technologies: ["Laravel", "React", "MySQL", "APIs REST"],
      category: "web",
      type: "Stage",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Gestion des clients et contrats",
        "Intégration d'APIs d'assurance",
        "Dashboard analytique",
        "Génération de rapports"
      ],
      icon: <FaLaravel />
    },
    {
      id: 3,
      title: "Portfolio React",
      description: "Mon portfolio personnel développé avec React, présentant mes compétences, projets et expériences professionnelles.",
      technologies: ["React", "CSS3", "React Router", "Framer Motion"],
      category: "web",
      type: "Personnel",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      github: "https://github.com",
      demo: "https://sihamlakmichi.com",
      features: [
        "Design responsive moderne",
        "Animations fluides",
        "Navigation optimisée",
        "Section projets dynamique"
      ],
      icon: <FaReact />
    },
    {
      id: 4,
      title: "Application E-commerce",
      description: "Plateforme e-commerce complète avec gestion de produits, panier, paiement et tableau de bord administrateur.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "web",
      type: "Personnel",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Catalogue de produits",
        "Panier d'achat",
        "Paiement sécurisé Stripe",
        "Dashboard administrateur"
      ],
      icon: <FaNodeJs />
    },
    {
      id: 5,
      title: "Application Mobile - Gestion de Tâches",
      description: "Application mobile de gestion de tâches avec synchronisation cloud et notifications push.",
      technologies: ["React Native", "Firebase", "Push Notifications"],
      category: "mobile",
      type: "Personnel",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "CRUD de tâches",
        "Synchronisation en temps réel",
        "Notifications push",
        "Mode hors-ligne"
      ],
      icon: <FaMobileAlt />
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Dashboard d'analytique avec visualisation de données, graphiques interactifs et rapports personnalisés.",
      technologies: ["React", "Chart.js", "APIs REST", "WebSocket"],
      category: "web",
      type: "Personnel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Graphiques interactifs",
        "Filtres dynamiques",
        "Export de rapports",
        "Données en temps réel"
      ],
      icon: <FaDatabase />
    },
    {
      id: 7,
      title: "API REST - Blog",
      description: "API REST complète pour un blog avec authentification JWT, gestion des articles et commentaires.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "api",
      type: "Personnel",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Authentification JWT",
        "CRUD articles et commentaires",
        "Pagination et filtrage",
        "Documentation Swagger"
      ],
      icon: <FaCloud />
    },
    {
      id: 8,
      title: "Site Vitrine - Agence",
      description: "Site vitrine moderne pour une agence digitale avec animations, formulaire de contact et intégration CMS.",
      technologies: ["React", "Tailwind CSS", "EmailJS", "React Router"],
      category: "web",
      type: "Personnel",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Design moderne",
        "Animations au scroll",
        "Formulaire de contact",
        "Optimisation SEO"
      ],
      icon: <FaDesktop />
    }
  ];

  // Filtres
  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'api', label: 'API' }
  ];

  // Filtrer les projets
  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const styles = {
    container: {
      minHeight: '100vh',
      padding: isSmallMobile ? '100px 16px 60px' : isMobile ? '110px 24px 70px' : '120px 40px 80px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    wrapper: {
      maxWidth: '1200px',
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
    // Search & Filters
    controls: {
      display: 'flex',
      flexDirection: isSmallMobile ? 'column' : isMobile ? 'column' : 'row',
      gap: '1rem',
      marginBottom: isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '3rem',
      alignItems: isSmallMobile ? 'stretch' : isMobile ? 'stretch' : 'center',
      justifyContent: 'space-between',
    },
    searchWrapper: {
      position: 'relative',
      flex: '1',
      maxWidth: isSmallMobile ? '100%' : isMobile ? '100%' : '400px',
    },
    searchInput: {
      width: '100%',
      padding: '0.8rem 1rem 0.8rem 2.8rem',
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
      background: '#ffffff',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
    },
    searchIcon: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#b2bec3',
    },
    filterWrapper: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    filterBtn: {
      padding: '0.6rem 1.2rem',
      borderRadius: '50px',
      border: '1px solid #e0e0e0',
      background: '#ffffff',
      color: '#636e72',
      fontSize: isSmallMobile ? '0.8rem' : '0.85rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
    },
    filterBtnActive: {
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      color: '#ffffff',
      borderColor: 'transparent',
      boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
    },
    // Project Grid
    grid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
      gap: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '2rem',
    },
    // Project Card
    projectCard: {
      background: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 25px rgba(0,0,0,0.06)',
      border: '1px solid #f0f0f0',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    projectCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
      borderColor: 'rgba(108, 92, 231, 0.2)',
    },
    projectImage: {
      width: '100%',
      height: isSmallMobile ? '180px' : isMobile ? '200px' : '220px',
      objectFit: 'cover',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
    },
    projectContent: {
      padding: isSmallMobile ? '1.2rem' : isMobile ? '1.5rem' : '1.8rem',
    },
    projectType: {
      display: 'inline-block',
      padding: '0.2rem 0.8rem',
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      borderRadius: '50px',
      fontSize: '0.65rem',
      fontWeight: '600',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '0.5rem',
    },
    projectTitle: {
      fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.2rem' : '1.3rem',
      fontWeight: '700',
      color: '#2d3436',
      marginBottom: '0.5rem',
    },
    projectDescription: {
      color: '#636e72',
      fontSize: isSmallMobile ? '0.85rem' : isMobile ? '0.9rem' : '0.95rem',
      lineHeight: '1.6',
      marginBottom: '1rem',
    },
    projectTechs: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.4rem',
      marginBottom: '1rem',
    },
    techTag: {
      padding: '0.2rem 0.7rem',
      background: '#f0f0f0',
      borderRadius: '50px',
      fontSize: '0.7rem',
      color: '#636e72',
      fontWeight: '500',
    },
    projectLinks: {
      display: 'flex',
      gap: '0.8rem',
      borderTop: '1px solid #f0f0f0',
      paddingTop: '1rem',
    },
    linkBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.4rem 1rem',
      borderRadius: '50px',
      background: '#f8f9fa',
      color: '#2d3436',
      textDecoration: 'none',
      fontSize: '0.8rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      border: '1px solid #e0e0e0',
    },
    linkBtnGithub: {
      background: '#2d3436',
      color: '#ffffff',
      borderColor: '#2d3436',
    },
    linkBtnDemo: {
      background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
      color: '#ffffff',
      borderColor: 'transparent',
    },
    // Empty State
    emptyState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: '#ffffff',
      borderRadius: '16px',
    },
    emptyIcon: {
      fontSize: '4rem',
      color: '#b2bec3',
      marginBottom: '1rem',
    },
    emptyTitle: {
      fontSize: '1.5rem',
      color: '#2d3436',
      marginBottom: '0.5rem',
    },
    emptyText: {
      color: '#636e72',
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

  return (
    <>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          {/* Header */}
          <div style={styles.header}>
            <span style={styles.badge}>✦ Mes Réalisations</span>
            <h1 style={styles.title}>Projets</h1>
            <p style={styles.subtitle}>
              Découvrez mes projets personnels et professionnels en développement web
            </p>
          </div>

          {/* Search & Filters */}
          <div style={styles.controls}>
            <div style={styles.searchWrapper}>
              <FaSearch style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6c5ce7';
                  e.target.style.boxShadow = '0 0 0 3px rgba(108, 92, 231, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div style={styles.filterWrapper}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  style={{
                    ...styles.filterBtn,
                    ...(activeFilter === filter.id ? styles.filterBtnActive : {})
                  }}
                  onClick={() => setActiveFilter(filter.id)}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter.id) {
                      e.target.style.borderColor = '#6c5ce7';
                      e.target.style.color = '#6c5ce7';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter.id) {
                      e.target.style.borderColor = '#e0e0e0';
                      e.target.style.color = '#636e72';
                    }
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div style={styles.grid}>
              {filteredProjects.map((project) => {
                const isHovered = hoveredProject === project.id;
                return (
                  <div
                    key={project.id}
                    style={{
                      ...styles.projectCard,
                      ...(isHovered && !isSmallMobile ? styles.projectCardHover : {})
                    }}
                    onMouseEnter={() => !isSmallMobile && setHoveredProject(project.id)}
                    onMouseLeave={() => !isSmallMobile && setHoveredProject(null)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={styles.projectImage}
                      loading="lazy"
                    />
                    <div style={styles.projectContent}>
                      <span style={styles.projectType}>{project.type}</span>
                      <h3 style={styles.projectTitle}>{project.title}</h3>
                      <p style={styles.projectDescription}>{project.description}</p>
                      <div style={styles.projectTechs}>
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span key={index} style={styles.techTag}>{tech}</span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span style={styles.techTag}>+{project.technologies.length - 4}</span>
                        )}
                      </div>
                      <div style={styles.projectLinks}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            ...styles.linkBtn,
                            ...styles.linkBtnGithub
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <FaGithub /> Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            ...styles.linkBtn,
                            ...styles.linkBtnDemo
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 20px rgba(108, 92, 231, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <FaExternalLinkAlt /> Démo
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>🔍</div>
              <h3 style={styles.emptyTitle}>Aucun projet trouvé</h3>
              <p style={styles.emptyText}>
                Aucun projet ne correspond à votre recherche. Essayez d'autres mots-clés.
              </p>
            </div>
          )}

          {/* CTA */}
          <div style={styles.cta}>
            <div style={styles.ctaDecoration}></div>
            <h3 style={styles.ctaTitle}>Vous avez un projet en tête ?</h3>
            <p style={styles.ctaText}>
              Je suis disponible pour collaborer sur des projets innovants
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

export default Projects;