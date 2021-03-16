import { Router } from "express";
import * as newsService from "../services/productService";

const router = Router();

router.post("/add", async (req, res) => {
    const product = await newsService.create(req.body);
    res.json(product);
})

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    await newsService.update(req.body, id);
    res.sendStatus(200);
})

router.get("/getOne/:id", async (req, res) => {
    const { id } = req.params;
    const product = await newsService.findById(id);
    res.json(product);
})

router.get("/getMany", async (req, res) => {
    const findParams: any = {
        from: req.query.from,
        to: req.query.to,
    }
    const products = await newsService.findMany(findParams.from, findParams.to);
    res.json(products);
})

router.get("/getManyBySub", async (req, res) => {
    const findParams: any = {
        from: req.query.from,
        to: req.query.to,
        subCategoryId: req.query.subCategoryId,
    }
    const products = await newsService.findManyBySub(findParams.from, findParams.to, findParams.subCategoryId);
    res.json(products);
})