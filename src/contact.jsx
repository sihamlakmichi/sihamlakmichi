import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaTelegram, FaPaperPlane, FaCheck, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      padding: '120px 20px 80px',
      background: '#0a0a0a',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    wrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '2.8rem',
      fontWeight: '800',
      color: '#ffffff',
      marginBottom: '0.5rem',
      letterSpacing: '-1px',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#888888',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: '1.6',
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
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '3rem',
    },
    // Info Section
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    infoCard: {
      background: '#1a1a1a',
      borderRadius: '16px',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
    },
    infoIcon: {
      width: '48px',
      height: '48px',
      minWidth: '48px',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '1.2rem',
    },
    infoContent: {
      flex: 1,
    },
    infoLabel: {
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#666666',
      marginBottom: '0.2rem',
    },
    infoValue: {
      fontSize: '1rem',
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    infoValueLink: {
      fontSize: '1rem',
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    // Social Section
    socialSection: {
      background: '#1a1a1a',
      borderRadius: '16px',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    socialTitle: {
      fontSize: '0.9rem',
      color: '#888888',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    socialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.8rem',
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.8rem',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '10px',
      color: '#888888',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '0.85rem',
    },
    // Form Section
    formSection: {
      background: '#1a1a1a',
      borderRadius: '16px',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    formTitle: {
      fontSize: '1.3rem',
      color: '#ffffff',
      marginBottom: '0.5rem',
      fontWeight: '700',
    },
    formSubtitle: {
      fontSize: '0.9rem',
      color: '#888888',
      marginBottom: '1.5rem',
    },
    formGroup: {
      marginBottom: '1.2rem',
    },
    label: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#cccccc',
      marginBottom: '0.4rem',
    },
    input: {
      width: '100%',
      padding: '0.9rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      color: '#ffffff',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box',
    },
    inputError: {
      borderColor: '#ff4444',
    },
    textarea: {
      width: '100%',
      padding: '0.9rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      color: '#ffffff',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      resize: 'vertical',
      minHeight: '120px',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
    },
    errorText: {
      color: '#ff4444',
      fontSize: '0.8rem',
      marginTop: '0.3rem',
      display: 'block',
    },
    btnSubmit: {
      width: '100%',
      padding: '1rem',
      background: '#ffffff',
      color: '#0a0a0a',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
    },
    btnSubmitDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
    successMessage: {
      padding: '1rem',
      background: 'rgba(76, 175, 80, 0.1)',
      border: '1px solid rgba(76, 175, 80, 0.3)',
      borderRadius: '10px',
      color: '#4CAF50',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.8rem',
    },
  };

  // Gestion des changements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Effacer l'erreur quand l'utilisateur tape
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Formulaire soumis :', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Gestion des survols
  const handleMouseEnter = (e, type) => {
    if (type === 'submit') {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
    }
  };

  const handleMouseLeave = (e, type) => {
    if (type === 'submit') {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>✦ Contact</span>
          <h1 style={styles.title}>Entrons en contact</h1>
          <p style={styles.subtitle}>
            Vous avez un projet en tête ? Discutons-en ! Je suis toujours 
            intéressé par de nouvelles opportunités.
          </p>
        </div>

        {/* Grid Contact */}
        <div style={styles.grid}>
          {/* Colonne gauche - Informations */}
          <div style={styles.infoSection}>
            {/* Email */}
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div style={styles.infoContent}>
                  <div style={styles.infoLabel}>Email</div>
                  <a href="mailto:votre-email@example.com" style={styles.infoValueLink}>
                    votre-email@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Téléphone */}
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div style={styles.infoContent}>
                  <div style={styles.infoLabel}>Téléphone</div>
                  <a href="tel:+1234567890" style={styles.infoValueLink}>
                    +1 234 567 890
                  </a>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <FaMapMarker />
                </div>
                <div style={styles.infoContent}>
                  <div style={styles.infoLabel}>Localisation</div>
                  <div style={styles.infoValue}>Paris, France</div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div style={styles.socialSection}>
              <div style={styles.socialTitle}>Suivez-moi</div>
              <div style={styles.socialGrid}>
                <a 
                  href="https://github.com/votre-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = '#888888'; }}
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/votre-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = '#888888'; }}
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a 
                  href="https://twitter.com/votre-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = '#888888'; }}
                >
                  <FaTwitter /> Twitter
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = '#888888'; }}
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a 
                  href="https://t.me/votre-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.socialLink}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.color = '#888888'; }}
                >
                  <FaTelegram /> Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div style={styles.formSection}>
            <h3 style={styles.formTitle}>Envoyez-moi un message</h3>
            <p style={styles.formSubtitle}>
              Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
            </p>

            {isSubmitted ? (
              <div style={styles.successMessage}>
                <FaCheck size={20} />
                <span>Message envoyé avec succès ! Je vous répondrai rapidement.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    style={{
                      ...styles.input,
                      ...(errors.name ? styles.inputError : {})
                    }}
                  />
                  {errors.name && <span style={styles.errorText}>{errors.name}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@example.com"
                    style={{
                      ...styles.input,
                      ...(errors.email ? styles.inputError : {})
                    }}
                  />
                  {errors.email && <span style={styles.errorText}>{errors.email}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Sujet *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Demande de projet"
                    style={{
                      ...styles.input,
                      ...(errors.subject ? styles.inputError : {})
                    }}
                  />
                  {errors.subject && <span style={styles.errorText}>{errors.subject}</span>}
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    style={{
                      ...styles.textarea,
                      ...(errors.message ? styles.inputError : {})
                    }}
                  />
                  {errors.message && <span style={styles.errorText}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  style={{
                    ...styles.btnSubmit,
                    ...(isSubmitting ? styles.btnSubmitDisabled : {})
                  }}
                  onMouseEnter={(e) => handleMouseEnter(e, 'submit')}
                  onMouseLeave={(e) => handleMouseLeave(e, 'submit')}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner style={{ animation: 'spin 1s linear infinite' }} />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Style pour l'animation de rotation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;