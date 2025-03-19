import { Router } from "express";
import {
  getCommentController,
  getCommentsController,
} from "../controllers/comment";

const router = Router();

router.get("/:postId", getCommentController);
router.get("/", getCommentsController);

export default router;
