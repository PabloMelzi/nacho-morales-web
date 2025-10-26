import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo2.png'; 

const Header = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>
          <span className={styles.firstName}>NACHO</span>
          <span className={styles.lastName}>MORALES</span>
        </h1>
      </div>
      <nav className={styles.nav}>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('biografia'); }}
          className={activeSection === 'biografia' ? styles.active : ''}
        >
          Biografía
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('casos'); }}
          className={activeSection === 'casos' ? styles.active : ''}
        >
          Casos de éxito
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('metodologia'); }}
          className={activeSection === 'metodologia' ? styles.active : ''}
        >
          Asesoria
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('planes'); }}
          className={activeSection === 'planes' ? styles.active : ''}
        >
          Programas
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('contacto'); }}
          className={activeSection === 'contacto' ? styles.active : ''}
        >
          Contacto
        </a>
      </nav>
      <div className={styles.basketballContainer}>
        <div className={styles.basketball}>
          <div className={styles.basketballLine1}></div>
          <div className={styles.basketballLine2}></div>
          <div className={styles.basketballLine3}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
