import { Link } from "react-router-dom";
import "./Home.css"; // We'll create this new CSS file next

export default function Home() {
  const profileImageUrl = "./Foto.png"; // You can change this to a different image for the home page

  return (
    <section className="home-section">
      <div className="home-container">
        {/* --- Image Column --- */}
        <div className="home-image-wrapper">
          <img
            src={profileImageUrl}
            alt="Lautaro Moreno"
            className="home-image"
            onError={(e) => {
              // Fallback placeholder image
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/600x800/1f2937/a78bfa?text=Lautaro";
            }}
          />
        </div>

        {/* --- Text Column --- */}
        <div className="home-text-content">
          <h1 className="home-title typing-effect">
            Bienvenido a mi Portafolio
          </h1>
          <p className="home-description">
            Soy <strong>Analista Funcional</strong> en Grúas San Blas y un
            apasionado por el mundo IT. Recientemente obtuve el título de{" "}
            <strong>Técnico Universitario en Informática</strong> y actualmente
            curso la <strong>Licenciatura en Sistemas</strong> en la Universidad
            Nacional de General Sarmiento. Mi objetivo es aplicar mi
            conocimiento académico y mi curiosidad para resolver problemas
            complejos y aportar valor en entornos tecnológicos dinámicos.
          </p>
          <p className="home-description">
            Como desarrollador en formación con un fuerte interés tanto en{" "}
            <strong>Frontend</strong> como en <strong>Backend</strong>, busco
            constantemente expandir mis habilidades. He complementado mi carrera
            con cursos de desarrollo web, Java y QA Testing. Mi dedicación se
            refleja en logros como el 2° puesto en el Torneo de Programación
            Argentino 2024 a nivel universitario, una experiencia que potenció
            mi capacidad para el trabajo en equipo y la resolución de desafíos
            bajo presión.
          </p>
          <Link to="/proyectos" className="home-cta-button">
            Ver mis proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}