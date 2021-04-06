import mongoose from "mongoose";
import Story from "../models/story.model.js";

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json({ Message: error.message });
  }
};

export const createStory = async (req, res) => {
  const story = req.body;

  const newStory = new Story({ ...story, creator: req.userId });
  try {
    await newStory.save();
    res.status(200).json({ Message: "Story saved" });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};
export const updateStory = async (req, res) => {
  const { id: _id } = req.params;
  const updates = req.body;
  if (!mongoose.Types.ObjectId.isValid)
    return res.status(404).json({ Message: error.message });
  try {
    const updatedStory = await Story.findByIdAndUpdate(
      _id,
      { ...updates, _id },
      {
        new: true,
      }
    );
    res.status(200).json({ updated: updatedStory });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};

export const deleteStory = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid)
    return res.status(404).json({ Message: error.message });

  try {
    await Story.findByIdAndRemove(_id);
    res.json({ Message: "Deleted Successfully" });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};

export const likeStory = async (req, res) => {
  const { id: _id } = req.params;
  if (!req.userId) return res.json({ Message: "Unauthenticated" });
  if (!mongoose.Types.ObjectId.isValid)
    return res.status(404).json({ Message: error.message });
  try {
    const story = await Story.findById(_id);
    const index = story.likes.findIndex((_id) => _id === String(req.userId));

    if (index === -1) {
      story.likes.push(req.userId);
    } else {
      story.likes = story.likes.filter((_id) => _id !== String(req.userId));
    }

    const updatedlike = await Story.findByIdAndUpdate(_id, story, {
      new: true,
    });
    res.status(200).json({ updated: updatedlike });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};
