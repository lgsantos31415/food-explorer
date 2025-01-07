import { Router } from "express";

const foodRouter = Router();

import FoodController from "../controllers/FoodController.js";
import FoodImageController from "../controllers/FoodImageController.js";

const foodController = new FoodController();
const foodImageController = new FoodImageController();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

import multer from "multer";
import { MULTER } from "../configs/upload.js";
const upload = multer(MULTER);

foodRouter.use(ensureAuthentication);

foodRouter.post("/", foodController.create);
foodRouter.put("/", foodController.update);
foodRouter.get("/index/:category", foodController.index);
foodRouter.get("/show/:id", foodController.show);
foodRouter.get("/search/:term", foodController.search);

foodRouter.post(
  "/image",
  ensureAuthentication,
  upload.single("image"),
  foodImageController.create
);
foodRouter.patch(
  "/image/:id",
  ensureAuthentication,
  upload.single("image"),
  foodImageController.update
);

export default foodRouter;
