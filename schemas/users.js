import Joi from "joi";

const userSignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userSignInSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const userSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .messages({ "any.required": `missing required field email` })
    .required(),
});

export default {
  userSignUpSchema,
  userSignInSchema,
  userSubscriptionSchema,
  verifyEmailSchema,
};
