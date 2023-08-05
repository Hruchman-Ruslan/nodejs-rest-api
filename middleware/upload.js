import multer from "multer";
import path from "path";

const tempDir = path.resolve("temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (_, { originalname }, cb) => {
    cb(null, originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

export default upload;
