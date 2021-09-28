import express from "express";

import {
  getStoriesBySearch,
  getStories,
  createStory,
  updateStory,
  deleteStory,
  likeStory,
  getStory,
} from "../controllers/stories.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getStoriesBySearch);
router.get("/", getStories);
router.get("/:id", getStory);
router.post("/", auth, createStory);
router.patch("/:id", auth, updateStory);
router.delete("/:id", auth, deleteStory);
router.patch("/:id/like", auth, likeStory);

export default router;
