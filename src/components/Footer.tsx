import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">DulceMesa</h3>
            <p className="mb-4 text-gray-300">
              Creamos experiencias dulces inolvidables para tus eventos más especiales. 
              Mesas de dulces personalizadas para bodas, quinceañeras, eventos corporativos y más.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-pink-400 transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Nuestros Paquetes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contáctanos</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">Av. Insurgentes Sur 1457, Ciudad de México, CDMX</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300">info@dulcemesa.mx</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DulceMesa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;