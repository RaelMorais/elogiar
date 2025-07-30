import React from 'react';
import styles from './ProjectVideo.module.css';

export default function ProjectVideo() {
  return (
    <div className={styles.videoContainer}>
      <h2 className={styles.projectTitle}>Assista ao Vídeo do Projeto</h2>
      <div className={styles.responsiveIframe}>
        <iframe
          src="/videos/eLOGiar.mp4"
          title="Vídeo do Projeto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
