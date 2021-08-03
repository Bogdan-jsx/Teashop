import { Router } from "express";
import * as productOrderService from "../services/productOrderService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { productOrderValidation } from './../validationSchemas/productOrderValidation';
import { uuidValidate } from './../validationSchemas/uuidValidate';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await productOrderValidation.validateAsync(req.body);
    const newOrderProduct = await productOrderService.addProductOrders([info]);
    res.json(newOrderProduct);
}))

router.get("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const orderProduct = await productOrderService.getProductOrder(id);
    if (orderProduct) {
        res.json(orderProduct);
    } else {
        res.sendStatus(404);
    }
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const deleteResult = await productOrderService.deleteProductOrder(id);
    if (deleteResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

export default router;