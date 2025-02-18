'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js'
import limiter from '../src/middlewares/validar-cant-peticiones.js';

const configurarMiddlewares = (app) => {//Middleware: Funciones que se ejecturan antes de llegar a los controladores o rutas de nuestros proyectos
    app.use(express.urlencoded({ extended: false }));//Express pueda procesar datos enviados en formularios HTML
    app.use(cors());//para que el backend pueda recibir solicitudes desde otros dominios distintos.
    app.use(express.json());//permite que Express interprete JSON en el body de las solicitudes.
    app.use(helmet());//Añade seguridad configurando cabeceras HTTP para proteger la aplicación contra ataques comunes.
    app.use(morgan('dev'));//es un logger que registra todas las peticiones HTTP en la consola.
    app.use(limiter);
}

const configurarRutas = () => {

}

const conectarDB = async () => {
    try {
        await dbConnection();
        console.log("Conexion a la base de datos exitosa");
    } catch (error) {
        console.error('Error conectando a la base de datos', error);
        process.exit(1);
    }
}

export const initServer = async () => {
    const app = express();  //Se creo el servidor
    const port = process.env.PORT || 3000;  //La aplicacion puede usar el pueto definido en .env o el otro "3000"

    await conectarDB(); //Await: Esperamos a que se ejecute para que se siga ejecutando la funcion
    
    configurarMiddlewares(app);
    configurarRutas(app);

    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });

}