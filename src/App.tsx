import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/proyectos" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}
