import { Router } from "express";

const foodRouter = Router();

import FoodController from "../controllers/FoodController.js";

const foodController = new FoodController();

foodRouter.get("/food", foodController.index);
foodRouter.post("/food/:user_id", foodController.create);
foodRouter.get("/food/:id", foodController.show);

export default foodRouter;
