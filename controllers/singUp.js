import User from "../models/user.js";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const signUp = async ({ body }, res) => {
  const { name, email } = await User.create(body);

  res.status(201).json({
    name,
    email,
  });
};

export default ctrlWrapper(signUp);
