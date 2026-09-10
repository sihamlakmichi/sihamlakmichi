import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import About from './about';
import Skills from './skills';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      title: "Bonjour, je suis Siham Lakmichi",
      description: "Technicienne Spécialisée en Développement Web, diplômée de l'OFPPT.",
      link: "/about",
      linkText: "En savoir plus"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
      title: "Développement Web",
      description: "React, JavaScript, Node.js, MongoDB, HTML, CSS, Tailwind.",
      link: "/skills",
      linkText: "Voir mes compétences"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
      title: "Mes Projets",
      description: "Découvrez mes projets personnels et académiques.",
      link: "/projects",
      linkText: "Voir mes projets"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200",
      title: "Contactez-moi",
      description: "Vous avez un projet ? Contactez-moi.",
      link: "/contact",
      linkText: "Me contacter"
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const goToSlide = (index) => setCurrentSlide(index);

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #0a0a0a, #111827)',
      paddingTop: '80px',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif'
    },

    sliderContainer: {
      position: 'relative',
      height: 'calc(100vh - 80px)',
      width: '100%'
    },

    slide: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.8s ease-in-out'
    },

    slideActive: {
      opacity: 1
    },

    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },

    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.3))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
      padding: '20px'
    },

    title: {
      fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
      fontWeight: '800',
      marginBottom: '15px'
    },

    desc: {
      fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
      maxWidth: '700px',
      color: '#ddd',
      marginBottom: '25px'
    },

    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 25px',
      background: '#fff',
      color: '#000',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: '0.3s',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
    },

    navBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.15)',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#fff',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 10,
      backdropFilter: 'blur(10px)'
    },

    left: { left: '20px' },
    right: { right: '20px' },

    dots: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px'
    },

    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: '2px solid #fff',
      background: 'transparent',
      cursor: 'pointer'
    },

    dotActive: {
      background: '#fff'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.sliderContainer}>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              ...(currentSlide === index ? styles.slideActive : {})
            }}
          >
            <img src={slide.image} alt="" style={styles.image} />

            <div style={styles.overlay}>
              <h1 style={styles.title}>{slide.title}</h1>
              <p style={styles.desc}>{slide.description}</p>

              <Link
                to={slide.link}
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-3px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              >
                {slide.linkText} <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <button style={{ ...styles.navBtn, ...styles.left }} onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button style={{ ...styles.navBtn, ...styles.right }} onClick={nextSlide}>
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div style={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                ...styles.dot,
                ...(currentSlide === index ? styles.dotActive : {})
              }}
            />
          ))}
        </div>
      </div>

      <About />
      <Skills />
    </div>
  );
};

export default Home;