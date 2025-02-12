const API_URL = 'http://localhost:3001/api';

export const sendOrder = async (orderData) => {
  try {
    
    const response = await fetch(`${API_URL}/send-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending order:', error);
    throw error;
  }
}