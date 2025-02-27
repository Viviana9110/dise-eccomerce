import React from 'react'
import { FaShippingFast, FaStar, FaLeaf } from "react-icons/fa";
const Benefits = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-yellow-50 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">
        ¿Por qué elegirnos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <FaShippingFast className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Envíos rápidos</h3>
          <p className="text-gray-600 text-sm">
            Recibe tus productos favoritos en tiempo récord.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaStar className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Calidad garantizada</h3>
          <p className="text-gray-600 text-sm">
            Productos auténticos y frescos, directamente desde Colombia.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaLeaf className="text-yellow-500 text-5xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Sabores auténticos</h3>
          <p className="text-gray-600 text-sm">
            Disfruta de sabores que te transportarán a nuestra tierra.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Benefits