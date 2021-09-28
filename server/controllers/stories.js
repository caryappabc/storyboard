import mongoose from "mongoose";
import Story from "../models/story.model.js";

export const getStories = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 9; // number of entries per page
    const startIndex = (Number(page) - 1) * LIMIT; // calculate the starting index for each page
    const total = await Story.countDocuments({});
    const stories = await Story.find()
      .sort({ _id: -1 }) // sort to get the latest entry first
      .limit(LIMIT)
      .skip(startIndex);
    res.status(200).json({
      data: stories,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT), //calculating thr total number of pages
    });
  } catch (error) {
    res.status(404).json({ Message: error.message });
  }
};

export const getStory = async (req, res) => {
  const { id } = req.params;

  try {
    const story = await Story.findById(id);

    res.status(200).json(story);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStoriesBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");

    const stories = await Story.find({
      $or: [({ title: title }, { tags: title })],
    });
    res.status(200).json({ data: stories });
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
