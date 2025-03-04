import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Snacks", image: "/images/tarritorojo.jpg", link: "/snacks" },
  { name: "Bebidas", image: "/images/avena.jpg", link: "/bebidas" },
  { name: "Dulcería", image: "/images/dulceria.jpg", link: "/dulceria" },
  { name: "Conservas", image: "/images/conservas.jpg", link: "/conservas" },
  { name: "Salsas", image: "/images/salsas.jpg", link: "/salsas" },
  { name: "Aseo", image: "/images/aseo.jpg", link: "/aseo" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Categorías Destacadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-contain "
              />
              <div className="absolute inset-0 bg-cyan-800 bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-100 transition-opacity duration-300">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
