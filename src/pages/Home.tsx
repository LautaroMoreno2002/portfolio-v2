import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <h1>
          <span className="red">L</span>autaro <span className="red">E</span>
          mmanuel <span className="red">M</span>oreno
        </h1>
        <h2>Desarrollador Full Stack</h2>
        <div className="buttons">
          <a href="/cv.pdf" className="btn blue" download>
            Descargar CV
          </a>
          <a href="/proyectos" className="btn red">
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
