import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Category, {CategoryAttr} from './../db/models/category';
import SubCategory from "../db/models/subCategory";
import createError from "http-errors";

const categoryRepository = connection.getRepository(Category);
const subCategoryRepository = connection.getRepository(SubCategory);

interface CategoryBasic extends Omit<CategoryAttr, "id" | "subCategories">{}

export async function addCategory(categoryParams: CategoryBasic) {
    if (await categoryRepository.findOne({ where: { name: categoryParams.name } })) {
        throw createError(400, "Category with this name is already exists");
    }
    const id = uuidv4();
    return categoryRepository.create({
        ...categoryParams,
        id,
    })
}

export async function getAllCategories() {
    return await categoryRepository.findAll({ include: [subCategoryRepository] })
}

export async function updateCategory(id: string, newInfo: CategoryBasic) {
    if (!await categoryRepository.findByPk(id)) {
        throw createError(404, "Category not found");
    } else if (await categoryRepository.findOne({ where: { name: newInfo.name } })) {
        throw createError(400, "Category with this name is already exists");
    }
    await categoryRepository.update(newInfo, { where: { id } } );
    return categoryRepository.findByPk(id);
}

export async function deleteCategory(id: string) {
    const category = await categoryRepository.findByPk(id);
    if (!category) {
        throw createError(404, "Category not found");
    } else if (!category.subCategories) {
        return await categoryRepository.destroy({ where: { id } });
    }
}