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
    res.status(200).json(categories);
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const info = await categoryBasic.validateAsync(req.body);
    const updateResult = await categoryService.updateCategory(id, info);
    res.status(200).json(updateResult);
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    await categoryService.deleteCategory(id);
    res.sendStatus(200);
}))

export default router;