import React from 'react';
import styles from './Biography.module.css';

const Biography = () => {
  return (
    <section id="biografia" className={styles.biography}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h3 className={styles.subtitle}>Bienvenido</h3>
          
          <h4 className={styles.question}>¿Quién va a entrenarte?</h4>
          
          <p className={styles.description}>
            Soy Nacho Morales Puerto, licenciado en Ed. Física en EADE, preparador físico, entrenador de
            tecnificación, entrenador de baloncesto con una experiencia de 5 años en el sector, he
            practicado baloncesto durante más de 14 años como jugador, llegando a disputar fases de
            ascenso a liga nacional. Actualmente me dedico a preparar a jugadores para conseguir su
            máximo rendimiento en la pista a partir de un trabajo fuera de ella.
          </p>
          
          <blockquote className={styles.quote}>
            "No importa el punto de partida, este programa está hecho para adaptarse a ti y llevarte al siguiente
            nivel"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Biography;