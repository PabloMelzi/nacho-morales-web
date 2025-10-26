import React, { useState } from 'react';
import Header from './components/Header';
import Biography from './components/Biography';
import Contact from './components/Contact';
import Plans from './components/Plans'; 
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'biografia':
        return <Biography />;
      case 'contacto':
        return <Contact />;
      case 'casos':
        return <div className={styles.section}><h2>Casos de éxito - Próximamente</h2></div>;
      case 'metodologia':
        return <div className={styles.section}><h2>Metodología - Próximamente</h2></div>;
      case 'planes':
        return <Plans />;
      default:
        return <div className={styles.section}><h2>Bienvenido a Nacho Morales</h2></div>;
    }
  };

  return (
    <div className={styles.app}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className={styles.main}>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
