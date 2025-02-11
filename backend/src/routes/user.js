import { Router } from "express";
import { userPost } from "../controllers/user.js";

const router = Router();

router.get("/", () => {});
router.post("/", userPost);

export default router;
