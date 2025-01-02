import { Router } from "express";

const userRouter = Router();

import UserController from "../controllers/UserController.js";
import UserValidateController from "../controllers/UserValidateController.js";
import ensureAuthentication from "../middlewares/ensureAuthentication.js";

const userController = new UserController();
const userValidateController = new UserValidateController();

userRouter.post("/", userController.create);
userRouter.put("/", ensureAuthentication, userController.update);
userRouter.get(
  "/validated",
  ensureAuthentication,
  userValidateController.index
);

export default userRouter;
