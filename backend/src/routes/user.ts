import { Router } from "express";
import { createUserController, getUserController } from "../controllers/user";

const router = Router();

router.get("/:userId", getUserController);
router.post("/", createUserController);

export default router;
