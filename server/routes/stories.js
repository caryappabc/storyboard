import express from "express";

import {
  getStories,
  createStory,
  updateStory,
  deleteStory,
  likeStory,
} from "../controllers/stories.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getStories);
router.post("/", auth, createStory);
router.patch("/:id", auth, updateStory);
router.delete("/:id", auth, deleteStory);
router.patch("/:id/like", auth, likeStory);

export default router;
