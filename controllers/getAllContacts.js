import Contact from "../models/contact.js";

import { ctrlWrapper } from "../helpers/index.js";

const getAllContacts = async ({ user, query }, res) => {
  const { _id: owner } = user;
  const { page = 1, limit = 20 } = query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

export default ctrlWrapper(getAllContacts);
