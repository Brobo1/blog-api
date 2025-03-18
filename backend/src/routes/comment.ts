import { Router } from "express";
import { getCommentsController } from "../controllers/comment";

const router = Router();

router.get("/:postId", getCommentsController);

export default router;
