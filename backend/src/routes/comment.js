import { Router } from "express";
import {
  getCommentController,
  getCommentsController,
} from "../controllers/comment.js";

const router = Router();

router.get("/:postId", getCommentsController);

export default router;
