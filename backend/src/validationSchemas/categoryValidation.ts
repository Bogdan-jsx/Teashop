import Joi from "joi";

export const categoryBasic = Joi.object({
    name: Joi.string()
        .max(35),
        
    alias: Joi.string()
        .max(35),
})