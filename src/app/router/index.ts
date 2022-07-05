import express from "express";
import { BaseController } from "../controllers";
import { authRoutes } from "./auth-routes";

const router = express.Router();

router.get("/", BaseController.root);

router.use("/auth", authRoutes);

export { router };
