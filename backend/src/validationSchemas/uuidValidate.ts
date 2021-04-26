import Joi from "joi"

export const uuidValidate = Joi.string().guid({ version: "uuidv4" });