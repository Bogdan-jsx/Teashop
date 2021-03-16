import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Product from "../db/models/product";
import SubCategory from "../db/models/subCategory";
import { ProductAttr } from "../db/models/product";

const productRepository = connection.getRepository(Product);
const subCategoryRepository = connection.getRepository(SubCategory);

interface ProductBasic extends Omit<ProductAttr, "id">{}

export async function create(productParams: ProductBasic) {
    if (subCategoryRepository.findByPk(productParams.subCategoryId)) {
        const id = uuidv4();
        return productRepository.create({
            ...productParams,
            id,
        })
    }
}

export async function update(productParams: ProductBasic, id: string) {
    return productRepository.update({...productParams}, {where: {id}});
}

export async function findById(id: string) {
    return productRepository.findByPk(id);
}

export async function findMany(from: number = 0, to: number = 15) {
    const parameters: any = {offset: from, limit: to};
    return productRepository.findAll(parameters);
}

export async function findManyBySub(from: number = 0, to: number = 15, subCategoryId: string) {
    if (subCategoryRepository.findByPk(subCategoryId)) {
        const parameters: any = {offset: from, limit: to};
        parameters.where = {subCategoryId};
        return productRepository.findAll(parameters);
    }
}