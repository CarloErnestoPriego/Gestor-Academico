'use strict';

import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        mongoose.connection.on('error', () => {
            console.log('MongoDB - connection error');
            mongoose.disconnect();
        }),
        mongoose.connection.on('connecting', () => {
            console.log('MongoDB | Try Connecting');
        }),
        mongoose.connection.on('connected', () => {
            console.log('MongoDB | Connected to MongoDB');
        }),
        mongoose.connection.on('open', () => {
            console.log('MongoDB | Connected to database');
        }),
        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB | Deconnected to database');
        }),
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB | Disconnected');
        }),
        mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50,
        });
    } catch (error) {
        console.log('Error connecting to the database: ', error);
    }
}