import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Story = mongoose.model("Story", storySchema);

export default Story;
