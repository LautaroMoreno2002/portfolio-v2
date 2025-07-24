// src/components/ThemeSwitcher.tsx
import { useState } from "react";
import { useTheme } from "./useTheme"; // Importamos el hook
import React from "react";

export const ThemeSwitcher: React.FC = () => {
  // Usamos el hook para obtener la lógica y el estado
  const { activeTheme, handleThemeChange, themes, themeIcons } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const selectTheme = (themeName: string) => {
    handleThemeChange(themeName);
    setIsOpen(false);
  };

  return (
    <>
      {/* Estilos específicos para el componente de escritorio */}
      <style>{`
                .theme-switcher-desktop {
                    position: relative;
                }
                .theme-switcher-button {
                    width: 40px;
                    height: 40px;
                    background-color: var(--card-bg);
                    color: var(--text-secondary);
                    border-radius: 50%;
                    border: 1px solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .theme-switcher-button:hover {
                    color: var(--accent-primary);
                    border-color: var(--accent-primary);
                    transform: scale(1.1) rotate(15deg);
                }
                .theme-switcher-button svg {
                    font-size: 20px;
                }
                .theme-options {
                    position: absolute;
                    top: 55px; /* Debajo del botón */
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
                    z-index: 1100;
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

      <div className="theme-switcher-desktop">
        <button
          className="theme-switcher-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Seleccionar tema"
        >
          {React.createElement(themeIcons[activeTheme as keyof typeof themeIcons])}
        </button>
        <div className={`theme-options ${isOpen ? "open" : ""}`}>
          {Object.keys(themes).map((themeName) => (
            <button
              key={themeName}
              className={`theme-option-button ${
                activeTheme === themeName ? "active" : ""
              }`}
              onClick={() => selectTheme(themeName)}
            >
              {React.createElement(themeIcons[themeName as keyof typeof themeIcons])}
              <span>{themeName}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
