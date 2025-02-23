import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-40 object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-cyan-900 text-white py-2 px-4 rounded-md hover:bg-cyan-700 flex items-center justify-center gap-2"
        >
          <FaShoppingCart />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;