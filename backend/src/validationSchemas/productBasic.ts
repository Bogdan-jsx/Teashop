import Joi from 'joi';
import { uuidValidate } from './uuidValidate';

export const productBasic = Joi.object({
    name: Joi.string()
        .max(150),

    price: Joi.number(),

    discount: Joi.number()
        .min(0)
        .max(99),

    vendorCode: Joi.number(),

    effect: Joi.string()
        .min(3)
        .max(20),

    appearance: Joi.string()
        .min(3)
        .max(20),

    brew: Joi.string()
        .min(3)
        .max(30),

    taste: Joi.string()
        .min(3)
        .max(20),
    
    weight: Joi.number(),

    images: Joi.array(),

    subCategoryId: uuidValidate,
})