import React from 'react';
import styles from './AboutProject.module.css';

export default function AboutProject() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.projectTitle}>Sobre o Projeto</h2>
      <p className={styles.projectDescription}>

        O eLOGiar surgiu com o propósito de ser um auxílio para tornar realidade uma visão que nasceu nas áreas de logística da Bosch. 
        A logística dentro da Bosch é muito grande, com aproximadamente 300 funcionários que são divididos em 7 áreas diferentes.

        💼 Um gestor da área tem que cuidar de diversos colaboradores, e por conta disso, é muito complicado estar sempre atento às atitudes de cada um deles, 
        especialmente devido à correria que o cargo exige. Isso gerou um incômodo entre os gestores.

        Consequência? Muitas boas atitudes não são vistas nem devidamente reconhecidas. E é por isso que surgiu o bordão:

        <span className={styles.projectBordao}>"Boas atitudes não devem ficar invisíveis."</span>

      </p>
      
    </section>
  );
}


