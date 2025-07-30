import React from "react";
import styles from "./VideoGallery.module.css"; // Estilo separado (CSS puro)

const videos = [
  {
    title: "1. Acessando a plataforma",
    src: "/videos/meu-video.mp4",
  },
  {
    title: "2. Realizando um voto",
    src: "/videos/meu-video.mp4",
  },
  {
    title: "3. Exportando os dados",
    src: "/videos/meu-video.mp4",
  },
  {
    title: "4. Exportando os dados",
    src: "/videos/meu-video.mp4",
  },
 
];

export default function VideoGallery() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Demonstração do Funcionamento da Plataforma</h2>
      <p className={styles.intro}>
        Abaixo estão alguns vídeos demonstrando como utilizar a plataforma nas suas principais funcionalidades:
      </p>

      <div className={styles.grid}>
        {videos.map((video, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.title}>{video.title}</p>
            <video src={video.src} controls className={styles.video} />
          </div>
        ))}
      </div>
    </div>
  );
}
