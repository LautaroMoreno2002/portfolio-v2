import React, { useState, useMemo, type CSSProperties } from 'react';
// Cambiamos las importaciones de URL a los paquetes locales.
// Esto asume que has instalado 'react-icons' en tu proyecto.
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt,
    FaSass, FaBootstrap, FaFigma, FaPython, FaDocker
} from 'react-icons/fa';
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql,
    SiMongodb, SiExpress, SiRedux, SiJest
} from 'react-icons/si';

import "./Skills.css"

// --- TIPOS DE DATOS (TypeScript) ---
// Definimos las categorías para una mejor organización y filtrado.
type SkillCategory = 'Frontend' | 'Backend' | 'Base de Datos' | 'Herramientas' | 'Diseño';

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
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', category: 'Frontend' },
    { name: 'Sass', icon: <FaSass />, color: '#CC6699', category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E', category: 'Frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'Frontend' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF', category: 'Frontend' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', category: 'Frontend' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3', category: 'Frontend' },
    // Backend
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', category: 'Backend' },
    { name: 'Express', icon: <SiExpress />, color: '#FFFFFF', category: 'Backend' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', category: 'Backend' },
    // Base de Datos
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', category: 'Base de Datos' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', category: 'Base de Datos' },
    // Herramientas y Otros
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', category: 'Herramientas' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED', category: 'Herramientas' },
    { name: 'Jest', icon: <SiJest />, color: '#C21325', category: 'Herramientas' },
    // Diseño
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E', category: 'Diseño' },
];

const skillCategories: ['Todas', ...SkillCategory[]] = ['Todas', 'Frontend', 'Backend', 'Base de Datos', 'Herramientas', 'Diseño'];

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
        border: isHovered ? `1px solid ${skill.color}` : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isHovered ? `0 0 20px -2px ${skill.color}` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    };

    const iconStyle: CSSProperties = {
        color: isHovered ? skill.color : '#e5e7eb',
        filter: isHovered ? `drop-shadow(0 0 5px ${skill.color})` : 'none',
    };

    return (
        <div
            className="skill-card"
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="skill-icon" style={iconStyle}>{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
        </div>
    );
};

// --- COMPONENTE: Skills (Contenedor Principal) ---
// Para usar este componente, simplemente impórtalo y úsalo en tu aplicación, por ejemplo en App.tsx
// import Skills from './Skills';
export const Skills: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<SkillCategory | 'Todas'>('Todas');

    const filteredSkills = useMemo(() => {
        if (activeFilter === 'Todas') {
            return skillsData;
        }
        return skillsData.filter(skill => skill.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className="skills-section">
            <h2 className="skills-title">Habilidades Técnicas</h2>
            <p className="skills-subtitle">
                Un vistazo a las tecnologías que domino. Filtra por categoría para explorar.
            </p>
            
            <div className="skills-filters">
                {skillCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`filter-button ${activeFilter === category ? 'active' : ''}`}
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