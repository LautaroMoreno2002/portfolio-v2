import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import ProjectsSection from './pages/ProjectsSection';
import Home from './pages/Home';
import { Skills } from './pages/Skills';
// import { AboutMe } from './pages/AboutMe';
import { ContactMe } from './pages/ContactMe';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    // BrowserRouter envuelve toda la app para habilitar el enrutamiento
    <BrowserRouter>
      {/* El Navbar ahora está fuera de las rutas para que sea visible en todas las páginas */}
      <Header />
      
      <main>
        {/* Routes define el área donde el contenido de la página cambiará */}
        <Routes>
          {/* Cada Route mapea una URL (path) a un componente (element) */}
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsSection />} />
          <Route path="/conocimientos" element={<Skills />} />
          {/* <Route path='/sobre-mi' element={<AboutMe />} /> */}
          <Route path='/contacto' element={<ContactMe />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
