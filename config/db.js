const mongoose = require('mongoose');
require('dotenv').config(); // Carga el archivo .env en la raíz del proyecto

const conectarDB = async () => {
    try {
        console.log(process.env.DB_MONGO); // Verificación

        await mongoose.connect(process.env.DB_MONGO, {});
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;
