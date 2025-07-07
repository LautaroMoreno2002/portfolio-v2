import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './ProjectsSection.css';

// Definimos la "forma" de un objeto de proyecto con una interfaz
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

// Tipamos el array de proyectos
const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce "TechWave"',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración de productos. Construida con un stack MERN.',
    imageUrl: 'https://placehold.co/600x400/0D1117/FFFFFF?text=TechWave',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Aplicación de Chat en Tiempo Real',
    description: 'Una aplicación de chat que permite a los usuarios comunicarse en tiempo real, utilizando WebSockets para una comunicación bidireccional instantánea.',
    imageUrl: 'https://placehold.co/600x400/0D1117/FFFFFF?text=ChatApp',
    tags: ['React', 'Socket.IO', 'Node.js', 'TypeScript'],
    liveUrl: '#',
    codeUrl: '#',
  },
  // ...otros proyectos
];

const ProjectsSection: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="projects-section">
            <div className="projects-container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="projects-header"
                >
                    <h2 className="projects-title">Mis Proyectos</h2>
                    <p className="projects-subtitle">
                        Aquí hay una selección de algunos de mis trabajos recientes. Cada proyecto fue un nuevo desafío y una oportunidad de aprendizaje.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsSection;
