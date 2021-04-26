import { Router } from "express";
import * as orderService from "../services/orderService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { orderValidation } from './../validationSchemas/orderValidation';
import { uuidValidate } from './../validationSchemas/uuidValidate';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await orderValidation.validateAsync(req.body);
    const order = await orderService.addOrder(info);
    res.json(order);
}))

router.get("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const order = await orderService.getOrder(id);
    res.json(order);
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const info = await orderValidation.validateAsync(req.params.id);
    const updateResult = await orderService.updateOrder(info, id);
    if (updateResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const deleteResult = await orderService.deleteOrder(id);
    if (deleteResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

export default router;