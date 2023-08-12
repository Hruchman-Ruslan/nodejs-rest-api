import bcrypt from "bcryptjs";
import User from "../models/user.js";
import gravatar from "gravatar";

import { HttpError, ctrlWrapper, sendEmail } from "../helpers/index.js";
import { nanoid } from "nanoid";
const { BASE_URL } = process.env;

const signUp = async ({ body }, res) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const { name, subscription } = await User.create({
    ...body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    name,
    email,
    subscription,
  });
};

export default ctrlWrapper(signUp);
