import multer from "multer"
import { Router } from "express";
import * as imageService from "../services/imageService";
import handleErrorAsyncMiddleware from './../helpers/handleErrorAsyncMiddleware';
import { Readable } from "stream";

const upload = multer({ storage: multer.memoryStorage() })

const router = Router();

router.post("/", upload.single("img"), handleErrorAsyncMiddleware(async (req, res) => {
    const imgId = await imageService.addImage(req.file, req.body.productId);
    res.json(imgId);
}))

router.get("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    const img = await imageService.getImage(req.params.id);
    if (img) {
        res.setHeader('Content-Type', img.type);
        res.end(img.data);
    } 
}))

router.delete("/:id", handleErrorAsyncMiddleware(async (req, res) => {
    await imageService.deleteImage(req.params.id);
    res.sendStatus(200);
}))

export default router;