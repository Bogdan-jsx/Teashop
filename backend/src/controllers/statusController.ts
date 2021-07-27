import { Router } from "express";
import * as statusService from "../services/statusService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import Joi  from 'joi';
import { uuidValidate } from './../validationSchemas/uuidValidate';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const name = await Joi.string().max(15).validateAsync(req.body.name);
    await statusService.addStatus(name);
    res.sendStatus(200);
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const name = await Joi.string().max(15).validateAsync(req.body.name);
    const updateResult = await statusService.updateStatus(name, id);
    if (updateResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const deleteResult = await statusService.deleteStatus(id);
    if (deleteResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

export default router;