import { Router } from "express";
import * as productOrderService from "../services/productOrderService";

const router = Router();

router.post("/", async (req, res) => {
    const newOrderProduct = await productOrderService.addProductOrder(req.body);
    res.json(newOrderProduct);
})

router.get("/:id", async (req, res) => {
    const orderProduct = await productOrderService.getProductOrder(req.params.id);
    if (orderProduct) {
        res.json(orderProduct);
    } else {
        res.sendStatus(404);
    }
})

router.delete("/:id", async (req, res) => {
    const deleteResult = await productOrderService.deleteProductOrder(req.params.id);
    if (deleteResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

export default router;