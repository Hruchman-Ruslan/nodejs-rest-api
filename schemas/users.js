import Joi from "joi";

const userSingUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default {
  userSingUpSchema,
};
