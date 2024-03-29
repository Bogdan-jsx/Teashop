import Joi from "joi";
import { orderProductBasicValidation } from "./orderProductBasicValidation";

const phoneValidation = Joi.extend(require("joi-phone-number"));

export const orderValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(20),

    phone: phoneValidation.string().phoneNumber(),

    address: Joi.string()
        .min(5)
        .max(40),

    comment: Joi.string()
        .max(150),
    
    basket: Joi.array().items(orderProductBasicValidation),
})