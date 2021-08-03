import { Router } from "express";
import * as orderService from "../services/orderService";
import * as productService from "../services/productService";
import * as orderProductService from "../services/productOrderService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { orderValidation } from './../validationSchemas/orderValidation';
import { uuidValidate } from './../validationSchemas/uuidValidate';
import { Statuses } from "../db/models/order";

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await orderValidation.validateAsync(req.body);
    const basketProducts = info.basket;
    delete info.basket;
    info.status = Statuses.inProcessing;
    const order = await orderService.addOrder(info);
    const productsIds = basketProducts.map((item: any) => ( item.id ));
    const fullProducts = await productService.findManyByIds(productsIds);
    let finalBasket = basketProducts.map((item: any) => {
        const fullProduct = fullProducts.find((tempItem) => tempItem.id === item.id);
        return { productId: item.id as string, orderId: order.id as string, weight: item.weight as number, price: fullProduct?.price as number };
    });
    await orderProductService.addProductOrders(finalBasket);
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