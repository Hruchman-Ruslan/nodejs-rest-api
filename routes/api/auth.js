import express from "express";

import { signUp, signIn, getCurrent } from "../../controllers/index.js";
import { authenticate, validateBody } from "../../middleware/index.js";
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

authRouter.get("/current", authenticate, getCurrent);

export default authRouter;
