import express from "express";

import {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContact,
  deleteContactById,
} from "../../controllers/index.js";
import { validateBody, isValidId } from "../../middleware/index.js";
import schemas from "../../schemas/contacts.js";

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:id", isValidId, getContactById);

router.post(
  "/",
  validateBody.validateBody(schemas.contactAddSchema),
  addContact
);

router.put(
  "/:id",
  isValidId,
  validateBody.validateBody(schemas.contactAddSchema),
  updateContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody.validateBodyFavorite(schemas.contactUpdateFavoriteSchema),
  updateStatusContact
);

router.delete("/:id", isValidId, deleteContactById);

export default router;
