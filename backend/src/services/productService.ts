import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Product from "../db/models/product";
import SubCategory from "../db/models/subCategory";
import { ProductAttr } from "../db/models/product";
import Image from './../db/models/image';

const productRepository = connection.getRepository(Product);
const subCategoryRepository = connection.getRepository(SubCategory);
const imagesRepository = connection.getRepository(Image);

interface ProductBasic extends Omit<ProductAttr, "id">{}

export async function create(productParams: ProductBasic) {
    if (subCategoryRepository.findByPk(productParams.subCategoryId)) {
        const id = uuidv4();
        return productRepository.create({
            ...productParams,
            id,
        })
    } else {
        return undefined;
    }
}

export async function update(productParams: ProductBasic, id: string) {
    return productRepository.update({...productParams}, {where: {id}});
}

export async function findById(id: string) {
    return productRepository.findByPk(id, { include: [imagesRepository] });
}

export async function findMany(from: number = 0, to: number = 15) {
    console.log("service");
    let parameters: any;
    if (from > 0) {
        console.log(1);
        parameters.offset = from;
    }
    if (to > 0) {
        console.log(2);
        parameters.limit = to;
    }
    return productRepository.findAll(parameters);
}

export async function findManyBySub(from: number = 0, to: number = 15, subCategoryId: string) {
    if (subCategoryRepository.findByPk(subCategoryId)) {
        let parameters: any = {offset: from, limit: to};
        parameters.where = {subCategoryId};
        console.log(parameters);
        return productRepository.findAll(parameters);
    }
}

export async function deleteProduct(id: string) {
    return productRepository.destroy({ where: { id } });
}