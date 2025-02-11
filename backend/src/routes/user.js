import { Router } from "express";
import { userPost } from "../controllers/user.js";

const router = Router();

router.get("/users", () => {});
router.post("/users", userPost);

export default router;
