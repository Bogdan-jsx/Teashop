import {v4 as uuidv4} from "uuid";
import { Op } from "sequelize";
import connection from "../db/connection";
import Product from "../db/models/product";
import SubCategory from "../db/models/subCategory";
import { ProductAttr } from "../db/models/product";
import Image from './../db/models/image';
import sequelize from './../db/connection';
import { Sequelize } from 'sequelize-typescript';

const productRepository = connection.getRepository(Product);
const subCategoryRepository = connection.getRepository(SubCategory);
const imagesRepository = connection.getRepository(Image);

interface ProductBasic extends Omit<ProductAttr, "id">{}

export async function create(productParams: ProductBasic) {
    if (subCategoryRepository.findByPk(productParams.subCategoryId)) {
        const id = uuidv4();
        productParams.images = JSON.stringify(productParams.images);
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
    return productRepository.findByPk(id);
}

export async function findMany(from: number = 0, to: number = 15) {
    let parameters: any = { offset: from, limit: to };
    return productRepository.findAll(parameters);
}

export async function findManyBySub(from: number = 0, to: number = 15, subCategoryIds: Array<string>, sort?: string) {
    let parameters: any = {offset: from, limit: to};
    // console.log("subCategories: ", subCategoryIds, " type: ", typeof subCategoryIds);
    if (subCategoryIds[0] != undefined && subCategoryIds != ['']) {
        parameters.where = { 
            subCategoryId: {
                [Op.or]: subCategoryIds,
            }
        };
    }
    if (sort != "popular" && sort != undefined) {
        parameters.order = [[ Sequelize.literal(`price - price / 100 * discount ${sort === 'cheap' ? 'ASC' : 'DESC'}`) ]]; //"price - price / 100 * discount", `${sort === 'cheap' ? 'ASC' : 'DESC'}`
    }
    // console.log(parameters);
    return productRepository.findAll(parameters);
}

export async function findManyByName(from: number = 0, to: number = 15, searchReq: string) {
    let parameters: any = {offset: from, limit: to};
    parameters.where = { name: { [Op.regexp]: `${searchReq}` } };
    return productRepository.findAll(parameters);
}

export async function deleteProduct(id: string) {
    return productRepository.destroy({ where: { id } });
}