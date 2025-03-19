import { Router } from "express";
import {
  createPostController,
  getPostController,
  getPostsController,
} from "../controllers/post";

const router = Router();

router.get("/:postId", getPostController);
router.get("/", getPostsController);

router.post("/", createPostController);

export default router;
