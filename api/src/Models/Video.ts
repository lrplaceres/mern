import { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  { versionKey: false, timeStamp: true }
);

export default model("Video", videoSchema);
