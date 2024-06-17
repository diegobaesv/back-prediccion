// src/app.ts
import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConfig from './config/db.config';
import usuariosGoogleRoutes from './routes/usuariosGoogle.routes';
import morgan from 'morgan';
import cors from 'cors';
import { ConnectionOptions } from 'tls';
import prediccionRoutes from './routes/prediccion.routes';


const app = express();

// Middleware para parsear las solicitudes
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


// Conectar a la base de datos
mongoose.connect(dbConfig.url)
.then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => {
    console.log('No se puede conectar a la base de datos', err);
    process.exit();
});

// Rutas
app.use('/api/usuariosGoogle', usuariosGoogleRoutes);
app.use('/api/predicciones', prediccionRoutes); 


// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
