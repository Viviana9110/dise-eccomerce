const express = require('express');
const router = express.Router();
const transporter = require('../config/emailConfig');

router.post('/send-order', async (req, res) => {
  console.log(req.body)
  const { customerData, orderItems } = req.body;

  const orderTotal = orderItems.reduce((total, item) => total + item.price, 0);
  
  const emailHTML = `
    <h2>Nueva Orden de Productos Colombianos</h2>
    
    <h3>Datos del Cliente:</h3>
    <p><strong>Nombre:</strong> ${customerData.name}</p>
    <p><strong>Dirección:</strong> ${customerData.address}</p>
    <p><strong>Teléfono:</strong> ${customerData.phone}</p>
    <p><strong>Email:</strong> ${customerData.email}</p>
    
    <h3>Productos Ordenados:</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f8f9fa;">
          <th style="padding: 8px; border: 1px solid #dee2e6;">Producto</th>
          <th style="padding: 8px; border: 1px solid #dee2e6;">Precio</th>
        </tr>
      </thead>
      <tbody>
        ${orderItems.map(item => `
          <tr>
            <td style="padding: 8px; border: 1px solid #dee2e6;">${item.name}</td>
            <td style="padding: 8px; border: 1px solid #dee2e6;">$${item.price}</td>
          </tr>
        `).join('')}
      </tbody>
      <tfoot>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 8px; border: 1px solid #dee2e6;"><strong>Total</strong></td>
          <td style="padding: 8px; border: 1px solid #dee2e6;"><strong>$${orderTotal}</strong></td>
        </tr>
      </tfoot>
    </table>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.STORE_EMAIL,
    subject: `Nueva Orden - ${customerData.name}`,
    html: emailHTML
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Email enviado con éxito!");
    res.status(200).json({ 
      success: true, 
      message: 'Orden enviada exitosamente' 
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al procesar la orden', 
      error: error.message 
    });
  }
});

module.exports = router;