import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function CheckoutForm() {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://dise-eccomerce-back.onrender.com/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerData: formData,
          orderItems: cartItems
        }),
      });

      if (response.ok) {
        alert('Orden enviada exitosamente');
      }
    } catch (error) {
      console.error('Error al enviar la orden:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        {/* Agregar campos similares para dirección, teléfono y email */}
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Proceder al pago
      </button>
    </form>
  );
}

export default CheckoutForm;