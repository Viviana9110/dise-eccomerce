import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCookie, FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { GiHoneyJar, GiKetchup } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

function Navbar() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-900">
          <Link to="/" className="text-xl font-bold">
            Mi tierra products
          </Link>
        </div>

        {/* Hamburger Menu Button (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-cyan-900 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-900 my-1 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-cyan-900 transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <Link to="/snacks" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold">
            <FaPizzaSlice className="w-5 h-5" />
            <span>Snacks</span>
          </Link>
          <Link to="/beverages" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold">
            <BiDrink className="w-5 h-5" />
            <span>Bebidas</span>
          </Link>
          <Link to="/candies" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold">
            <FaCookie className="w-5 h-5" />
            <span>Dulcería</span>
          </Link>
          <Link to="/preserves" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold">
            <GiHoneyJar className="w-5 h-5" />
            <span>Conservas</span>
          </Link>
          <Link to="/dips" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold">
            <GiKetchup className="w-5 h-5" />
            <span>Salsas</span>
          </Link>
          <Link to="/aseo" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold">
            <MdCleaningServices className="w-5 h-5" />
            <span>Aseo</span>
          </Link>
        </ul>

        {/* Cart Icon */}
        <div className="flex space-x-4">
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <FaShoppingCart className="text-2xl text-cyan-900" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/snacks" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold" onClick={() => setIsMenuOpen(false)}>
            <FaPizzaSlice className="w-5 h-5" />
            <span>Snacks</span>
          </Link>
          <Link to="/beverages" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold" onClick={() => setIsMenuOpen(false)}>
            <BiDrink className="w-5 h-5" />
            <span>Bebidas</span>
          </Link>
          <Link to="/candies" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold" onClick={() => setIsMenuOpen(false)}>
            <FaCookie className="w-5 h-5" />
            <span>Dulcería</span>
          </Link>
          <Link to="/preserves" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold" onClick={() => setIsMenuOpen(false)}>
            <GiHoneyJar className="w-5 h-5" />
            <span>Conservas</span>
          </Link>
          <Link to="/dips" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold" onClick={() => setIsMenuOpen(false)}>
            <GiKetchup className="w-5 h-5" />
            <span>Salsas</span>
          </Link>
          <Link to="/aseo" className="flex items-center space-x-2 text-cyan-900 hover:text-cyan-700 font-bold" onClick={() => setIsMenuOpen(false)}>
            <MdCleaningServices className="w-5 h-5" />
            <span>Aseo</span>
          </Link>
        </div>
      </div>

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
