import React from 'react';
import "./AboutMe.css"
import { FiDownload } from 'react-icons/fi';

// 1. Importa tu archivo CV desde la carpeta de assets (o donde lo tengas guardado)
import cvFile from '../assets/Lautaro_Moreno_CV.pdf';

export const AboutMe: React.FC = () => {
    const profileImageUrl = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    
    return (
        <section className="about-section">
            <div className="about-container">
                {/* Columna de la Imagen */}
                <div className="about-image-wrapper">
                    <div className="image-card">
                        <img 
                            src={profileImageUrl} 
                            alt="Foto de perfil de Lautaro Moreno" 
                            className="about-image"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; 
                                target.src='https://placehold.co/600x800/1f2937/a78bfa?text=Lautaro';
                            }}
                        />
                    </div>
                </div>

                {/* Columna del Texto */}
                <div className="about-text-content">
                    <h2 className="about-title">Sobre Mí</h2>
                    <p className="about-description">
                        Soy un <strong>Desarrollador Full Stack</strong> apasionado por la tecnología y la resolución de problemas complejos. Disfruto creando soluciones eficientes y escalables que brinden una gran experiencia de usuario.
                    </p>
                    <p className="about-description">
                        Con una fuerte inclinación tanto por el <strong>Frontend</strong> como por el <strong>Backend</strong>, me encanta el desafío de construir aplicaciones completas, desde la lógica del servidor hasta el diseño de interfaces intuitivas y atractivas (UI/UX). Soy de Buenos Aires, Argentina, y estoy en constante aprendizaje para mantenerme al día con las últimas tendencias del mundo digital.
                    </p>
                    
                    {/* 2. Modifica la etiqueta <a> para que use el archivo importado y el atributo 'download' */}
                    <a 
                        href={cvFile} 
                        className="cv-button" 
                        download="Lautaro_Moreno_CV.pdf" // Este atributo fuerza la descarga y le da un nombre al archivo
                    >
                        <FiDownload className="button-icon" />
                        <span>Descargar CV</span>
                    </a>
                </div>
            </div>
        </section>
    );
};