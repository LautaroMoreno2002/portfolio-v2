import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";
// 1. Asegúrate de que la importación de Project sea correcta
import type { Project } from "../pages/ProjectsSection";

// 2. Definimos las props que el componente realmente necesita: el objeto del proyecto y la función de clic
interface ProjectCardProps {
  project: Project;
  onImageClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onImageClick }) => {
  // Desestructuramos el objeto project para un uso más fácil
  const { title, description, imageUrls, tags, liveUrl, codeUrl } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://placehold.co/600x400/161b22/8b949e?text=Proyecto";
  };

  return (
    <motion.div variants={cardVariants} className="project-card">
      {/* 3. El wrapper ahora tiene el evento onClick para abrir el modal */}
      <div className="card-image-wrapper" onClick={() => onImageClick(project)}>
        <img
          // 4. Usamos la primera imagen del array 'imageUrls' para la tarjeta
          src={imageUrls[0]}
          alt={`Imagen del proyecto ${title}`}
          className="card-image"
          onError={handleImageError}
        />
        {/* Opcional: Un overlay para mejorar la UX y mostrar que es clickable */}
        <div className="card-image-overlay">
          <span>Ver Detalles</span>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(liveUrl || codeUrl) && (
        <div className="card-footer">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <ArrowUpRight size={20} />
              <span>Demo</span>
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <Github size={20} />
              <span>Código</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
