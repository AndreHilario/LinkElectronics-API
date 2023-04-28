import joi from "joi";

export const productDetailsSchema = joi.object({

    amount: joi.number().positive().min(1).max(10).required(),
    voltage: joi.string().required()
});
