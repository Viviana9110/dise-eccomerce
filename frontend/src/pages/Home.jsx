import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
  
      
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
          Bienvenidos a productos de mi tierra
          </h1>
          <p className="text-gray-600">
          Por qué sabemos lo difícil que fue emigrar de nuestra tierra, decimos traerte un pedazo de ella; los mejores snacks, bebidas y dulces directamente desde Colombia.
          Sabores auténticos que te transportarán a nuestra tierra.
          </p>
          <button className="bg-cyan-900 text-white px-6 py-3 rounded-lg text-lg">
            Ver mas
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/images/fondo.jpg"
            alt="Mi tierra"
            className="rounded-xl shadow-lg w-80 h-80"
          />
        </div>
      </header>

      {/* Popular Dishes */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              name: "Cafe Aguila Roja",
              price: "$7.61",
              img: "/images/cafeaguilaroja.jpg",
            },
            {
              name: "Postobon Colombiana",
              price: "$2.99",
              img: "/images/postoboncolombianabotella12ozcajax24.jpg",
            },
            {
              name: "Arequipe Alpina",
              price: "$3.24",
              img: "/images/arequipealpina250.jpg",
            },
            {
              name: "Milo Bolsa",
              price: "$7.6",
              img: "/images/milobolsa.jpg",
            },
          ].map((dish, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
              <p className="text-orange-600 text-xl font-semibold">
                {dish.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    
      <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p>Email: contacto@mitierraproducts.com</p>
          <p>Teléfono: +1 234 567 8901</p>
          <p>Ubicación: Ciudad, País</p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categorías</h3>
          <ul className="space-y-2">
            <li><a href="/snacks" className="hover:text-gray-400">Snacks</a></li>
            <li><a href="/bebidas" className="hover:text-gray-400">Bebidas</a></li>
            <li><a href="/dulceria" className="hover:text-gray-400">Dulcería</a></li>
            <li><a href="/conservas" className="hover:text-gray-400">Conservas</a></li>
            <li><a href="/salsas" className="hover:text-gray-400">Salsas</a></li>
            <li><a href="/aseo" className="hover:text-gray-400">Aseo</a></li>
          </ul>
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
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        <p>© {new Date().getFullYear()} Mi Tierra Products. Todos los derechos reservados.</p>
      </div>
    </footer>

    </div>
  );
}

export default Home;