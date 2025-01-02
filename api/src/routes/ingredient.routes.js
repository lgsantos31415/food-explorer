import { Router } from "express";

const ingredientRouter = Router();

import IngredientController from "../controllers/IngredientController.js";

const ingredientController = new IngredientController();

ingredientRouter.post("/ingredient/:food_id", ingredientController.create);
ingredientRouter.get("/ingredient", ingredientController.index);

export default ingredientRouter;
