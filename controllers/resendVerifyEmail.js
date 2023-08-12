import { HttpError, ctrlWrapper, sendEmail } from "../helpers/index.js";
import User from "../models/user.js";

const resendVerifyEmail = async ({ body }, res) => {
  const { email } = body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email not found");
  }

  if (verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent ",
  });
};

export default ctrlWrapper(resendVerifyEmail);
