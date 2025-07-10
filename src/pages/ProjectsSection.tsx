import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './ProjectsSection.css';
import ProjectModal from '../components/ProjectModal';

// Definimos la "forma" de un objeto de proyecto con una interfaz
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

// Tipamos el array de proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "TPI - Proyecto Profesional I",
    description:
      "Proyecto inicial de la materia Proyecto Profesional I. Sistema de predicción de preferencias para empleados con Machine Learning.",
    imageUrls: [
      "https://i.ibb.co/gbKBXww5/Captura-de-pantalla-2025-04-24-205828.png",
      "https://i.ibb.co/vjvX5bs/farmacia-cac-2024.png",
    ],
    tags: ["Django", "Python", "JavaScript", "MHTML5", "CSS3"],
    liveUrl: "",
    codeUrl: "https://github.com/LautaroMoreno2002/TPI-G6-LCS",
  },
  {
    id: 2,
    title: "TP - Codo a Codo 2024",
    description:
      "Proyecto final del curso Codo A Codo 2024. Emula una página de una farmacia con productos y acceso a una API hecha en Java.",
    imageUrls: ["https://i.ibb.co/vjvX5bs/farmacia-cac-2024.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "Java"],
    liveUrl: "https://eugesp2.github.io/tpfarmacia/index.html",
    codeUrl: "https://github.com/EUGESP2/tpfarmacia",
  },
  {
    id: 3,
    title: "Galería interactiva SIDCO",
    description:
      "Componente interactivo para una obra de construcción hecha por la empresa Sidco. Se hizo con Javascript y fue insertado en Wordpress.",
    imageUrls: ["https://i.ibb.co/tcQwTJ2/componente-interactivo.png"],
    tags: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    liveUrl: "https://www.constructorasidco.com/portfolio/plaza-guiraldes/",
    codeUrl: "",
  },
  {
    id: 4,
    title: "Lights Out Web",
    description:
      "El juego LightsOut, tanto en modo clásico como en el modo variante, desarrollado con el framework Angular.",
    imageUrls: ["https://i.ibb.co/0BjTHkN/lights-out.png"],
    tags: ["HTML5", "CSS3", "Typescript", "Angular"],
    liveUrl: "https://lights-out-web-angular18.netlify.app/",
    codeUrl: "https://github.com/LautaroMoreno2002/lightsOut-web",
  },
  {
    id: 5,
    title: "TP - Bases de Datos",
    description:
      'Trabajo final de la materia "Base de datos". Se ejecuta por la terminal, simula la funcionalidad del SIU Guaraní. Carga alumnos, materias, inscribe a los alumnos en las materias, cierra semestres, ejecuta SP y Triggers.',
    imageUrls: ["https://i.ibb.co/JyGL0p5/TP-Base-de-Datos.jpg"],
    tags: ["GO", "PostgreSQL", "PL/PGSQL"],
    liveUrl: "",
    codeUrl:
      "https://gitlab.com/lautymoreno80/lozano-moreno-schaab-vallejos-db1",
  },
  {
    id: 6,
    title: "Clustering Humano - Programación III",
    description:
      "Aplicación hecha en Java, con la librería WindowBuilder, que permite separar un grupo de personas según las similitudes que tengan en sus gustos. Se visualizarán utilizando un mapa, propio de la librería JMapViewer.",
    imageUrls: ["https://i.ibb.co/2jrQNdD/clustering-Humano.png"],
    tags: ["Java", "WindowBuilder", "JMapViewer"],
    liveUrl: "",
    codeUrl:
      "https://github.com/LautaroMoreno2002/Trabajo-Practico2-Programacion3",
  },
  {
    id: 7,
    title: "Castlevania: Barbarianna Viking Edition",
    description:
      "Juego hecho en Java y un entorno visual para la interfaz gráfica, donde el jugador es Barbarianna, cuyo objetivo es llegar a la Comodore 128Kb para viajar en el tiempo. Para esto, debe ir escalando los pisos del castillo mientras enfrenta a multiples Velociraptors que lanzan rayos utilizando su poderoso martillo Mjolnir.",
    imageUrls: ["https://i.ibb.co/Svj9mqV/Barbariana.png"],
    tags: ["Java"],
    liveUrl: "",
    codeUrl:
      "https://github.com/LautaroMoreno2002/trabajo-practico-programacion1",
  },
];

const ProjectsSection: React.FC = () => {
  // 2. Estado para manejar el proyecto seleccionado en el modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
            Aquí hay una selección de algunos de mis trabajos recientes. Cada
            proyecto fue un nuevo desafío y una oportunidad de aprendizaje.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            // 3. Pasamos la función para abrir el modal a cada tarjeta
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={handleOpenModal}
            />
          ))}
        </motion.div>
      </div>

      {/* 4. Renderizamos el modal solo si hay un proyecto seleccionado */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectsSection;
