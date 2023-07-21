import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

ContactSchema.pre("findOneAndUpdate", handleUpdateValidate);

ContactSchema.post("save", handleSaveError);
ContactSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", ContactSchema);

export default Contact;
