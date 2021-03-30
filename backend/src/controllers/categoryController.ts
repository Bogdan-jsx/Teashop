import { Router } from 'express';
import * as categoryService from "../services/categoryService";

const router = Router();

router.post("/", async (req, res) => {
    await categoryService.addCategory(req.body);
    res.sendStatus(200);
})

router.get("/", async (req, res) => {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
})

router.put("/:id", async (req, res) => {
    const updateResult = await categoryService.updateCategory(req.params.id, req.body);
    if (updateResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

router.delete("/:id", async (req, res) => {
    const deleteResult = await categoryService.deleteCategory(req.params.id);
    if (deleteResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

export default router;