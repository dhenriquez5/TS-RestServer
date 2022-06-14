import express from 'express';
import dotenv from 'dotenv';
import userRouter from '../routes/usuarios';
import cors from 'cors'
import db from '../db/conexion';

export class Server {

    private app: express.Application;
    private port: string;
    private apiPaths= {
        usuarios:'/api/usuarios'
    };

    constructor() {
        console.log(process.env.PORT)
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online")
        } catch (error) {
            throw new Error("Error Al conectar la bd");
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura body
        this.app.use(express.json());

        //publickc

        this.app.use(express.static('public'));


    }

    routes(){
        this.app.use(this.apiPaths.usuarios,userRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running in port " + this.port)
        });
    }
}