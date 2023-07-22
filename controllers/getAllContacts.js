import Contact from "../models/contact.js";

import { ctrlWrapper } from "../helpers/index.js";

const getAllContacts = async (_, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

export default ctrlWrapper(getAllContacts);
