import React, { useState, type FormEvent } from 'react';
// Importamos íconos para los enlaces y estados del formulario
import "./ContactMe.css"
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline, IoIosWarning } from 'react-icons/io';

// --- COMPONENTE: ContactForm ---
export const ContactMe: React.FC = () => {
    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Estado para los errores de validación
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Estado para el proceso de envío del formulario
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // Función para validar el formulario
    const validateForm = (): boolean => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es obligatorio.';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El formato del email no es válido.';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje no puede estar vacío.';
            isValid = false;
        }
        
        setErrors(newErrors);
        return isValid;
    };

    // Función para manejar el envío
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setStatus('sending');
        // Simulación de envío a un backend
        setTimeout(() => {
            // Simula un éxito aleatorio
            if (Math.random() > 0.2) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
            } else {
                setStatus('error');
            }
        }, 2000);
    };
    
    // Función para manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpia el error del campo cuando el usuario empieza a escribir
        if(errors[name as keyof typeof errors]) {
            setErrors(prev => ({...prev, [name]: ''}));
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Columna de Información */}
                <div className="contact-info">
                    <h2 className="contact-title">Hablemos</h2>
                    <p className="contact-description">
                        Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea en mente, no dudes en contactarme.
                    </p>
                    <div className="contact-links">
                        <a href="mailto:lautaro.moreno.dev@gmail.com" className="contact-link-item">
                            <FiMail />
                            <span>lautaro.moreno.dev@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/lautaro-moreno-dev/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <FiLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/lautaro-moreno" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <FiGithub />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Columna del Formulario */}
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'invalid' : ''} required />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'invalid' : ''} required />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={errors.message ? 'invalid' : ''} required></textarea>
                            {errors.message && <p className="error-message">{errors.message}</p>}
                        </div>
                        
                        <button type="submit" className="submit-button" disabled={status === 'sending'}>
                            {status === 'sending' ? <FaSpinner className="spinner" /> : <FiSend />}
                            <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                        </button>
                    </form>
                    
                    {status === 'success' && (
                        <div className="feedback-message success">
                            <IoIosCheckmarkCircleOutline />
                            <span>¡Gracias! Tu mensaje ha sido enviado con éxito.</span>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="feedback-message error">
                           <IoIosWarning />
                            <span>Hubo un error al enviar el mensaje. Inténtalo de nuevo.</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};