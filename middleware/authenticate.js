import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

import { HttpError, ctrlWrapper } from "../helpers/index.js";
import User from "../models/user.js";

const authenticate = async ({ headers }, _, next) => {
  const { authorization = "" } = headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw HttpError(401, "Unauthorized");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user) {
      throw HttpError(401, "Unauthorized");
    }
    next();
  } catch {
    throw HttpError(401, "Unauthorized");
  }
};

export default ctrlWrapper(authenticate);
