import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalProject, setModalProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🎯 Swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const minSwipeDistance = 50;

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

  // Bloquer le scroll quand la modale est ouverte
  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [modalProject]);

  // ✅ TES PROJETS
  const projects = [
    {
      id: 1,
      title: "ONEE - Gestion des courriers",
      description: "Application de gestion des courriers avec droits d'accès.",
      image: "img/onee.png",
      images: ["img/onee.png", "img/onee-2.png", "img/onee-3.png", "img/onee-4.png"],
      demo: null,
      github: null,
      category: "web"
    },
    {
      id: 2,
      title: "ASURYM - Assurance TNS",
      description: "Gestion clients et contrats assurance.",
      image: "img/assurym.png",
      images: ["img/assurym.png", "img/assurym-2.png", "img/assurym-3.png", "img/assurym-4.png", "img/assurym-5.png"],
      demo: null,
      github: null,
      category: "web"
    },
    {
      id: 3,
      title: "Portfolio Personnel",
      description: "Portfolio React professionnel.",
      image: "img/portfolio.png",
      demo: "https://sihamm.vercel.app/",
      github: "https://github.com/sihamlakmichi/sihamlakmichi",
      category: "web"
    },
    {
      id: 4,
      title: "GM Industry",
      description: "E-commerce équipements industriels.",
      image: "img/gm-industry.png",
      demo: "https://gm6.vercel.app/",
      github: "https://github.com/sihamlakmichi/gm6",
      category: "web"
    },
    {
      id: 5,
      title: "FastFood App",
      description: "Application de commande food online.",
      image: "img/fastfood.png",
      images: ["img/fastfood.png", "img/fastfood-2.png", "img/fastfood-3.png"],
      demo: "https://ikhlas-food.vercel.app/",
      github: null,
      category: "web"
    },
    {
      id: 6,
      title: "MaroFit Academy",
      description: "Plateforme coaching fitness en ligne.",
      image: "img/marofit.png",
      images: ["img/marofit.png", "img/marofit-2.png", "img/marofit-3.png"],
      demo: "https://marofitacademy.vercel.app/",
      github: null,
      category: "web"
    },
    {
      id: 7,
      title: "MadeSprach - Learning Center",
      description: "Site de formation langues (FR/DE/EN).",
      image: "img/madesprach.png",
      images: ["img/madesprach.png", "img/madesprach-2.png", "img/madesprach-3.png"],
      demo: "https://madesprachzentrum.vercel.app/",
      github: null,
      category: "web"
    },
    {
      id: 8,
      title: "Gestion Infractions Routières",
      description: "Système de gestion des infractions routières.",
      image: "img/infractions.png",
      images: ["img/infractions.png", "img/infractions-1.png", "img/infractions-3.png", "img/infractions-4.png", "img/infractions-5.png", "img/infractions-6.png"],
      demo: null,
      github: null,
      category: "web"
    }
  ];

  // Filtrage uniquement par recherche
  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // === Galerie ===
  const openGallery = (project) => {
    setModalProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setModalProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!modalProject) return;
    setCurrentImageIndex((prev) =>
      prev === modalProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!modalProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? modalProject.images.length - 1 : prev - 1
    );
  };

  // 🎯 Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd || touchStartY === null) return;

    const distanceX = touchStart - touchEnd;
    const distanceY = touchStartY - e.changedTouches[0].clientY;

    if (Math.abs(distanceY) > Math.abs(distanceX)) return;

    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  // Navigation clavier
  useEffect(() => {
    const handleKey = (e) => {
      if (!modalProject) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalProject]);

  // ✅ CSS animations - cartes TOUJOURS VISIBLES, pas de fade
  const animationStyles = `
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    /* ✅ NOUVELLE ANIMATION : brillance qui traverse la carte */
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 200%; }
    }

    /* ✅ NOUVELLE ANIMATION : bordure lumineuse qui tourne */
    @keyframes borderGlow {
      0%, 100% { 
        box-shadow: 0 5px 20px rgba(0,0,0,0.08);
      }
      50% { 
        box-shadow: 0 5px 25px rgba(108, 92, 231, 0.25);
      }
    }

    .projects-title {
      background-size: 200% 200% !important;
      animation: gradientShift 4s ease infinite, fadeInDown 0.8s ease;
    }

    /* ✅ Cartes : toujours visibles, pas d'opacity 0 */
    .project-card {
      animation: borderGlow 3s ease-in-out infinite;
    }

    .project-img-wrapper {
      overflow: hidden;
      position: relative;
    }

    /* ✅ Effet brillance sur l'image au survol desktop */
    .project-img-wrapper::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transform: skewX(-20deg);
      pointer-events: none;
    }

    .project-img {
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      display: block;
    }

    .modal-content-anim {
      animation: scaleIn 0.3s ease forwards;
    }

    .search-input:focus {
      border-color: #6c5ce7 !important;
      box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.15) !important;
    }

    .search-input {
      transition: all 0.3s ease;
    }

    .close-btn-anim {
      transition: transform 0.25s ease, color 0.25s ease;
    }

    .nav-btn-anim {
      transition: transform 0.25s ease, background 0.25s ease;
    }

    .nav-btn-anim:active {
      transform: translateY(-50%) scale(0.95) !important;
    }

    .dot-anim {
      transition: all 0.3s ease;
    }

    .dot-anim.active {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(108, 92, 231, 0.6);
    }

    /* ✅ HOVER UNIQUEMENT sur desktop */
    @media (hover: hover) and (pointer: fine) {
      .project-card:hover {
        transform: translateY(-8px) !important;
        box-shadow: 0 15px 40px rgba(108, 92, 231, 0.3) !important;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
      }

      /* ✅ Brillance traverse l'image au survol */
      .project-card:hover .project-img-wrapper::after {
        animation: shimmer 0.8s ease;
      }

      .project-card:hover .project-img {
        transform: scale(1.1);
      }

      .card-btn:hover {
        transform: translateY(-2px) scale(1.05);
        filter: brightness(1.1);
      }

      .close-btn-anim:hover {
        transform: rotate(90deg) scale(1.15);
        color: #6c5ce7 !important;
      }

      .nav-btn-anim:hover {
        transform: translateY(-50%) scale(1.15) !important;
        background: #6c5ce7 !important;
        color: #fff !important;
      }

      .dot-anim:hover {
        transform: scale(1.3);
      }
    }

    /* ✅ Feedback tactile sur mobile */
    @media (hover: none) {
      .project-card:active {
        transform: scale(0.98);
        transition: transform 0.15s ease;
      }

      .card-btn:active {
        transform: scale(0.95);
        transition: transform 0.15s ease;
      }
    }
  `;

  const styles = {
    container: {
      minHeight: '100vh',
      padding: isSmallMobile ? '90px 15px' : '120px 40px',
      background: 'linear-gradient(135deg,#f8f9fa,#e9ecef)',
      fontFamily: 'Arial'
    },

    wrapper: { maxWidth: '1200px', margin: 'auto' },

    header: { textAlign: 'center', marginBottom: '40px' },

    title: {
      fontSize: isSmallMobile ? '2rem' : '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg,#6c5ce7,#0984e3,#6c5ce7)',
      backgroundSize: '200% 200%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    },

    controls: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '40px',
      alignItems: 'center'
    },

    search: {
      flex: 1,
      padding: '12px 18px',
      borderRadius: '25px',
      border: '2px solid #ddd',
      width: isMobile ? '100%' : '60%',
      maxWidth: '500px',
      outline: 'none',
      fontSize: '1rem'
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? '1fr' : 'repeat(3,1fr)',
      gap: '25px'
    },

    card: {
      background: '#fff',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      position: 'relative'
    },

    imgWrapper: {
      overflow: 'hidden',
      position: 'relative',
      height: '180px'
    },

    img: { width: '100%', height: '100%', objectFit: 'cover' },

    content: { padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 },

    cardTitle: { margin: '0 0 8px', fontSize: '1.05rem', color: '#2d3436' },

    cardDesc: { margin: '0 0 15px', fontSize: '0.9rem', color: '#636e72', flex: 1 },

    links: { display: 'flex', gap: '10px', marginTop: 'auto', flexWrap: 'wrap' },

    btn: {
      padding: '7px 16px',
      borderRadius: '20px',
      textDecoration: 'none',
      fontSize: '0.8rem',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      border: 'none',
      cursor: 'pointer'
    },

    empty: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#888',
      fontSize: '1.1rem',
      gridColumn: '1 / -1'
    },

    // === MODALE ===
    modalOverlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: isSmallMobile ? '10px' : '30px',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    },

    modalContent: {
      position: 'relative',
      background: '#fff',
      borderRadius: '15px',
      maxWidth: '900px',
      width: '100%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      overflow: 'hidden'
    },

    modalHeader: {
      padding: '15px 20px',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      background: '#fff'
    },

    modalTitle: { margin: 0, fontSize: '1.1rem', color: '#2d3436' },

    closeBtn: {
      background: 'transparent',
      border: 'none',
      fontSize: '1.3rem',
      cursor: 'pointer',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      touchAction: 'manipulation'
    },

    imageContainer: {
      position: 'relative',
      background: '#000',
      width: '100%',
      height: isSmallMobile ? '60vh' : '70vh',
      flexShrink: 0,
      overflow: 'hidden'
    },

    modalImg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      display: 'block'
    },

    navBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.9)',
      border: 'none',
      borderRadius: '50%',
      width: isSmallMobile ? '46px' : '42px',
      height: isSmallMobile ? '46px' : '42px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isSmallMobile ? '1.2rem' : '1rem',
      color: '#333',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      zIndex: 2,
      touchAction: 'manipulation',
      userSelect: 'none'
    },

    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      padding: '15px',
      background: '#fff',
      flexShrink: 0
    },

    dot: (isActive) => ({
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: isActive ? '#6c5ce7' : '#ccc',
      padding: 0,
      touchAction: 'manipulation'
    }),

    counter: {
      position: 'absolute',
      bottom: '10px',
      right: '15px',
      background: 'rgba(0,0,0,0.6)',
      color: '#fff',
      padding: '4px 10px',
      borderRadius: '15px',
      fontSize: '0.8rem',
      zIndex: 3
    }
  };

  return (
    <div style={styles.container}>
      <style>{animationStyles}</style>

      <div style={styles.wrapper}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title} className="projects-title">Mes Projets</h1>
        </div>

        {/* SEARCH */}
        <div style={styles.controls}>
          <input
            className="search-input"
            style={styles.search}
            placeholder="🔎 Rechercher un projet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* GRID */}
        <div style={styles.grid}>
          {filtered.length === 0 ? (
            <div style={styles.empty}>Aucun projet trouvé 😕</div>
          ) : (
            filtered.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={styles.card}
              >
                <div className="project-img-wrapper" style={styles.imgWrapper}>
                  <img
                    src={p.image}
                    className="project-img"
                    style={styles.img}
                    alt={p.title}
                  />
                </div>

                <div style={styles.content}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardDesc}>{p.description}</p>

                  <div style={styles.links}>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-btn"
                        style={{ ...styles.btn, background: '#333', color: '#fff' }}
                      >
                        <FaGithub /> GitHub
                      </a>
                    ) : (
                      <span
                        style={{
                          ...styles.btn,
                          background: '#eee',
                          color: '#666',
                          cursor: 'default'
                        }}
                      >
                        🔒 Privé
                      </span>
                    )}

                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-btn"
                        style={{ ...styles.btn, background: '#6c5ce7', color: '#fff' }}
                      >
                        <FaExternalLinkAlt /> Site
                      </a>
                    ) : p.images ? (
                      <button
                        onClick={() => openGallery(p)}
                        className="card-btn"
                        style={{ ...styles.btn, background: '#6c5ce7', color: '#fff' }}
                      >
                        📸 Démo
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* === MODALE === */}
      {modalProject && (
        <div
          style={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeGallery();
          }}
        >
          <div
            className="modal-content-anim"
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >

            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>{modalProject.title}</h3>
              <button
                type="button"
                className="close-btn-anim"
                style={styles.closeBtn}
                onClick={(e) => { e.stopPropagation(); closeGallery(); }}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <FaTimes />
              </button>
            </div>

            <div
              style={styles.imageContainer}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                key={`${modalProject.id}-${currentImageIndex}`}
                src={modalProject.images[currentImageIndex]}
                alt={`${modalProject.title} ${currentImageIndex + 1}`}
                style={styles.modalImg}
                loading="eager"
                decoding="async"
              />

              {modalProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="nav-btn-anim"
                    style={{ ...styles.navBtn, left: '10px' }}
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    onTouchStart={(e) => e.stopPropagation()}
                    aria-label="Précédent"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    type="button"
                    className="nav-btn-anim"
                    style={{ ...styles.navBtn, right: '10px' }}
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    onTouchStart={(e) => e.stopPropagation()}
                    aria-label="Suivant"
                  >
                    <FaChevronRight />
                  </button>

                  <div style={styles.counter}>
                    {currentImageIndex + 1} / {modalProject.images.length}
                  </div>
                </>
              )}
            </div>

            {modalProject.images.length > 1 && (
              <div style={styles.dotsContainer}>
                {modalProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`dot-anim ${idx === currentImageIndex ? 'active' : ''}`}
                    style={styles.dot(idx === currentImageIndex)}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    onTouchStart={(e) => e.stopPropagation()}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;