import { Router } from "express";
import {
  createPostController,
  getPostController,
  getPostsController,
} from "../controllers/post";
import { authJwt } from "../../middleware/auth";

const router = Router();

router.get("/:postId", getPostController);
router.get("/", getPostsController);

router.post("/", authJwt, createPostController);

export default router;
