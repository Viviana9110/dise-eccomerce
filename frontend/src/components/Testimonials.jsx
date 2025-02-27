import React from 'react'

const testimonios = [
    {
      nombre: "Laura Martínez",
      comentario:
        "¡Me encantan los productos! Son auténticos y me recuerdan a casa.",
      imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      nombre: "Carlos Gómez",
      comentario:
        "Excelente calidad y sabor. El envío fue rápido y seguro.",
      imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      nombre: "Mariana López",
      comentario:
        "Recomiendo esta tienda 100%. ¡Los sabores son inigualables!",
      imagen: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={testimonio.imagen}
              alt={testimonio.nombre}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gray-300"
            />
            <p className="italic text-gray-700 mb-2">
              “{testimonio.comentario}”
            </p>
            <h4 className="font-semibold text-lg text-gray-900">
              {testimonio.nombre}
            </h4>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials