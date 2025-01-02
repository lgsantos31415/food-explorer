import { Router } from "express";

const foodRouter = Router();

import FoodController from "../controllers/FoodController.js";

const foodController = new FoodController();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

foodRouter.use(ensureAuthentication);

foodRouter.post("/", foodController.create);
foodRouter.get("/index/:category", foodController.index);
foodRouter.get("/show/:id", foodController.show);
foodRouter.get("/", foodController.show);

export default foodRouter;
