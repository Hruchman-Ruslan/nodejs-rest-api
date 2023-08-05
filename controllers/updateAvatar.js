import { ctrlWrapper } from "../helpers/index.js";
import path from "path";
import fs from "fs/promises";
import User from "../models/user.js";
import Jimp from "jimp";

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  //   const { _id } = req.user;
  //   const { path: tempUpload, originalName } = req.file;
  //   const fileName = `${_id}_${originalName}`;
  //   const resultUpload = path.join(avatarsDir, fileName);
  //   await fs.rename(tempUpload, resultUpload);
  //   const avatarURL = path.join("avatars", fileName);
  //   await User.findByIdAndUpdate(_id, { avatarURL });

  //   res.json({
  //     avatarURL,
  //   });
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const avatar = await Jimp.read(tempUpload);
  avatar.resize(250, 250).writeAsync(tempUpload);
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

export default ctrlWrapper(updateAvatar);
