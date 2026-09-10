import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram,
  FaPaperPlane, FaCheck, FaSpinner,
  FaWhatsapp, FaClock, FaUser, FaComment, FaTag
} from 'react-icons/fa';

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // ⚠️ TON NUMÉRO WHATSAPP (format international sans + ni espaces)
  const WHATSAPP_NUMBER = '212601263349';

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 🚀 NOUVELLE FONCTION : Envoie le message vers WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construction du message WhatsApp formaté
    const whatsappMessage = 
      `*Nouveau message depuis le portfolio*%0A%0A` +
      `👤 *Nom :* ${formData.name}%0A` +
      `📧 *Email :* ${formData.email}%0A` +
      `📝 *Sujet :* ${formData.subject}%0A%0A` +
      `💬 *Message :*%0A${formData.message}`;

    // URL WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Petite animation de 1s puis ouverture de WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Ouvre WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, '_blank');
      
      // Réinitialise le formulaire
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

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
        radial-gradient(circle at 20% 30%, rgba(0, 198, 255, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(0, 114, 255, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 70%)
      `,
      pointerEvents: 'none'
    },

    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      animation: 'fadeInUp 0.8s ease-out'
    },

    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '40px' : '60px'
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
      marginBottom: '20px'
    },

    title: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.8rem' : '3.5rem',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #ffffff 0%, #a0aec0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1.2
    },

    subtitle: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: 'rgba(255,255,255,0.6)',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
      padding: isMobile ? '0 10px' : '0'
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1.4fr',
      gap: isMobile ? '20px' : '32px',
      alignItems: 'start'
    },

    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },

    infoCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: isMobile ? '16px' : '20px',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      color: 'inherit'
    },

    infoCardHover: {
      background: 'rgba(255,255,255,0.06)',
      borderColor: 'rgba(0, 198, 255, 0.3)',
      transform: 'translateX(8px)',
      boxShadow: '0 8px 32px rgba(0, 198, 255, 0.1)'
    },

    iconWrapper: {
      width: isMobile ? '44px' : '52px',
      height: isMobile ? '44px' : '52px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(0, 198, 255, 0.15), rgba(0, 114, 255, 0.15))',
      color: '#00c6ff',
      fontSize: isMobile ? '1.1rem' : '1.3rem',
      flexShrink: 0
    },

    infoContent: { flex: 1, minWidth: 0 },

    infoLabel: {
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.4)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '4px',
      fontWeight: '600'
    },

    infoValue: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#fff',
      fontWeight: '500',
      wordBreak: 'break-word'
    },

    socialSection: {
      padding: isMobile ? '20px' : '24px',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.08)'
    },

    socialTitle: {
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.4)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '16px',
      fontWeight: '600'
    },

    socialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px'
    },

    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: isMobile ? '12px' : '14px',
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      color: 'rgba(255,255,255,0.7)',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },

    socialButtonHover: {
      background: 'rgba(0, 198, 255, 0.15)',
      borderColor: 'rgba(0, 198, 255, 0.3)',
      color: '#00c6ff',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 20px rgba(0, 198, 255, 0.15)'
    },

    whatsappBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '4px',
      padding: isMobile ? '14px' : '16px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #25D366, #128C7E)',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
      border: 'none',
      cursor: 'pointer'
    },

    whatsappBtnHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)'
    },

    formCard: {
      padding: isMobile ? '20px' : '32px',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    },

    formTitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#fff'
    },

    formSubtitle: {
      fontSize: '0.85rem',
      color: 'rgba(255,255,255,0.4)',
      marginBottom: isMobile ? '24px' : '32px'
    },

    inputGroup: { marginBottom: isMobile ? '16px' : '20px' },

    inputLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: '8px',
      fontWeight: '500'
    },

    input: {
      width: '100%',
      padding: isMobile ? '14px' : '16px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(255,255,255,0.04)',
      color: '#fff',
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },

    inputFocus: {
      borderColor: 'rgba(0, 198, 255, 0.5)',
      background: 'rgba(255,255,255,0.06)',
      boxShadow: '0 0 0 4px rgba(0, 198, 255, 0.1)'
    },

    textarea: {
      width: '100%',
      padding: isMobile ? '14px' : '16px',
      minHeight: isMobile ? '120px' : '150px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(255,255,255,0.04)',
      color: '#fff',
      fontSize: isMobile ? '0.9rem' : '0.95rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      resize: 'vertical',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    },

    row: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '16px' : '20px'
    },

    submitBtn: {
      width: '100%',
      padding: isMobile ? '16px' : '18px',
      borderRadius: '14px',
      border: 'none',
      background: 'linear-gradient(135deg, #25D366, #128C7E)',
      color: '#fff',
      fontWeight: '700',
      fontSize: isMobile ? '0.95rem' : '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '8px',
      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
      letterSpacing: '0.5px'
    },

    submitBtnHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)'
    },

    submitBtnDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
      transform: 'none'
    },

    successMessage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '40px 20px' : '60px 40px',
      textAlign: 'center',
      gap: '16px'
    },

    successIcon: {
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0.1))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#25D366',
      fontSize: '1.8rem',
      border: '2px solid rgba(37, 211, 102, 0.3)'
    },

    successTitle: {
      fontSize: isMobile ? '1.2rem' : '1.4rem',
      fontWeight: '700',
      color: '#25D366'
    },

    successText: {
      fontSize: '0.9rem',
      color: 'rgba(255,255,255,0.5)',
      maxWidth: '320px'
    },

    spinner: { animation: 'spin 1s linear infinite' }
  };

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/siham-lakmichi/',
      hoverColor: '#0A66C2',
      hoverBg: 'rgba(10, 102, 194, 0.15)',
      hoverBorder: 'rgba(10, 102, 194, 0.4)'
    },
    { 
      icon: <FaInstagram />, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/siham_lakmichi',
      hoverColor: '#E1306C',
      hoverBg: 'rgba(225, 48, 108, 0.15)',
      hoverBorder: 'rgba(225, 48, 108, 0.4)'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.backgroundDecoration} />
      
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <FaComment size={12} />
            Contact
          </div>
          <h1 style={styles.title}>Travaillons ensemble</h1>
          <p style={styles.subtitle}>
            Une question, un projet ou une collaboration ? N'hésitez pas à me contacter, 
            je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Left Column - Info */}
          <div style={styles.leftColumn}>
            
            {/* Email */}
            <a 
              href="mailto:lakmichisiham@gmail.com"
              style={{
                ...styles.infoCard,
                ...(hoveredCard === 'email' ? styles.infoCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('email')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <FaEnvelope />
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Email</div>
                <div style={styles.infoValue}>lakmichisiham@gmail.com</div>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+212601263349"
              style={{
                ...styles.infoCard,
                ...(hoveredCard === 'phone' ? styles.infoCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('phone')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <FaPhone />
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Téléphone</div>
                <div style={styles.infoValue}>06 01 26 33 49</div>
              </div>
            </a>

            {/* Location */}
            <div 
              style={{
                ...styles.infoCard,
                ...(hoveredCard === 'location' ? styles.infoCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('location')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <FaMapMarkerAlt />
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Localisation</div>
                <div style={styles.infoValue}>Maroc</div>
              </div>
            </div>

            {/* Availability */}
            <div 
              style={{
                ...styles.infoCard,
                ...(hoveredCard === 'availability' ? styles.infoCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('availability')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <FaClock />
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>Disponibilité</div>
                <div style={styles.infoValue}>Lun - Ven, 9h - 18h</div>
              </div>
            </div>

            {/* Social - LinkedIn & Instagram uniquement */}
            <div style={styles.socialSection}>
              <div style={styles.socialTitle}>Réseaux sociaux</div>
              <div style={styles.socialGrid}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.socialButton,
                      ...(hoveredCard === `social-${index}` ? {
                        ...styles.socialButtonHover,
                        color: social.hoverColor,
                        background: social.hoverBg,
                        borderColor: social.hoverBorder
                      } : {})
                    }}
                    onMouseEnter={() => setHoveredCard(`social-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                    title={social.label}
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212601263349"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.whatsappBtn,
                ...(hoveredCard === 'whatsapp' ? styles.whatsappBtnHover : {})
              }}
              onMouseEnter={() => setHoveredCard('whatsapp')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <FaWhatsapp size={20} />
              Discutons sur WhatsApp
            </a>
          </div>

          {/* Right Column - Form */}
          <div style={styles.formCard}>
            {isSubmitted ? (
              <div style={styles.successMessage}>
                <div style={styles.successIcon}>
                  <FaWhatsapp />
                </div>
                <div style={styles.successTitle}>WhatsApp ouvert !</div>
                <div style={styles.successText}>
                  Votre message a été préparé dans WhatsApp. 
                  Appuyez sur <strong>Envoyer</strong> pour me l'expédier. 💬
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    marginTop: '16px',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'transparent',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h2 style={styles.formTitle}>Envoyez-moi un message</h2>
                <p style={styles.formSubtitle}>
                  Remplissez le formulaire — il s'ouvrira dans WhatsApp pour un envoi instantané.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={styles.row}>
                    <div style={styles.inputGroup}>
                      <label style={styles.inputLabel}>
                        <FaUser size={12} />
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        style={{
                          ...styles.input,
                          ...(focusedField === 'name' ? styles.inputFocus : {})
                        }}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.inputLabel}>
                        <FaEnvelope size={12} />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        style={{
                          ...styles.input,
                          ...(focusedField === 'email' ? styles.inputFocus : {})
                        }}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                      <FaTag size={12} />
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Le sujet de votre message"
                      required
                      style={{
                        ...styles.input,
                        ...(focusedField === 'subject' ? styles.inputFocus : {})
                      }}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>
                      <FaComment size={12} />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      required
                      style={{
                        ...styles.textarea,
                        ...(focusedField === 'message' ? styles.inputFocus : {})
                      }}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      ...styles.submitBtn,
                      ...(isSubmitting ? styles.submitBtnDisabled : {}),
                      ...(hoveredCard === 'submit' && !isSubmitting ? styles.submitBtnHover : {})
                    }}
                    onMouseEnter={() => setHoveredCard('submit')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner style={styles.spinner} />
                        Ouverture de WhatsApp...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp size={20} />
                        Envoyer via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          * { box-sizing: border-box; }

          input::placeholder,
          textarea::placeholder {
            color: rgba(255,255,255,0.25);
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill {
            -webkit-text-fill-color: #fff;
            -webkit-box-shadow: 0 0 0px 1000px #1a1f3a inset;
            transition: background-color 5000s ease-in-out 0s;
          }

          ::selection {
            background: rgba(0, 198, 255, 0.3);
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;