import express from "express";

import ctrl from "../../controllers/contacts.js";
import validateBody from "../../middlewares/validateBody.js";
import schemas from "../../schemas/contacts.js";

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas), ctrl.add);

router.delete("/:id", ctrl.deleteById);

router.put("/:id", validateBody(schemas), ctrl.updateById);

export default router;
