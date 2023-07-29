import express from "express";

import {
  signUp,
  signIn,
  getCurrent,
  signOut,
  subscription,
} from "../../controllers/index.js";
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

authRouter.post("/signout", authenticate, signOut);

authRouter.patch(
  "/:id",
  authenticate,
  validateBody.validateBody(schemas.userSubscriptionSchema),
  subscription
);

export default authRouter;
