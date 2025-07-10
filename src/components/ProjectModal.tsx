import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../pages/ProjectsSection"; // Ajusta la ruta si es necesario
 // Ajusta la ruta si es necesario
import "./ProjectModal.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage
      ? project.imageUrls.length - 1
      : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === project.imageUrls.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  // Evita que el click dentro del modal lo cierre
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={onClose} // Cierra el modal al hacer clic en el fondo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={handleContentClick}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button className="modal-close-button" onClick={onClose}>
            ×
          </button>

          {/* Sección de Imágenes */}
          <div className="image-section">
            <img
              src={project.imageUrls[currentImageIndex]}
              alt={`${project.title} - imagen ${currentImageIndex + 1}`}
            />
            {project.imageUrls.length > 1 && (
              <div className="gallery-controls">
                <button onClick={goToPrevious}>‹ Ant</button>
                <span>{`${currentImageIndex + 1} / ${
                  project.imageUrls.length
                }`}</span>
                <button onClick={goToNext}>Sig ›</button>
              </div>
            )}
          </div>

          {/* Sección de Descripción */}
          <div className="description-section">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h4>Tecnologías Utilizadas</h4>
            <div className="tags-container">
              {project.tags.map((tag: any, index: any) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Demo
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Código
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
