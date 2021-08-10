import { Router } from 'express';
import * as subCategoryService from "../services/subCategoryService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { uuidValidate } from './../validationSchemas/uuidValidate';
import { subCategoryBasic } from './../validationSchemas/subCategoryBasic';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await subCategoryBasic.validateAsync(req.body);
    const subCategory = await subCategoryService.addSubCategory(info);
    res.status(200).json(subCategory);
}))

router.get("/allForCategory/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const subCategories = await subCategoryService.getAllSubCategoriesForCategory(id);
    res.status(200).json(subCategories);
}))

router.get("/one/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const subCategory = await subCategoryService.getSubCategory(id);
    res.status(200).json(subCategory);
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await subCategoryBasic.validateAsync(req.body);
    const id = await uuidValidate.validateAsync(req.params.id);
    const updateResult = await subCategoryService.updateSubCategory(id, info);
    res.status(200).json(updateResult);
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    await subCategoryService.deleteSubCategory(id);
    res.sendStatus(200);
}))

router.get("/count/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const count = await subCategoryService.countProducts(id);
    res.status(200).json(count);
}))

export default router;