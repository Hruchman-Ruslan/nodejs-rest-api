import Contact from "../models/contact.js";

import { ctrlWrapper } from "../helpers/index.js";

const addContact = async ({ body }, res) => {
  const result = await Contact.create(body);
  res.status(201).json(result);
};

export default ctrlWrapper(addContact);
