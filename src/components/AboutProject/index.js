import React from 'react';
import styles from './AboutProject.module.css';

export default function AboutProject() {
  return (
    <section className={styles.aboutSection}>
      <h2>Sobre o Projeto</h2>
      <p className={styles.projectDescription}>

        O eLOGiar surgiu com o propósito de transformar em realidade uma visão que nasceu dentro da área de logistica da Bosch.
        A logística dentro da Bosch é muito grande, com aproximadamente 300 funcionários que são divididos em 7 áreas diferentes.

        Cada gestor é responsável por liderar diversas pessoas, o que torna desafiador acompanhar de perto as atitudes individuais de cada membro da equipe.
        No entanto se cada colaborador pudesse reportar uma boa atitude de um colega, se tornaria possivel a ideia de dar o devido reconhecimento
        aqueles colaboradores que demonstram boas atitudes. E assim nasceu o eLOGiar.

        <span className={styles.projectBordao}>"Boas atitudes não devem ficar invisíveis."</span>

      </p>
      
    </section>
  );
}


