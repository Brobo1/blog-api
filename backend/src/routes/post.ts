import { Router } from "express";
import { createPostController, getPostController } from "../controllers/post";

const router = Router();

router.get("/:postId", getPostController);
router.post("/", createPostController);

export default router;
