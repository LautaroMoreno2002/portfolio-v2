import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';
import type { Project } from '../pages/ProjectsSection';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl, codeUrl }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://placehold.co/600x400/161b22/8b949e?text=Proyecto';
  };

  return (
    <motion.div variants={cardVariants} className="project-card">
      {/* El wrapper es clave para el aspect-ratio */}
      <div className="card-image-wrapper">
        <img
          src={imageUrl}
          alt={`Imagen del proyecto ${title}`}
          className="card-image"
          onError={handleImageError}
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag) => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
      </div>
      {/* Los links ahora van fuera del card-content para un mejor control */}
      {(liveUrl || codeUrl) && (
        <div className="card-footer">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="card-link">
              <ArrowUpRight size={20} />
              <span>Demo</span>
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="card-link">
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