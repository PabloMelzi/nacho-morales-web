import React, { useState } from 'react';
import styles from './Plans.module.css';

const Plans = () => {
  const [showModal, setShowModal] = useState(false);
  const [paid, setPaid] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [codeInput, setCodeInput] = useState('');

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'pdfs/14 DÍAS FUERZA_SALTO (1).pdf';
    link.download = '14_DIAS_FUERZA_SALTO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePay = () => {
    setPaid(true);
    setShowModal(false);
    downloadPDF();
  };

  const handleCode = () => {
    if (codeInput === 'PREMIUMNACHO') {
      downloadPDF();
      setShowModal(false);
    } else {
      alert('Código incorrecto');
    }
  };

  return (
    <section className={styles.plans}>
      <div className={styles.container}>
        {/* 🔹 Planes normales */}
        <div className={styles.textBox}>
          <h2 className={styles.title}>Programas Gratuitos</h2>
          <p className={styles.description}>
            Descarga los programas disponibles para conocer más sobre nuestros servicios.
          </p>

          <div className={styles.pdfContainer}>
            <div className={styles.pdfItem}>
              <h3 className={styles.subtitle}>
                Guía estratégica: Isométricos, excéntricos y trabajo anti-rotacional
              </h3>
              <div className={styles.buttons}>
                <a
                  href="pdfs/Guía estratégica Isométricos, excéntricos y trabajo anti-rotacional-1.pdf"
                  download="Guía_estratégica_Isométricos_excé[email protected]_rotacional.pdf"
                  className={styles.downloadBtn}
                >
                  Descargar PDF
                </a>
              </div>
            </div>

            <div className={styles.pdfItem}>
              <h3 className={styles.subtitle}>Los 3 ejercicios de movilidad para deportistas con dolor</h3>
              <div className={styles.buttons}>
                <a
                  href="png/RESET Ejercicios Movilidad (1).png"
                  download="RESET_Ejercicios_Movilidad.png"
                  className={styles.downloadBtn}
                >
                  Descargar Imagen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Planes Premium */}
        <div className={`${styles.textBox} ${styles.premiumBox}`}>
          <h2 className={`${styles.title} ${styles.premiumTitle}`}>Programas Premium</h2>

          <p className={styles.description}>
            Accede a contenido exclusivo diseñado para un rendimiento superior.
          </p>

          <div className={styles.pdfContainer}>
            <div className={styles.pdfItem}>
              <h3 className={styles.subtitle}>Mejora tu fuerza y salto en 14 días</h3>
              <div className={styles.buttons}>
                <button
                  className={styles.downloadBtn}
                  onClick={(e) => {
                    setShowModal(true);
                    e.currentTarget.blur();
                  }}
                >
                  Descargar PDF Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Desbloquear contenido Premium</h3>
            <p className={styles.modalDescription}>
              Para desbloquear este contenido, paga 2,99€ o utiliza el código proporcionado por tu coach.
            </p>

            {/* Botones pagar y cancelar juntos */}
            <div className={styles.modalButtons}>
              <button
                className={styles.modalBtn}
                onClick={(e) => {
                  handlePay();
                  e.currentTarget.blur();
                }}
              >
                Pagar 2,99€
              </button>
              <button
                className={styles.modalBtn}
                onClick={(e) => {
                  setShowModal(false);
                  e.currentTarget.blur();
                }}
              >
                Cancelar
              </button>
            </div>

            {/* Botón para mostrar input de código */}
            {!showCodeInput && (
              <button
                className={styles.modalBtn}
                onClick={(e) => {
                  setShowCodeInput(true);
                  e.currentTarget.blur();
                }}
                style={{ marginTop: '16px' }}
              >
                Utilizar Código
              </button>
            )}

            {/* Input de código y aceptar */}
            {showCodeInput && (
              <div style={{ marginTop: '16px' }}>
                <input
                  type="text"
                  placeholder="Introduce tu código"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  className={styles.codeInput}
                />
                <button
                  className={styles.modalBtn}
                  onClick={(e) => {
                    handleCode();
                    e.currentTarget.blur();
                  }}
                  style={{ marginTop: '8px' }}
                >
                  Aceptar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Plans;
