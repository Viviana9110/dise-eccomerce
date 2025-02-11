import { transporter } from '../config/nodemailer.js';
import { createEmailHTML } from '../utils/emailTemplates';

export const createOrder = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);

    // Configuración básica del correo
    const mailOptions = {
      from: 'distributiondise@gmail.com', // Tu correo
      to: 'distributiondise@gmail.com',  // Correo de destino
      subject: 'Test',
      text: 'Test email'
    };

    console.log('Mail options antes de enviar:', mailOptions);

    // Verificamos que el destinatario esté definido
    if (!mailOptions.to) {
      throw new Error('Destinatario no definido');
    }

    // Enviamos el correo
    const result = await transporter.sendMail(mailOptions);
    console.log('Resultado del envío:', result);

    // Respuesta de éxito
    res.status(200).json({
      success: true,
      message: 'Correo enviado correctamente',
      result
    });

  } catch (error) {
    console.error('Error en createOrder:', error);

    // Respuesta de error
    res.status(500).json({
      success: false,
      error: error.message,
      details: 'Error al enviar el correo'
    });
  }
};
