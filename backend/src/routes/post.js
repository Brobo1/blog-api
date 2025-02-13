import { Router } from "express";
import {
  createPostController,
  getPostController,
} from "../controllers/post.js";

const router = Router();

router.get("/:postId", getPostController);
router.post("/", createPostController);

export default router;
