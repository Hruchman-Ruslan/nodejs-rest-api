import express from "express";

import contactService from "../../models/contacts.js";

import { HttpError } from "../../helpers/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await contactService.getAllContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactService.getContactById(id);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
    // const { status = 500, message = "Server error" } = error;
    // res.status(status).json({ message });
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

export default router;
