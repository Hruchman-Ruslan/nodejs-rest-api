import { HttpError, ctrlWrapper } from "../helpers/index.js";
import User from "../models/user.js";

const subscription = async ({ body, params }, res) => {
  try {
    const { id } = params;
    const { subscription } = body;
    const result = await User.findByIdAndUpdate(
      id,
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
