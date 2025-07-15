// ImageModal.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./imageModal.css";

// Definimos las props que necesita el modal
interface ImageModalProps {
  project: Project | null; // Puede ser null cuando no hay nada seleccionado
  onClose: () => void; // Función para cerrar el modal
}

// Importamos el tipo Project desde su ubicación original
import type { Project } from "../pages/ProjectsSection";

const ImageModal: React.FC<ImageModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose} // Cierra el modal al hacer clic en el fondo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Evitamos que el clic en el contenido cierre el modal */}
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button className="modal-close-button" onClick={onClose}>
              <X size={24} />
            </button>
            <img
              // Usamos la primera imagen para el modal, pero podrías implementar un carrusel aquí
              src={project.imageUrls[0]}
              alt={`Vista completa del proyecto ${project.title}`}
              className="modal-image"
            />
            <h3 className="modal-title">{project.title}</h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
