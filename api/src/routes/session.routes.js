import { Router } from "express";

const sessionRouter = Router();

import SessionController from "../controllers/SessionController.js";
const sessionController = new SessionController();

sessionRouter.post("/", sessionController.create);

export default sessionRouter;
