import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offers = [
  {
    id: 1,
    image: "",
    title: "Descuento del 20% en Snacks",
    description: "Aprovecha esta oferta especial en snacks seleccionados.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x400?text=Oferta+2",
    title: "Compra 2 y lleva 1 gratis en Bebidas",
    description: "No te pierdas esta increíble promoción en nuestra sección de bebidas.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x400?text=Oferta+3",
    title: "15% de descuento en Dulcería",
    description: "Disfruta de tus dulces favoritos con este descuento especial.",
  },
];

const OfferSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Ofertas destacadas</h2>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="relative">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-cyan-950 bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-xl font-bold">{offer.title}</h3>
              <p className="mt-2">{offer.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OfferSlider;