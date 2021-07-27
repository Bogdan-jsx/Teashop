import {v4 as uuidv4} from "uuid";
import connection from "../db/connection";
import Category, {CategoryAttr} from './../db/models/category';
import SubCategory from "../db/models/subCategory";

const categoryRepository = connection.getRepository(Category);
const subCategoryRepository = connection.getRepository(SubCategory);

interface CategoryBasic extends Omit<CategoryAttr, "id" | "subCategories">{}

export async function addCategory(categoryParams: CategoryBasic) {
    const id = uuidv4();
    categoryRepository.create({
        ...categoryParams,
        id,
    })
}

export async function getAllCategories() {
    return await categoryRepository.findAll({ include: [subCategoryRepository] })
}

export async function updateCategory(id: string, newInfo: CategoryBasic) {
    if (categoryRepository.findByPk(id)) {
        return categoryRepository.update(newInfo, { where: { id } });
    } else {
        return undefined;
    }
}

export async function deleteCategory(id: string) {
    const category = await categoryRepository.findByPk(id);
    if (category && !category.subCategories) {
        return await categoryRepository.destroy({ where: { id } });
    } else {
        return undefined;
    }
}