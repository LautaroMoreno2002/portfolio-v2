import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
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
    id: 0,
    title: "SHAIN FLOW - MIRAI HR SOLUTIONS",
    description:
      "Mirai Solutions es una plataforma integral diseñada para optimizar la gestión del talento humano en organizaciones modernas. El sistema permite registrar empleados, controlar asistencias mediante reconocimiento facial, y gestionar nómina de forma automatizada y segura. Con una interfaz intuitiva y funcionalidades modulares, Mirai Solutions facilita la toma de decisiones estratégicas en Recursos Humanos, mejorando la eficiencia operativa y promoviendo un entorno laboral más inteligente y conectado.",
    imageUrls: [
      "https://i.ibb.co/HfRQVGdn/shainflow-login.png",
      "https://i.ibb.co/kjp9xqK/shainflow-register.png",
      "https://i.ibb.co/k2G2w6wh/datos-laborales.png",
      "https://i.ibb.co/4Rx2t6gM/datos-laborales2.png",
      "https://i.ibb.co/8DJ3TZ5r/shainflow-admin-asistencia.png",
      "https://i.ibb.co/Q3nWRKNR/shainflow-admin-empleados.png",
      "https://i.ibb.co/7J4mVjJP/shainflow-reco.png",
    ],
    tags: [
      "Python",
      "FastAPI",
      "WebSocket",
      "API Rest",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React",
      "AWS",
    ],
    liveUrl: "https://shain-flow.vercel.app/",
    codeUrl: "https://github.com/LautaroMoreno2002/shain-flow",
  },
  {
    id: 1,
    title: "TPI - Proyecto Profesional I",
    description:
      "Proyecto inicial de la materia Proyecto Profesional I. Sistema de predicción de preferencias para empleados con Machine Learning.",
    imageUrls: [
      "https://i.ibb.co/gbKBXww5/Captura-de-pantalla-2025-04-24-205828.png",
      "https://i.ibb.co/cPG4brx/prediccion-correo.png",
      "https://i.ibb.co/tTnVpFSw/prediccion-datos-entrenamiento.png",
      "https://i.ibb.co/B26B4YS1/prediccion-home.png",
      "https://i.ibb.co/ZzkBBZ8v/prediccion-multiple.png",
      "https://i.ibb.co/cKwvmhFK/prediccion-prediccion.png",
      "https://i.ibb.co/bj9LL6xZ/prediccion-push.png",
      "https://i.ibb.co/x8K952Yq/prediccion-slack.png",
    ],
    tags: ["Django", "Python", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "",
    codeUrl: "https://github.com/LautaroMoreno2002/TPI-G6-LCS",
  },
  {
    id: 2,
    title: "TP - Codo a Codo 2024",
    description:
      "Proyecto final del curso Codo A Codo 2024. Emula una página de una farmacia con productos y acceso a una API hecha en Java.",
    imageUrls: [
      "https://i.ibb.co/vjvX5bs/farmacia-cac-2024.png",
      "https://i.ibb.co/hvWmqRh/farmacia-CAC-contactenos.png",
      "https://i.ibb.co/zVz86vSR/farmacia-CAC-footer.png",
      "https://i.ibb.co/KxrZ4Ds5/farmacia-CAC-login.png",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Java"],
    liveUrl: "https://eugesp2.github.io/tpfarmacia/index.html",
    codeUrl: "https://github.com/EUGESP2/tpfarmacia",
  },
  {
    id: 3,
    title: "Galería interactiva SIDCO",
    description:
      "Componente interactivo para una obra de construcción hecha por la empresa Sidco. Se hizo con Javascript y fue insertado en Wordpress.",
    imageUrls: [
      "https://i.ibb.co/tcQwTJ2/componente-interactivo.png",
      "https://i.ibb.co/pj0DRB4g/Captura-de-pantalla-2025-07-10-183242.png",
      "https://i.ibb.co/LzLyzGWp/Captura-de-pantalla-2025-07-10-183317.png",
      "https://i.ibb.co/hJswwYgB/Captura-de-pantalla-2025-07-10-183334.png",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    liveUrl: "https://www.constructorasidco.com/portfolio/plaza-guiraldes/",
    codeUrl: "",
  },
  {
    id: 4,
    title: "Lights Out Web",
    description:
      "El juego LightsOut, tanto en modo clásico como en el modo variante, desarrollado con el framework Angular.",
    imageUrls: [
      "https://i.ibb.co/0BjTHkN/lights-out.png",
      "https://i.ibb.co/pBjWkk6R/lights-Out-5x5.png",
      "https://i.ibb.co/Xr154m82/ligths-Out-4x4.png",
      "https://i.ibb.co/bjk2Zp7p/ligths-Out-introduccion.png",
    ],
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
    imageUrls: [
      "https://i.ibb.co/2jrQNdD/clustering-Humano.png",
      "https://i.ibb.co/xSSs7t20/clustering-p2.png",
      "https://i.ibb.co/RTTHnyHc/clustering-p3.png",
      "https://i.ibb.co/RkngRkdN/clustering-agrupamiento.png",
      "https://i.ibb.co/20ST49qz/clustering-p1.png",
    ],
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
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} // 'whileInView' es genial para animar al hacer scroll
          viewport={{ once: true, amount: 0.5 }} // Configuración para whileInView
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h2 id="projects-title" className="projects-title">Mis Proyectos</h2>
          <p className="projects-subtitle">
            Aquí hay una selección de algunos de mis trabajos recientes.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // También animamos la grilla al verla
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={() => handleOpenModal(project)} // Es un poco más robusto pasar una arrow function
            />
          ))}
        </motion.div>
      </div>

      {/* ✨ CORRECCIÓN: Envuelve el modal en AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
