import express from "express";
import cors from "cors";
import logger from "morgan";
import { router } from "./router";

const app = express();

app.use(cors());
app.use(logger("combined"));
app.use(express.json());

app.use(router);

export { app };
