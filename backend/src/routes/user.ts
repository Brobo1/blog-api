import { Router } from "express";
import {
  createUserController,
  getUserController,
  loginUserController,
} from "../controllers/user";

const router = Router();

router.get("/:userId", getUserController);
router.post("/", createUserController);

router.post("/login", loginUserController);

export default router;
