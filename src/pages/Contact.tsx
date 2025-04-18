import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros servicios? ¿Necesitas una cotización personalizada? 
            Estamos aquí para ayudarte a crear una experiencia dulce inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Av. Insurgentes Sur 1457<br />Ciudad de México, CDMX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+52 (55) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@dulcemesa.mx</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-gray-900 mb-3">Horario de Atención</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                  <p>Sábado: 10:00 AM - 3:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-md p-8 text-white">
              <h3 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Más de 5 años de experiencia</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Diseños personalizados para cada evento</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Productos de la más alta calidad</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Servicio profesional y puntual</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Evento
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="wedding">Boda</option>
                    <option value="xv">XV Años</option>
                    <option value="corporate">Evento Corporativo</option>
                    <option value="birthday">Cumpleaños</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha del Evento
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Cuéntanos más sobre tu evento..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center animate-fadeIn">
                <CheckCircle className="h-5 w-5 mr-2" />
                ¡Gracias por tu mensaje! Te contactaremos pronto.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;