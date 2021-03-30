import { Router } from "express";
import * as orderService from "../services/orderService";

const router = Router();

router.post("/", async (req, res) => {
    const status = await orderService.addOrder(req.body);
    res.json(status);
})

router.put("/:id", async (req, res) => {
    const updateResult = await orderService.updateOrder(req.body, req.params.id);
    if (updateResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

router.delete("/:id", async (req, res) => {
    const deleteResult = await orderService.deleteOrder(req.params.id);
    if (deleteResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

export default router;