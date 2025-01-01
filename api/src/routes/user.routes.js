import { Router } from "express";

const userRouter = Router();

import UserController from "../controllers/UserController.js";

const userController = new UserController();

userRouter.post("/user", userController.create);

export default userRouter;