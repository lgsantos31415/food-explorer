import { Router } from "express";

import userRouter from "./user.routes.js";
import foodRouter from "./food.routes.js";
import ingredientRouter from "./ingredient.routes.js";

const routes = Router();

routes.use(userRouter);
routes.use(foodRouter);
routes.use(ingredientRouter);

export default routes;
