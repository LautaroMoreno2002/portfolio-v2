import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="l">L</span>
        <span className="e">E</span>
        <span className="m">M</span>
      </div>
      <nav className="nav">
        <Link to="/">&lt; Inicio /&gt;</Link>
        <Link to="/proyectos">&lt; Proyectos /&gt;</Link>
        <Link to="/skills">&lt; Skills /&gt;</Link>
        <Link to="/sobre-mi">&lt; Sobre mí /&gt;</Link>
        <Link to="/contacto">&lt; Contacto /&gt;</Link>
      </nav>
    </header>
  );
}
