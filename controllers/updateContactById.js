import Contact from "../models/contact.js";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const updateContactById = async ({ body, params }, res) => {
  const { id } = params;
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json(result);
};

export default ctrlWrapper(updateContactById);
