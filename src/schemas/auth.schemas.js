import joi from "joi"

export const loginSchema = joi.object({

    email: joi.string().email().required(),
    password: joi.number().required()
}) 

export const userSchema = joi.object({

    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.number().required().min(3),
    state: joi.string().required(),
    city: joi.string().required(),
    road: joi.string().required()
})