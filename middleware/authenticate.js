import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

import { HttpError, ctrlWrapper } from "../helpers/index.js";
import User from "../models/user.js";

const authenticate = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (!token || bearer !== "Bearer") {
    throw HttpError(401, "Unauthorized");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw HttpError(401, "Unauthorized");
    }
    req.user = user;
    next();
  } catch {
    throw HttpError(401, "Unauthorized");
  }
};

export default ctrlWrapper(authenticate);
