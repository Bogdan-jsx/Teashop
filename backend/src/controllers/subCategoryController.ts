import { Router } from 'express';
import * as subCategoryService from "../services/subCategoryService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { uuidValidate } from './../validationSchemas/uuidValidate';
import { subCategoryBasic } from './../validationSchemas/subCategoryBasic';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await subCategoryBasic.validateAsync(req.body);
    const subCategory = await subCategoryService.addSubCategory(info);
    res.json(subCategory);
}))

router.get("/allForCategory/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const subCategories = await subCategoryService.getAllSubCategoriesForCategory(id);
    if (subCategories) {
        res.json(subCategories);
    } else {
        res.sendStatus(404);
    }
}))

router.get("/one/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const subCategory = await subCategoryService.getSubCategory(id);
    if (subCategory) {
        res.json(subCategory);
    } else {
        res.sendStatus(404);
    }
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await subCategoryBasic.validateAsync(req.body);
    const id = await uuidValidate.validateAsync(req.params.id);
    const updateResult = await subCategoryService.updateSubCategory(id, info);
    res.json(updateResult);
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const deleteResult = await subCategoryService.deleteSubCategory(id);
    if (deleteResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}))

router.get("/count/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const count = await subCategoryService.countProducts(id);
    res.json(count);
}))

export default router;