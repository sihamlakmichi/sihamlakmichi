import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsSmallMobile(w <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ TES PROJETS
  const projects = [
    {
      id: 1,
      title: "ONEE - Gestion des courriers",
      description: "Application de gestion des courriers avec droits d'accès.",
      image: "img/onee.png",
      demo: "https://onee-demo.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 2,
      title: "ASURYM - Assurance TNS",
      description: "Gestion clients et contrats assurance.",
      image: "img/assurym.png",
      demo: "https://asurym-demo.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Portfolio React professionnel.",
      image: "img/portfolio.png",
      demo: "https://portfolio-demo.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 4,
      title: "GM Industry",
      description: "E-commerce équipements industriels.",
      image: "img/gm-industry.png",
      demo: "https://gm-industry.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 5,
      title: "FastFood App",
      description: "Application de commande food online.",
      image: "img/fastfood.png",
      demo: "https://fastfood-demo.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 6,
      title: "MaroFit Academy",
      description: "Plateforme coaching fitness en ligne.",
      image: "img/marofit.png",
      demo: "https://marofit-demo.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 7,
      title: "MadeSprach - Learning Center",
      description: "Site de formation langues (FR/DE/EN).",
      image: "img/madesprach.png",
      demo: "https://madesprach.com",
      github: "https://github.com",
      category: "web"
    },
    {
      id: 8,
      title: "Gestion Infractions Routières",
      description: "Système de gestion des infractions routières.",
      image: "img/infractions.png",
      demo: "https://infractions-demo.com",
      github: "https://github.com",
      category: "web"
    }
  ];

  const filtered = projects.filter(p =>
    (activeFilter === 'all' || p.category === activeFilter) &&
    (p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const styles = {
    container: {
      minHeight: '100vh',
      padding: isSmallMobile ? '90px 15px' : '120px 40px',
      background: 'linear-gradient(135deg,#f8f9fa,#e9ecef)',
      fontFamily: 'Arial'
    },

    wrapper: {
      maxWidth: '1200px',
      margin: 'auto'
    },

    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },

    title: {
      fontSize: isSmallMobile ? '2rem' : '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg,#6c5ce7,#0984e3)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },

    controls: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '15px',
      marginBottom: '30px'
    },

    search: {
      flex: 1,
      padding: '10px',
      borderRadius: '10px',
      border: '1px solid #ddd'
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile
        ? '1fr'
        : isMobile
        ? '1fr'
        : 'repeat(3,1fr)',
      gap: '20px'
    },

    card: {
      background: '#fff',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
    },

    img: {
      width: '100%',
      height: '180px',
      objectFit: 'cover'
    },

    content: {
      padding: '15px'
    },

    links: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px'
    },

    btn: {
      padding: '6px 12px',
      borderRadius: '20px',
      textDecoration: 'none',
      fontSize: '0.8rem'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>Mes Projets</h1>
        </div>

        {/* SEARCH */}
        <div style={styles.controls}>
          <input
            style={styles.search}
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* GRID */}
        <div style={styles.grid}>
          {filtered.map(p => (
            <div key={p.id} style={styles.card}>
              <img src={p.image} style={styles.img} alt={p.title} />

              <div style={styles.content}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div style={styles.links}>
                  <a
                    href={p.github}
                    target="_blank"
                    style={{ ...styles.btn, background: '#333', color: '#fff' }}
                  >
                    GitHub
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    style={{ ...styles.btn, background: '#6c5ce7', color: '#fff' }}
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;