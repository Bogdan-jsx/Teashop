import { Router } from "express";
import * as productService from "../services/productService";
import * as subCategoryService from "../services/subCategoryService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { productBasic } from './../validationSchemas/productBasic';
import { uuidValidate } from './../validationSchemas/uuidValidate';

const router = Router();

router.post("/", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await productBasic.validateAsync(req.body);
    const product = await productService.create(info);
    if (product) {
        res.json(product); 
    } else {
        res.status(404);
    }
}))

router.put("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const info = await productBasic.validateAsync(req.body);
    const id = await uuidValidate.validateAsync(req.params.id);
    await productService.update(info, id);
    res.sendStatus(200);
}))

router.get("/one/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    const product = await productService.findById(id);
    res.json(product);
}))

router.get("/getMany", handleErrorAsyncMiddleware(async (req, res) => {
    const findParams: any = {
        from: Number(req.query.from),
        to: Number(req.query.to),
    }
    const products = await productService.findMany(findParams.from, findParams.to);
    res.json(products);
}))

router.get("/getManyBySub", handleErrorAsyncMiddleware(async (req, res) => {
    const findParams: any = {
        from: Number(req.query.from),
        to: Number(req.query.to),
        subCategoryId: req.query.subCategoryId,
    }
    console.log(findParams);
    const products = await productService.findManyBySub(findParams.from, findParams.to, findParams.subCategoryId);
    const sub = await subCategoryService.getSubCategory(findParams.subCategoryId);
    const count = await subCategoryService.countProducts(findParams.subCategoryId);
    const name = sub?.name;
    const result = { name, count, products }
    res.json(result);
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    await productService.deleteProduct(id);
}))

export default router;