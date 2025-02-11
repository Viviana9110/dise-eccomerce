import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Snacks from './pages/Snacks';
import Candies from './pages/Candies';
import { CartProvider } from './context/CartContext';
import Beverages from './pages/Beverages';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/snacks" element={<Snacks />} />
              <Route path="/beverages" element={<Beverages />} />
              <Route path="/candies" element={<Candies />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;