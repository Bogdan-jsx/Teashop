import Joi from "joi";
import { uuidValidate } from "./uuidValidate";

export const orderProductBasicValidation = Joi.object({
    id: uuidValidate,

    weight: Joi.number()
        .min(100)
        .max(1000)
})