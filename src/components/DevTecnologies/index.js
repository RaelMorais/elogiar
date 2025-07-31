import React from "react";
import "./index.css" 

const technologies = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "PwA",
    logo: "https://sharepointinterface.com/wp-content/uploads/2023/01/PALogo.png",
  },
  {
    name: "SQLite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export default function TechStack() {
  return (
    <div className="techstack-container">
      <h2 className="techstack-title">Tecnologias Utilizadas</h2>
      <div className="techstack-grid">
        {technologies.map((tech) => (
          <div className="techstack-card" key={tech.name}>
            <img src={tech.logo} alt={`${tech.name} logo`} className="techstack-logo" />
            <span className="techstack-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
