import { HttpError, ctrlWrapper } from "../helpers/index.js";
import User from "../models/user.js";

const subscription = async ({ body, user }, res) => {
  try {
    const { _id } = user;
    const { subscription } = body;
    const result = await User.findByIdAndUpdate(
      _id,
      { subscription },
      { new: true }
    );

    res.json({
      name: result.name,
      email: result.email,
      subscription: result.subscription,
    });
  } catch {
    throw HttpError(400);
  }
};

export default ctrlWrapper(subscription);
