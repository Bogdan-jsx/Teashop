import dotenv from 'dotenv';
dotenv.config();

import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerOptions from "./swagger.json";
import bodyParser from "body-parser";
import configControllers from './controllers/index'
import createDb from "./db/createDb";

async function start() {
    await createDb;

    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerOptions))

    configControllers(app);

    app.listen(process.env.PORT);
}

start();