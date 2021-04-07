import { Router } from "express";
import * as productService from "../services/productService";

const router = Router();

router.post("/", async (req, res) => {
    console.log(req.body);
    const product = await productService.create(req.body);
    if (product) {
        res.json(product); 
    } else {
        res.status(404);
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    await productService.update(req.body, id);
    res.sendStatus(200);
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await productService.findById(id);
    res.json(product);
})

router.get("/getMany", async (req, res) => {
    const findParams: any = {
        from: req.query.from,
        to: req.query.to,
    }
    const products = await productService.findMany(findParams.from, findParams.to);
    res.json(products);
})

router.get("/getManyBySub", async (req, res) => {
    const findParams: any = {
        from: req.query.from,
        to: req.query.to,
        subCategoryId: req.query.subCategoryId,
    }
    const products = await productService.findManyBySub(findParams.from, findParams.to, findParams.subCategoryId);
    res.json(products);
})

router.delete("/:id", async (req, res) => {
    await productService.deleteProduct(req.params.id);
})

export default router;