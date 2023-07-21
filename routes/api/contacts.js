import express from "express";

import ctrl from "../../controllers/contacts.js";
import { validateBody, isValidId } from "../../middlewares/index.js";
import schemas from "../../schemas/contacts.js";

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody.validateBody(schemas.contactAddSchema), ctrl.add);

router.put(
  "/:id",
  isValidId,
  validateBody.validateBody(schemas.contactAddSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody.validateBodyFavorite(schemas.contactUpdateFavoriteSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", isValidId, ctrl.deleteById);

export default router;
