import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMonitor, FiDroplet } from 'react-icons/fi';

// --- Definición de las Paletas de Colores ---
// Cada objeto representa un tema y sus variables CSS correspondientes.
const themes = {
  'Oscuro': {
    '--bg-color': '#0d1117',
    '--card-bg': '#161b22',
    '--border-color': '#30363d',
    '--text-primary': '#c9d1d9',
    '--text-secondary': '#8b949e',
    '--accent-primary': '#58a6ff',
    '--accent-secondary': '#3fb950',
  },
  'Pizarra': {
    '--bg-color': '#111827',
    '--card-bg': '#1F2937',
    '--border-color': '#374151',
    '--text-primary': '#F9FAFB',
    '--text-secondary': '#9CA3AF',
    '--accent-primary': '#3B82F6',
    '--accent-secondary': '#10B981',
  },
  'Arena': {
    '--bg-color': '#F5F5F4',
    '--card-bg': '#FFFFFF',
    '--border-color': '#E7E5E4',
    '--text-primary': '#292524',
    '--text-secondary': '#78716C',
    '--accent-primary': '#F97316',
    '--accent-secondary': '#059669',
  },
  'Neón': {
    '--bg-color': '#121212',
    '--card-bg': '#1E1E1E',
    '--border-color': '#2C2C2C',
    '--text-primary': '#EAEAEA',
    '--text-secondary': '#888888',
    '--accent-primary': '#8A2BE2',
    '--accent-secondary': '#00FFFF',
  },
};

// --- Iconos para cada tema ---
const themeIcons: { [key: string]: React.ReactNode } = {
    'Oscuro': <FiMoon />,
    'Pizarra': <FiMonitor />,
    'Arena': <FiSun />,
    'Neón': <FiDroplet />,
};


// --- Componente ThemeSwitcher ---
export const ThemeSwitcher: React.FC = () => {
    // Estado para guardar el tema activo. 'Oscuro' es el valor por defecto.
    const [activeTheme, setActiveTheme] = useState('Oscuro');
    const [isOpen, setIsOpen] = useState(false);

    // Este efecto se ejecuta cada vez que 'activeTheme' cambia.
    useEffect(() => {
        const theme = themes[activeTheme as keyof typeof themes];
        // Itera sobre las propiedades del objeto del tema y las aplica como variables CSS
        // en el elemento raíz del documento (<html>).
        Object.keys(theme).forEach(key => {
            const cssVar = key as keyof typeof theme;
            document.documentElement.style.setProperty(cssVar, theme[cssVar]);
        });
    }, [activeTheme]);

    const handleThemeChange = (themeName: string) => {
        setActiveTheme(themeName);
        setIsOpen(false); // Cierra el menú al seleccionar un tema
    };

    return (
        <>
            {/* --- Estilos del Componente --- */}
            {/* Incluimos los estilos aquí para que el componente sea autocontenido */}
            <style>{`
                .theme-switcher-container {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 1000;
                }
                .theme-switcher-fab {
                    width: 56px;
                    height: 56px;
                    background-color: var(--accent-primary);
                    color: var(--bg-color);
                    border-radius: 50%;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                .theme-switcher-fab:hover {
                    transform: scale(1.1);
                }
                .theme-switcher-fab svg {
                    font-size: 24px;
                }
                .theme-options {
                    position: absolute;
                    bottom: 70px; /* Encima del botón principal */
                    right: 0;
                    background-color: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 0.5rem;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    pointer-events: none;
                }
                .theme-options.open {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: auto;
                }
                .theme-option-button {
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 1rem;
                    text-align: left;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }
                .theme-option-button:hover {
                    background-color: var(--bg-color);
                    color: var(--text-primary);
                }
                .theme-option-button.active {
                    color: var(--accent-primary);
                    font-weight: 600;
                }
                .theme-option-button svg {
                    font-size: 18px;
                }
            `}</style>

            {/* --- JSX del Componente --- */}
            <div className="theme-switcher-container">
                <div className={`theme-options ${isOpen ? 'open' : ''}`}>
                    {Object.keys(themes).map(themeName => (
                        <button
                            key={themeName}
                            className={`theme-option-button ${activeTheme === themeName ? 'active' : ''}`}
                            onClick={() => handleThemeChange(themeName)}
                        >
                            {themeIcons[themeName]}
                            <span>{themeName}</span>
                        </button>
                    ))}
                </div>
                <button className="theme-switcher-fab" onClick={() => setIsOpen(!isOpen)} aria-label="Seleccionar tema">
                    {themeIcons[activeTheme]}
                </button>
            </div>
        </>
    );
};

export default ThemeSwitcher;