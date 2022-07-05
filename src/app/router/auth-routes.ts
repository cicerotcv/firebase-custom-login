import express from "express";
import { AuthController } from "../controllers/AuthController";

export const authRoutes = express.Router();

authRoutes.get("/", AuthController.index);
authRoutes.post("/", AuthController.createAccount);
authRoutes.post("/login", AuthController.authenticate);
