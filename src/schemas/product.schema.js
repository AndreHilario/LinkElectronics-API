import joi from 'joi'

export const productDetailsSchema = joi.object({
  amount: joi.number().positive().min(1).max(10).required(),
  voltage: joi.string().required().valid('127', '220')
})

export const newProductSchema = joi.object({
  name: joi.string().min(3).required(),
  brand: joi.string().min(3).required(),
  color: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  urlImage: joi.string().min(3).required(),
  model: joi.string().min(3).required(),
  price: joi.number().min(3).required(),
  amount: joi.number().min(1).required()
})
