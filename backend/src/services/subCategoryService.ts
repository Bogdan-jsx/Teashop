import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import SubCategory, { SubCategoryAttr } from './../db/models/subCategory';
import Category from './../db/models/category';
import Product from "../db/models/product";

const subCategoryRepository = connection.getRepository(SubCategory);
const categoryRepository = connection.getRepository(Category);
const productRepository = connection.getRepository(Product);

interface SubCategoryBasic extends Omit<SubCategoryAttr, "id">{}

export async function addSubCategory(subCategoryParams: SubCategoryBasic) {
    const id = uuidv4();
    return subCategoryRepository.create({
        ...subCategoryParams,
        id,
    })
}

export async function getSubCategory(subCategoryId: string) {
    return await subCategoryRepository.findByPk(subCategoryId);
}

export async function getAllSubCategoriesForCategory(categoryId: string) {
    if (categoryRepository.findByPk(categoryId)) {
        const subCategories = await subCategoryRepository.findAll({ where: { categoryId } });
        return subCategories;
    } else {
        return undefined;
    }
}

export async function updateSubCategory(id: string, newInfo: SubCategoryBasic) {
    if (subCategoryRepository.findByPk(id)) {
        return await subCategoryRepository.update(newInfo, { where: { id } });
    } else {
        return undefined;
    }
}

export async function deleteSubCategory(id: string) {
    if (subCategoryRepository.findByPk(id)) {
        return await subCategoryRepository.destroy({ where: { id } });
    } else {
        return undefined;
    }
}

export async function countProducts(id: string) {
    const count = productRepository.count({ where: { subCategoryId: id } });
    return count;
}