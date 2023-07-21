import Contact from "../models/contact.js";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const getAll = async (_, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getById = async ({ params }, res) => {
  const { id } = params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json(result);
};

const add = async ({ body }, res) => {
  const result = await Contact.create(body);
  res.status(201).json(result);
};

const updateById = async ({ body, params }, res) => {
  const { id } = params;
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json(result);
};

const updateStatusContact = async ({ body, params }, res) => {
  const { id } = params;
  const result = await Contact.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json(result);
};

const deleteById = async ({ params }, res) => {
  const { id } = params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteById: ctrlWrapper(deleteById),
};
