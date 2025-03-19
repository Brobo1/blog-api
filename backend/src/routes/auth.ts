import { Router } from "express";
import { authTestController, loginController } from "../controllers/auth";
import { authJwt } from "../../middleware/auth";

const router = Router();

router.post("/login", loginController);
router.get("/test", authJwt, authTestController);

export default router;
