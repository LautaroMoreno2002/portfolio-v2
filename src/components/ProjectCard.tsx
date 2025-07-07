import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';
import type { Project } from '../pages/ProjectsSection'; // Importamos la interfaz
 // Importamos la interfaz

// Las props del componente deben coincidir con la interfaz Project
type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl, codeUrl }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Tipamos el evento del manejador de errores de la imagen
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Previene bucles infinitos
    e.currentTarget.src = 'https://placehold.co/600x400/FF0000/FFFFFF?text=Error+cargando+imagen';
  };

  return (
    <motion.div
      variants={cardVariants}
      className="project-card"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <div className="card-image-wrapper">
        <img
          src={imageUrl}
          alt={`Imagen del proyecto ${title}`}
          className="card-image"
          onError={handleImageError}
        />
        <div className="card-image-overlay"></div>
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

        <div className="card-footer">
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
