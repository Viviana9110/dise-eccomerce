import React from "react";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <div className="font-sans bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Bienvenidos a productos de mi tierra
            </h1>
            <p className="text-gray-600">
              Descubre los mejores snacks, bebidas y dulces directamente desde
              Colombia. Sabores auténticos que te transportarán a nuestra
              tierra.
            </p>
            <button className="bg-cyan-900 text-white px-6 py-3 rounded-lg text-lg">
              Ver mas
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="../public/images/fondo.jpg"
              alt="Mi tierra"
              className="rounded-xl shadow-lg w-80 h-80"
            />
          </div>
        </header>

        {/* Popular Dishes */}
        <section className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Productos populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Cocosette",
                price: "$0.75",
                img: "../public/images/cocosette.jpg",
              },
              {
                name: "Chocolatina Jumbo mini caja",
                price: "$9.27",
                img: "../public/images/chocolatinajumbomini.jpg",
              },
              {
                name: "Galletas Festiva",
                price: "$14.99",
                img: "../public/images/galletafestival.jpg",
              },
              {
                name: "Ponymalta lata",
                price: "$3.75",
                img: "../public/images/ponymaltalata.jpg",
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
      </div>
      <Benefits />
      <Testimonials />
    </>
  );
}

export default Home;
