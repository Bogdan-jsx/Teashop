import { Router } from 'express';
import * as categoryService from "../services/categoryService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { categoryBasic } from './../validationSchemas/categoryValidation';
import { uuidValidate } from './../validationSchemas/uuidValidate';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await categoryBasic.validateAsync(req.body);
    await categoryService.addCategory(info);
    res.sendStatus(200);
}))

router.get("/", handleErrorAsyncMiddleware(async (req, res) => {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const info = await categoryBasic.validateAsync(req.body);
    const updateResult = await categoryService.updateCategory(id, info);
    if (updateResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const deleteResult = await categoryService.deleteCategory(id);
    if (deleteResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

export default router;