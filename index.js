const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar CORS
app.use(cors());

// Habilitar express.json
app.use(express.json());

// Rutas de la aplicación
app.use('/api/productos', require('./routes/producto'));

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
