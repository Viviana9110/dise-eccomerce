import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Snacks from './pages/Snacks';
import Candies from './pages/Candies';
import Beverages from './pages/Beverages';
import Preserves from './pages/Preserves';
import { CartProvider } from './context/CartContext';
import Dips from './pages/Dips';
import Aseo from './pages/Aseo';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';

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
              <Route path="/preserves" element={<Preserves />} />
              <Route path="/dips" element={<Dips />} />
              <Route path="/aseo" element={<Aseo />} />
            </Routes>
          </main>
          <Benefits/>
          <Testimonials/>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;