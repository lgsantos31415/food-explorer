import { Router } from "express";

const ingredientRouter = Router();

import IngredientController from "../controllers/IngredientController.js";

const ingredientController = new IngredientController();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

ingredientRouter.use(ensureAuthentication);

ingredientRouter.get("/", ingredientController.index);

export default ingredientRouter;
