import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, X } from 'lucide-react'; // Iconos para el menú móvil
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Navegación para escritorio */}
        <nav className="nav-desktop">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
          <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Proyectos</NavLink>
          <NavLink to="/conocimientos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink>
          {/* <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>&lt;Sobre mí /&gt;</NavLink> */}
          <NavLink to="/contacto" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contacto</NavLink>
        </nav>

        {/* Botón de menú para móvil */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Menú desplegable para móvil */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          <NavLink to="/" className="nav-link-mobile" onClick={toggleMenu}>Inicio</NavLink>
          <NavLink to="/proyectos" className="nav-link-mobile" onClick={toggleMenu}>Proyectos</NavLink>
          <NavLink to="/conocimientos" className="nav-link-mobile" onClick={toggleMenu}>Skills</NavLink>
          {/* <NavLink to="/sobre-mi" className="nav-link-mobile" onClick={toggleMenu}>&lt;Sobre mí /&gt;</NavLink> */}
          <NavLink to="/contacto" className="nav-link-mobile" onClick={toggleMenu}>Contacto</NavLink>
        </nav>
      )}
    </header>
  );
}
