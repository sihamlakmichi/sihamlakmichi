import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Données du slider - 4 slides sans emojis
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      title: "Bonjour, je suis Siham Lakmichi",
      description: "Technicienne Spécialisée en Développement Web, diplômée de l'OFPPT. Passionnée par la création d'applications web modernes et innovantes.",
      link: "/about",
      linkText: "En savoir plus"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
      title: "Développement Web",
      description: "Je maîtrise les technologies modernes du web : React, JavaScript, Node.js, MongoDB, HTML, CSS, Tailwind et bien plus encore.",
      link: "/skills",
      linkText: "Voir mes compétences"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
      title: "Mes Projets",
      description: "Découvrez mes projets personnels et académiques réalisés durant ma formation et mes stages. Des applications web innovantes et fonctionnelles.",
      link: "/projects",
      linkText: "Voir mes projets"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200",
      title: "Contactez-moi",
      description: "Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées et de vos besoins.",
      link: "/contact",
      linkText: "Me contacter"
    }
  ];

  // Navigation automatique
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      padding: '80px 0 0 0',
      background: '#0a0a0a',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    sliderContainer: {
      position: 'relative',
      width: '100%',
      height: 'calc(100vh - 80px)',
      overflow: 'hidden',
      background: '#0a0a0a',
    },
    slideWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.8s ease-in-out',
    },
    slideActive: {
      opacity: 1,
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    slideOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      textAlign: 'center',
      color: 'white',
    },
    slideTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
      background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      maxWidth: '800px',
    },
    slideDescription: {
      fontSize: '1.2rem',
      color: '#cccccc',
      maxWidth: '650px',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
    },
    slideButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '1rem 2.8rem',
      background: '#ffffff',
      color: '#0a0a0a',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '1.3rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      zIndex: 10,
    },
    navButtonLeft: {
      left: '30px',
    },
    navButtonRight: {
      right: '30px',
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '1rem',
      zIndex: 10,
    },
    dot: {
      width: '13px',
      height: '13px',
      borderRadius: '50%',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    dotActive: {
      background: '#ffffff',
      borderColor: '#ffffff',
      transform: 'scale(1.25)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sliderContainer}>
        <div style={styles.slideWrapper}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              style={{
                ...styles.slide,
                ...(currentSlide === index ? styles.slideActive : {})
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                style={styles.slideImage}
                loading="lazy"
              />
              <div style={styles.slideOverlay}>
                <h1 style={styles.slideTitle}>{slide.title}</h1>
                <p style={styles.slideDescription}>{slide.description}</p>
                <Link 
                  to={slide.link} 
                  style={styles.slideButton}
                  onMouseEnter={(e) => { 
                    e.target.style.transform = 'translateY(-3px)'; 
                    e.target.style.boxShadow = '0 10px 30px rgba(255,255,255,0.25)'; 
                  }}
                  onMouseLeave={(e) => { 
                    e.target.style.transform = 'translateY(0)'; 
                    e.target.style.boxShadow = '0 4px 20px rgba(255,255,255,0.1)'; 
                  }}
                >
                  {slide.linkText} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}

          {/* Flèches de navigation */}
          <button
            style={{ ...styles.navButton, ...styles.navButtonLeft }}
            onClick={prevSlide}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
          >
            <FaChevronLeft />
          </button>
          <button
            style={{ ...styles.navButton, ...styles.navButtonRight }}
            onClick={nextSlide}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.dot,
                ...(currentSlide === index ? styles.dotActive : {})
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;