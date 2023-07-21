import { HttpError } from "../helpers/index.js";

const validateBody = (contactAddSchema) => {
  const func = ({ body }, _, next) => {
    const { error } = contactAddSchema.validate(body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

const validateBodyFavorite = (contactUpdateFavoriteSchema) => {
  const func = ({ body }, _, next) => {
    const { error } = contactUpdateFavoriteSchema.validate(body);
    if (error) {
      next(HttpError(400, "missing field favorite"));
    }
    next();
  };
  return func;
};

export default {
  validateBody,
  validateBodyFavorite,
};
