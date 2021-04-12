import multer from "multer"
import { Router } from "express";
import * as imageService from "../services/imageService";

const upload = multer({ storage: multer.memoryStorage() })

const router = Router();

router.post("/", upload.single("img"), async (req, res) => {
    const imgId = await imageService.addImage(req.file);
    res.json(imgId);
})

router.get("/:id", async (req, res) => {
    const img = await imageService.getImage(req.params.id);
    res.json(img);
})

router.delete("/:id", async (req, res) => {
    await imageService.deleteImage(req.params.id);
    res.sendStatus(200);
})

export default router;