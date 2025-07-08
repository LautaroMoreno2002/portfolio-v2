import React, { useState, useMemo, type CSSProperties } from "react";
// Cambiamos las importaciones de URL a los paquetes locales.
// Esto asume que has instalado 'react-icons' en tu proyecto.
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaDocker,
  FaJava,
  FaTrello,
  FaGitlab,
  FaGithub,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJest,
  SiMysql,
  SiSqlite,
} from "react-icons/si";

import "./Skills.css";
import { FaGolang, FaJ } from "react-icons/fa6";

// --- TIPOS DE DATOS (TypeScript) ---
// Definimos las categorías para una mejor organización y filtrado.
type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Base de Datos"
  | "Herramientas";

// Actualizamos la interfaz para incluir la categoría de cada habilidad.
interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: SkillCategory;
}

// --- DATOS DE LAS HABILIDADES ---
// Ahora los datos están categorizados, lo que permite un filtrado dinámico.
const skillsData: Skill[] = [
  // Frontend
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", category: "Frontend" },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: <FaAngular />,
    color: "#DD0031",
    category: "Frontend",
  },
  { name: "React", icon: <FaReact />, color: "#61DAFB", category: "Frontend" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC", category: "Frontend" },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#7952B3",
    category: "Frontend",
  },
  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
    category: "Backend",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#FFFFFF",
    category: "Backend",
  },
  { name: "Python", icon: <FaPython />, color: "#FFD43B", category: "Backend" },
  { name: "Java", icon: <FaJava />, color: "#EA2D2E", category: "Backend" },
  { name: "Go", icon: <FaGolang />, color: "#00ADD8", category: "Backend" },
  // Base de Datos
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "#4169E1",
    category: "Base de Datos",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    category: "Base de Datos",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#F29111",
    category: "Base de Datos",
  },
  {
    name: "SQLite",
    icon: <SiSqlite />,
    color: "#3E97D1",
    category: "Base de Datos",
  },
  // Herramientas y Otros
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    category: "Herramientas",
  },
  {
    name: "Gitlab",
    icon: <FaGitlab />,
    color: "#FCA326",
    category: "Herramientas",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    color: "#24292E",
    category: "Herramientas",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "#2496ED",
    category: "Herramientas",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "#FF5733",
    category: "Herramientas",
  },
  {
    name: "Trello",
    icon: <FaTrello />,
    color: "#00C2E0",
    category: "Herramientas",
  },
];

const skillCategories: ["Todas", ...SkillCategory[]] = [
  "Todas",
  "Frontend",
  "Backend",
  "Base de Datos",
  "Herramientas"
];

// --- COMPONENTE: SkillCard ---
interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: CSSProperties = {
    animation: `fadeInUp 0.5s ${index * 0.05}s ease-out forwards`,
    opacity: 0,
    border: isHovered
      ? `1px solid ${skill.color}`
      : "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: isHovered
      ? `0 0 20px -2px ${skill.color}`
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  };

  const iconStyle: CSSProperties = {
    color: isHovered ? skill.color : "#e5e7eb",
    filter: isHovered ? `drop-shadow(0 0 5px ${skill.color})` : "none",
  };

  return (
    <div
      className="skill-card"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-icon" style={iconStyle}>
        {skill.icon}
      </div>
      <p className="skill-name">{skill.name}</p>
    </div>
  );
};

// --- COMPONENTE: Skills (Contenedor Principal) ---
// Para usar este componente, simplemente impórtalo y úsalo en tu aplicación, por ejemplo en App.tsx
// import Skills from './Skills';
export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory | "Todas">(
    "Todas"
  );

  const filteredSkills = useMemo(() => {
    if (activeFilter === "Todas") {
      return skillsData;
    }
    return skillsData.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Habilidades Técnicas</h2>
      <p className="skills-subtitle">
        Un vistazo a las tecnologías que usé en mi trayectoria por mi carrera
        profesional. Filtra por categoría para explorar.
      </p>

      <div className="skills-filters">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`filter-button ${
              activeFilter === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};
