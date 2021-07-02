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
    let product = await productService.findById(id);
    // let result;
    if (product) {
        product.images = JSON.parse(product.images); 
        // const subCategory = await subCategoryService.getSubCategory(product.subCategoryId);
        // result = {...product/*, type: subCategory?.name*/};
    }
    res.json(product);
}))

router.get("/getMany", handleErrorAsyncMiddleware(async (req, res) => {
    const findParams: any = {
        from: Number(req.query.from),
        to: Number(req.query.to),
    }
    let products = await productService.findMany(findParams.from, findParams.to);
    for (const product of products) {
        product.images = JSON.parse(product.images);
    }
    res.json(products);
}))

router.get("/getSection", handleErrorAsyncMiddleware(async (req, res) => {
    const findParams: any = {
        from: Number(req.query.from),
        to: Number(req.query.to),
        subCategoryId: req.query.subCategoryId,
    }
    let products = await productService.findManyBySub(findParams.from, findParams.to, [findParams.subCategoryId]);
    if (products) {
        for (const product of products) {
            product.images = JSON.parse(product.images);
        }
    }
    const sub = await subCategoryService.getSubCategory(findParams.subCategoryId);
    const count = await subCategoryService.countProducts(findParams.subCategoryId);
    const name = sub?.name;
    const result = { name, count, products }
    res.json(result);
}))

router.get("/getManyBySub", handleErrorAsyncMiddleware(async (req, res) => {
    const from = Number(req.query.from);
    const to = Number(req.query.to);
    const subCategoryIds = Array.isArray(req.query.subCategoryIds) ? req.query.subCategoryIds : [req.query.subCategoryIds];
    const sortBy = req.query.sortBy as string;
    const products = await productService.findManyBySub(from, to, subCategoryIds as string[], sortBy);
    if (products) {
        for (const product of products) {
            product.images = JSON.parse(product.images);
        }
    }
    res.json(products);
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const id = await uuidValidate.validateAsync(req.params.id);
    await productService.deleteProduct(id);
    res.sendStatus(200)
}))

export default router;