import Joi from "joi";
import { uuidValidate } from './uuidValidate';

export const subCategoryBasic = Joi.object({
    name: Joi.string()
        .max(35),

    alias: Joi.string()
        .max(35),
    
    categoryId: uuidValidate,
})