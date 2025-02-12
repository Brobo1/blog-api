import { Router } from "express";
import { userPostController } from "../controllers/user.js";

const router = Router();

router.get("/", () => {});
router.post("/", userPostController);

export default router;
