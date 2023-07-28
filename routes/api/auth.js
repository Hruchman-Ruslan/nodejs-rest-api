import express from "express";

import signUp from "../../controllers/singUp.js";
import { validateBody } from "../../middleware/index.js";
import schemas from "../../schemas/users.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody.validateBody(schemas.userSingUpSchema),
  signUp
);

export default authRouter;
