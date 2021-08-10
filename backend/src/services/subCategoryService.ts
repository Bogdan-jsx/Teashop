import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import SubCategory, { SubCategoryAttr } from './../db/models/subCategory';
import Category from './../db/models/category';
import Product from "../db/models/product";
import createError from 'http-errors';

const subCategoryRepository = connection.getRepository(SubCategory);
const categoryRepository = connection.getRepository(Category);
const productRepository = connection.getRepository(Product);

interface SubCategoryBasic extends Omit<SubCategoryAttr, "id">{}

export async function addSubCategory(subCategoryParams: SubCategoryBasic) {
    if (await subCategoryRepository.findOne({ where: { name: subCategoryParams.name } })) {
        throw createError(400, "Subcategory with this name is already exists");
    }
    const id = uuidv4();
    return subCategoryRepository.create({
        ...subCategoryParams,
        id,
    })
}

export async function getSubCategory(subCategoryId: string) {
    const subCategory = await subCategoryRepository.findByPk(subCategoryId);
    if (!subCategory) {
        throw createError(404, "Subcategory not found");
    }
    return subCategory;
}

export async function getAllSubCategoriesForCategory(categoryId: string) {
    if (!await categoryRepository.findByPk(categoryId)) {
        throw createError(404, "Category not found");
    }
    return subCategoryRepository.findAll({ where: { categoryId } });
}

export async function updateSubCategory(id: string, newInfo: SubCategoryBasic) {
    if (!await subCategoryRepository.findByPk(id)) {
        throw createError(404, "Subcategory not found");
    }
    await subCategoryRepository.update(newInfo, { where: { id } });
    return subCategoryRepository.findByPk(id);
}

export async function deleteSubCategory(id: string) {
    if (!await subCategoryRepository.findByPk(id)) {
        throw createError(404, "Subcategory not found");
    }
    return await subCategoryRepository.destroy({ where: { id } });
}

export async function countProducts(id: string) {
    if (!await subCategoryRepository.findByPk(id)) {
        throw createError(404, "Subcategory not found");
    }
    const count = productRepository.count({ where: { subCategoryId: id } });
    return count;
}