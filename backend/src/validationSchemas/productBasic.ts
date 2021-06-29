import Joi from 'joi';
import { uuidValidate } from './uuidValidate';

export const productBasic = Joi.object({
    name: Joi.string()
        .max(150),

    price: Joi.number(),

    discount: Joi.number()
        .min(0)
        .max(99),

    vendorCode: Joi.string()
        .pattern(new RegExp('^[0-9]{6}$')),

    effect: Joi.string()
        .min(3)
        .max(50),

    appearance: Joi.string()
        .min(3)
        .max(50),

    brew: Joi.string()
        .min(3)
        .max(50),

    taste: Joi.string()
        .min(3)
        .max(50),
    
    weight: Joi.number(),

    images: Joi.array(),

    subCategoryId: uuidValidate,
})