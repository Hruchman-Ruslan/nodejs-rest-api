import Contact from "../models/contact.js";

import { HttpError, ctrlWrapper } from "../helpers/index.js";

const deleteContactById = async ({ params }, res) => {
  const { id } = params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }
  res.json({
    message: "Delete success",
  });
};

export default ctrlWrapper(deleteContactById);
