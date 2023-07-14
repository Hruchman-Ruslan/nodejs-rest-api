import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ "any.required": `'name must be exist` }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({ "any.required": `'email must be exist` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `'phone must be exist` }),
});

export default contactAddSchema;
