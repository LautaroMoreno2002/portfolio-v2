import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

// 1. Importaciones necesarias
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "./useTheme";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. Usamos el hook para acceder a la lógica del tema
  const { activeTheme, handleThemeChange, themes, themeIcons } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para manejar el cambio de tema desde el menú móvil
  const handleMobileThemeChange = (themeName: string) => {
    handleThemeChange(themeName);
    // Opcional: cierra el menú al seleccionar un tema
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo-link">
          <div className="logo">
            <span className="l">L</span>
            <span className="e">E</span>
            <span className="m">M</span>
          </div>
        </NavLink>

        {/* 3. Contenedor para la navegación y el ThemeSwitcher en escritorio */}
        <div className="header-right-section">
          <nav className="nav-desktop">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/proyectos"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Proyectos
            </NavLink>
            <NavLink
              to="/conocimientos"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contacto
            </NavLink>
          </nav>

          {/* El componente ThemeSwitcher para escritorio */}
          <ThemeSwitcher />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {isMenuOpen && (
        <nav className="nav-mobile">
          <NavLink to="/" className="nav-link-mobile" onClick={toggleMenu}>
            Inicio
          </NavLink>
          <NavLink
            to="/proyectos"
            className="nav-link-mobile"
            onClick={toggleMenu}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/conocimientos"
            className="nav-link-mobile"
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/contacto"
            className="nav-link-mobile"
            onClick={toggleMenu}
          >
            Contacto
          </NavLink>

          {/* 4. Opciones de tema integradas en el menú móvil */}
          <div className="mobile-theme-selector">
            <span className="theme-selector-title">Temas</span>
            <div className="theme-options-mobile">
              {Object.keys(themes).map((themeName) => (
                <button
                  key={themeName}
                  className={`theme-option-mobile ${
                    activeTheme === themeName ? "active" : ""
                  }`}
                  onClick={() => handleMobileThemeChange(themeName)}
                  aria-label={`Activar tema ${themeName}`}
                >
                  {React.createElement(themeIcons[themeName as keyof typeof themeIcons])}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
