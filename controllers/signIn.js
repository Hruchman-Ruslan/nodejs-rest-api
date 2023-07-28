import bcrypt from "bcryptjs";
import User from "../models/user.js";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const signIn = async ({ body }, res) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const token = "dfkdpfjsdpfdspffksd";

  res.json({
    token,
  });
};

export default ctrlWrapper(signIn);
