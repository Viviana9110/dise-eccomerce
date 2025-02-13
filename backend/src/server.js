const path = require('path');
const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const app = express();

// Middleware

app.use(cors({
  origin: 'https://dise-eccomerce.onrender.com/', // Reemplaza con la URL de tu frontend
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', orderRoutes);

// Verificación de dist
const fs = require('fs');

// Configuración para producción
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, '../../../frontend/dist');
console.log("Verificando si dist existe en:", distPath);
console.log("Archivos en dist:", fs.existsSync(distPath) ? fs.readdirSync(distPath) : "No existe");

// app.use(express.static(distPath));
// 	app.get("*", (req, res) => {
//     res.sendFile(path.resolve(distPath, 'index.html'));
//   });
}

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Error interno del servidor' 
  });
  
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
//commit de prueba