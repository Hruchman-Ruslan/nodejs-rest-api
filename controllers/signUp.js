import bcrypt from "bcryptjs";
import User from "../models/user.js";
import gravatar from "gravatar";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const signUp = async ({ body }, res) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const { name, subscription } = await User.create({
    ...body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    name,
    email,
    subscription,
  });
};

export default ctrlWrapper(signUp);
