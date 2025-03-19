import { Router } from "express";
import {
  getCommentsController,
  postCommentController,
} from "../controllers/comment";

const router = Router();

router.get("/:postId", getCommentsController);
router.get("/", getCommentsController);

router.post("/:postId", postCommentController);
export default router;
