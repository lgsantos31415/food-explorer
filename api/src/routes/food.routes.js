import { Router } from "express";

const foodRouter = Router();

import FoodController from "../controllers/FoodController.js";
import FoodImageController from "../controllers/FoodImageController.js";
import FoodSearchController from "../controllers/FoodSearchController.js";

const foodController = new FoodController();
const foodImageController = new FoodImageController();
const foodSearchController = new FoodSearchController();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

import multer from "multer";
import { MULTER } from "../configs/upload.js";
const upload = multer(MULTER);

foodRouter.use(ensureAuthentication);

foodRouter.post("/", foodController.create);
foodRouter.put("/", foodController.update);
foodRouter.delete("/:id", foodController.delete);
foodRouter.get("/index/:category", foodController.index);
foodRouter.get("/show/:id", foodController.show);
foodRouter.get("/search/:term", foodSearchController.search);
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
