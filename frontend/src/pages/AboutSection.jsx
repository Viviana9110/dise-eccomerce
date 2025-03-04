import React from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaHatCowboy, FaDrum, FaPizzaSlice } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-orange-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">

        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 text-center"
        >
          Nuestra Historia y Tradición
        </motion.h2>

        {/* Íconos culturales */}
        <div className="flex gap-6 text-orange-600 text-5xl">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaCoffee title="Café Colombiano" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaHatCowboy title="Sombrero Vueltiao" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaDrum title="Maracas y Ritmos" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaPizzaSlice title="Arepas Colombianas" />
          </motion.div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Imagen representativa de Colombia */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <img 
              src="/images/colombia.jpg" 
              alt="Paisaje de Colombia" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

          {/* Texto de historia */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="md:w-1/3 text-center md:text-left"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong>Mi Tierra Products</strong> nació con la misión de compartir los sabores y tradiciones de Colombia con el mundo. 
              Desde el café más aromático hasta los dulces que nos transportan a nuestra infancia, traemos productos auténticos, 
              seleccionados con el corazón.
            </p>
            <motion.a 
              href="#shop" 
              whileHover={{ scale: 1.1 }} 
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-orange-600 transition"
            >
              Descubre más
            </motion.a>
          </motion.div>

          {/* Imagen de la historia */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <img 
              src="/images/about.jpg" 
              alt="Nuestra historia" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

        </div>

        {/* Video Representativo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl mt-8"
        >
          <video controls className="rounded-lg shadow-lg w-full">
            <source src="/videos/colombia.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
