import React, { useState } from "react";
import axios from "axios";
import * as Notiflix from "notiflix";
import { FaLinkedin, FaGithub, FaEnvelope, FaSpinner } from "react-icons/fa";

// Importamos los estilos. Asegúrate de que la ruta sea correcta.
import "./ContactMe.css";

export const ContactMe: React.FC = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Estado para manejar los errores de validación
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Estado para la animación de carga
  const [isLoading, setIsLoading] = useState(false);

  // Estado para los mensajes de feedback (éxito o error tras el envío)
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  // Función para validar el formulario
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) {
      newErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }
    if (!formData.asunto) {
      newErrors.asunto = "El asunto es requerido.";
    }
    if (!formData.mensaje) {
      newErrors.mensaje = "El mensaje no puede estar vacío.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejador para los cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador para el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue
    setFeedback({ type: "", message: "" }); // Limpia feedback anterior

    if (!validateForm()) {
      Notiflix.Notify.warning(
        "Por favor, corrige los errores en el formulario."
      );
      return;
    }

    setIsLoading(true);
    Notiflix.Loading.standard("Enviando...");

    try {
      await axios.post(
        "https://backend-portfolio-sand-theta.vercel.app/envio",
        formData
      );

      Notiflix.Loading.remove();
      Notiflix.Notify.success("¡Mensaje enviado correctamente!");
      setFeedback({
        type: "success",
        message: "Gracias por contactarme. Te responderé a la brevedad.",
      });

      // Limpiar formulario
      setFormData({ email: "", asunto: "", mensaje: "" });
      setErrors({});
    } catch (error) {
      Notiflix.Loading.remove();
      Notiflix.Notify.failure("Hubo un error al enviar el mensaje.");
      setFeedback({
        type: "error",
        message:
          "No se pudo enviar el mensaje. Por favor, intenta de nuevo más tarde o contáctame por otro medio.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Columna de Información */}
        <div className="contact-info">
          <h2 className="contact-title">Contactame</h2>
          <p className="contact-description">
            Si te interesa mi trabajo, no dudes en contactarme. Estoy dispuesto
            a trabajar en proyectos que me desafíen y me permitan crecer como
            profesional.
          </p>
          <div className="contact-links">
            <a
              href="mailto:lemoreno2002@gmail.com"
              className="contact-link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope /> <span>lemoreno2002@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lautaro-moreno/"
              className="contact-link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/LautaroMoreno2002"
              className="contact-link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> <span>Github</span>
            </a>
          </div>
        </div>

        {/* Columna del Formulario */}
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Tu Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "invalid" : ""}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="Propuesta de proyecto"
                value={formData.asunto}
                onChange={handleChange}
                className={errors.asunto ? "invalid" : ""}
                required
              />
              {errors.asunto && (
                <p className="error-message">{errors.asunto}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Me interesa tu trabajo, quiero hacer un proyecto con vos porque..."
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className={errors.mensaje ? "invalid" : ""}
                required
              />
              {errors.mensaje && (
                <p className="error-message">{errors.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="spinner" />
                  <span>Enviando...</span>
                </>
              ) : (
                <span>Enviar Mensaje</span>
              )}
            </button>
          </form>

          {feedback.message && (
            <div className={`feedback-message ${feedback.type}`}>
              {feedback.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
