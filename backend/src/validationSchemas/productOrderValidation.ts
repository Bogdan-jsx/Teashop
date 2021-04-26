import Joi from "joi"
import { uuidValidate } from './uuidValidate';

export const productOrderValidation = Joi.object({
    productId: uuidValidate,
    
    orderId: uuidValidate,

    price: Joi.number(),

    weight: Joi.number(),
})