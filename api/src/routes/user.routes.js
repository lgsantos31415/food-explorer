import { Router } from "express";

const userRouter = Router();

import UserController from "../controllers/UserController.js";
import UserAvatarController from "../controllers/UserAvatarController.js";
import UserValidateController from "../controllers/UserValidateController.js";
import ensureAuthentication from "../middlewares/ensureAuthentication.js";

const userController = new UserController();
const userAvatarController = new UserAvatarController();
const userValidateController = new UserValidateController();

import { MULTER } from "../configs/upload.js";
import multer from "multer";

const upload = multer(MULTER);

userRouter.post("/", userController.create);
userRouter.put("/", ensureAuthentication, userController.update);
userRouter.get(
  "/validated",
  ensureAuthentication,
  userValidateController.index
);
userRouter.patch(
  "/avatar",
  ensureAuthentication,
  upload.single("avatar"),
  userAvatarController.update
);

export default userRouter;
