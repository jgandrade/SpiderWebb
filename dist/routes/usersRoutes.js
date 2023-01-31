import { register } from "../controllers/usersController.js";
import express from "express";
export const router = express.Router();
router.post("/register", register);
//# sourceMappingURL=usersRoutes.js.map