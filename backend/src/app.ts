import dotenv from 'dotenv';
dotenv.config();

import express, {Request, Response, NextFunction} from "express"
import { ResponseError } from "./types";
import swaggerUi from "swagger-ui-express"
import swaggerOptions from "./swagger.json";
import bodyParser from "body-parser";
import configControllers from './controllers/index'
import createDb from "./db/createDb";
import winston from "winston";
import dailyRotateFile from "winston-daily-rotate-file";

async function start() {
    await createDb;
    await import('./db/connection').then(module => module.default.sync());

    const logger = winston.createLogger({
        transports: [
            new dailyRotateFile({
                filename: "./log/%Date%.log",
                datePattern: "YYYY-MM-DD",
                level: "error",
            })
        ]
    })

    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerOptions))

    configControllers(app);

    app.use(( err: ResponseError, req: Request, res: Response, next: NextFunction) => {
        console.log(123)
        logger.log({
            level: "error",
            message: err.message,
        });
        res.statusCode = err.status || 500;
        res.json({error: err.message});
    })

    app.listen(process.env.PORT);
}

start();