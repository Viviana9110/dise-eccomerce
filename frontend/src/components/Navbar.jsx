import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

function Navbar() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-cyan-900">
        <Link to="/" className="text-xl font-bold">
              Mi tierra products
            </Link>
            </div>
          <ul className="flex space-x-6">
            
            <Link to="/snacks" className=" text-cyan-900 hover:text-cyan-700 font-bold">
              Snacks
            </Link>
            <Link to="/beverages" className="text-cyan-900 hover:text-cyan-700 font-bold">
              Bebidas
            </Link>
            <Link to="/candies" className="text-cyan-900 hover:text-cyan-700 font-bold">
              Dulcería
            </Link>
          </ul>
          <div className="flex space-x-4">            
              <button onClick={() => setIsCartOpen(true)} className="relative">
                <FaShoppingCart className="text-2xl  text-cyan-900" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </button>            
          </div>
        
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <Cart onClose={() => setIsCartOpen(false)} />
        </>
      )}

      
    </>
  );
}

export default Navbar;
