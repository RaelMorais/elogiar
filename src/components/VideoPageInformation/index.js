import React from "react";

export default function VideoBanner() {
  return (
    <div 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "90vh", 
        overflow: "hidden",
        marginBottom: "2rem",
      }}>
      <video
        src="/videos/cores.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "25px",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          padding: "0 1rem",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
      
        }}
      >
        <p>Boas atitudes não devem ficar invisíveis</p>
      </div>
    </div>
  );
}
