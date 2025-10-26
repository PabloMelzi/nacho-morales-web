import React, { useState } from 'react';
import styles from './Contact.module.css';
import logo from '../assets/logo2.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    asunto: '',
    mensaje: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { asunto, mensaje } = formData;
    
    // Activar loading
    setIsLoading(true);
    
    // Crear el enlace mailto con los datos del formulario
    const mailtoLink = `mailto:@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
    
    // Simular una pequeña pausa para mostrar el loading
    setTimeout(() => {
      // Abrir el cliente de correo
      window.location.href = mailtoLink;
      
      // Limpiar el formulario
      setFormData({
        asunto: '',
        mensaje: ''
      });
      
      // Desactivar loading después de un momento
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 500);
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacto</h2>
        
        <div className={styles.contactContent}>
          <div className={styles.social}>
            <div className={styles.instagramIcon}>
              <div className={styles.instagramInner}></div>
            </div>
            <a 
              href="https://www.instagram.com/coach_nachomorales/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.instagramHandle}
            >
              @coach_nachomorales
            </a>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="asunto" className={styles.label}>Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className={styles.textarea}
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <img src={logo} alt="Loading" className={styles.spinnerLogo} />
              ) : (
                'Enviar mensaje'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;