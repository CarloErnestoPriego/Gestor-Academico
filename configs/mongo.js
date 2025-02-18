'use strict';

import mongoose from "mongoose";

export const dbConnection = async() => {
    try {
        mongoose.connection.on('error', ()=>{   //Se ejecuta si encuentra algun error
            console.log('MongoDB | Could not be connect to MongoDB');
            mongoose.disconnect();  //Si lanza algun error nos desconecta de la base de datos
        });
        mongoose.connection.on('connecting', () =>{
            console.log('MongoDB | Try Connection')
        });
        mongoose.connection.on('connected', () => {
            console.log('MongoDB | Connected to MongoDB')
        });
        mongoose.connection.on('open', () => {
            console.log('MongoDB | connected to database')
        })
        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB | Reconnected to MongoDB')
        });
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB | Disconnected')
        });
        mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000, //Indicamos cuanto tiempo dura la conexion
            maxPoolSize: 50,    //Indicamos que solo 50 usuario pueden conectarse

        });
    } catch (error) {
        console.log('Database connection filed', error);
    }
}