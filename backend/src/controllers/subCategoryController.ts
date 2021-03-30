import { Router } from 'express';
import * as subCategoryService from "../services/subCategoryService";

const router = Router();

router.post("/", async (req, res) => {
    const subCategory = await subCategoryService.addSubCategory(req.body);
    if (subCategory) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

router.get("/:id", async (req, res) => {
    const subCategories = await subCategoryService.getAllSubCategoriesForCategory(req.params.id);
    if (subCategories) {
        res.json(subCategories);
    } else {
        res.sendStatus(404);
    }
})

router.put("/:id", async (req, res) => {
    const updateResult = await subCategoryService.updateSubCategory(req.params.id, req.body);
    if (updateResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

router.delete("/:id", async (req, res) => {
    const deleteResult = await subCategoryService.deleteSubCategory(req.params.id);
    if (deleteResult != undefined) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

export default router;