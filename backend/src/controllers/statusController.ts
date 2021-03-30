import { Router } from "express";
import * as statusService from "../services/statusService";

const router = Router();

router.post("/", async (req, res) => {
    console.log(req.body);
    await statusService.addStatus(req.body.name);
    res.sendStatus(200);
})

router.put("/:id", async (req, res) => {
    const updateResult = await statusService.updateStatus(req.body.name, req.params.id);
    if (updateResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

router.delete("/:id", async (req, res) => {
    const deleteResult = await statusService.deleteStatus(req.params.id);
    if (deleteResult) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

export default router;