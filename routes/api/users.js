import express from "express";

import {
  signUp,
  signIn,
  getCurrent,
  signOut,
  subscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} from "../../controllers/index.js";
import { authenticate, validateBody, upload } from "../../middleware/index.js";
import schemas from "../../schemas/users.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody.validateBody(schemas.userSignUpSchema),
  signUp
);

authRouter.get("/verify/:verificationToken", verifyEmail);

authRouter.post(
  "/verify",
  validateBody.validateBody(schemas.verifyEmailSchema),
  resendVerifyEmail
);

authRouter.post(
  "/signin",
  validateBody.validateBody(schemas.userSignInSchema),
  signIn
);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/signout", authenticate, signOut);

authRouter.patch(
  "/subscription",
  authenticate,
  validateBody.validateBody(schemas.userSubscriptionSchema),
  subscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

export default authRouter;
