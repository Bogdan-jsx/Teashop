import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Image from '../db/models/image';

const imageRepository = connection.getRepository(Image);

export async function addImage(img: Express.Multer.File, productId: string) {
    const id = uuidv4();
    const newImg = await imageRepository.create({
        id,
        size: img.size,
        type: img.mimetype,
        data: img.buffer,
        name: img.originalname,
        productId,
    })
    return newImg.id;
}

export async function getImage(id: string) {
    return imageRepository.findOne({ where: { id } });
}

export async function deleteImage(id: string) {
    return imageRepository.destroy({ where: { id } });
}
