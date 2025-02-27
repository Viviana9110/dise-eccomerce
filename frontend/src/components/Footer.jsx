import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p>Email: contacto@mitierraproducts.com</p>
          <p>Teléfono: +1 234 567 8901</p>
          <p>Ubicación: Ciudad, País</p>
        </div>

        
        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        <p>© {new Date().getFullYear()} Mi Tierra Products. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
