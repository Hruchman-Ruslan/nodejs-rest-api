import { ctrlWrapper } from "../helpers/index.js";

const getCurrent = ({ user }, res) => {
  const { name, email, subscription } = user;

  res.json({
    name,
    email,
    subscription,
  });
};

export default ctrlWrapper(getCurrent);
