import React from 'react';
import styles from './Developers.module.css';

const developers = [
  {
    name: 'Ariane Silva',
    role: 'Design UI/UX & FrontEnd',
    linkedin: 'https://www.linkedin.com/in/ariane-silva-a21039260/',
    img: '/img/ariane.png',
  },
  {
    name: 'Gabriela Alejandra',
    role: 'Design UI/UX & FrontEnd',
    linkedin: 'https://github.com/gabriela70707',
    img: '/img/gabi.png',
  },
  {
    name: 'Gustavo Bruno',
    role: 'Desenvolvimento Back-end',
    linkedin: 'https://www.linkedin.com/in/gustavo-bruno-90344a272/',
    img: '/img/bruno.png',
  },
  {
    name: 'Israel Santana',
    role: 'Desenvolvimento Fullstack',
    linkedin: 'https://www.linkedin.com/in/israelstnmorais',
    img: '/img/israel.png',
  },
  {
    name: 'Luana Grandi',
    role: 'Design UI/UX & FrontEnd',
    linkedin: 'https://www.linkedin.com/in/luana-mota-00b43b320/',
    img: '/img/luana.png',
  },
  {
    name: 'Talita Cristina',
    role: 'Design UI/UX & FrontEnd',
    linkedin: 'https://www.linkedin.com/in/talita-cristina-538346317/',
    img: '/img/talita.png',
  },
];

export default function Developers() {
  return (
    <section className={styles.developersSection}>
      <h2 className={styles.devTitle}>Desenvolvedores</h2>
      <div className={styles.devGrid}>
        {developers.map((dev) => (
          <a
            key={dev.name}
            href={dev.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            <div className={styles.devCard}>
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${dev.img})` }}
              >
                <div className={styles.cardOverlay}>
                  <h3>{dev.name}</h3>
                  <p>{dev.role}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
