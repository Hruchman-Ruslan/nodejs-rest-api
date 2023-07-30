import Contact from "../models/contact.js";

import { ctrlWrapper } from "../helpers/index.js";

const addContact = async ({ body, user }, res) => {
  const { _id: owner } = user;
  const result = await Contact.create({ ...body, owner });
  res.status(201).json(result);
};

export default ctrlWrapper(addContact);
