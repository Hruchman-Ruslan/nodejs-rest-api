import Contact from "../models/contact.js";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const getContactsById = async ({ params }, res) => {
  const { id } = params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json(result);
};

export default ctrlWrapper(getContactsById);
