import express from "express";

import { signUp, signIn } from "../../controllers/index.js";
import { validateBody } from "../../middleware/index.js";
import schemas from "../../schemas/users.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody.validateBody(schemas.userSignUpSchema),
  signUp
);

authRouter.post(
  "/signin",
  validateBody.validateBody(schemas.userSignInSchema),
  signIn
);

export default authRouter;
