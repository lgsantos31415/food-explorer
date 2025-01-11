import { Router } from "express";

const favoritesRouter = Router();

import FavoritesController from "../controllers/FavoritesController.js";

const favoritesController = new FavoritesController();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

favoritesRouter.use(ensureAuthentication);

favoritesRouter.post("/:food_id", favoritesController.create);
favoritesRouter.get("/", favoritesController.index);
favoritesRouter.delete("/:food_id", favoritesController.delete);

export default favoritesRouter;
