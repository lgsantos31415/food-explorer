import { Router } from "express";

import userRouter from "./user.routes.js";
import foodRouter from "./food.routes.js";
import ingredientRouter from "./ingredient.routes.js";
import sessionRouter from "./session.routes.js";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/food", foodRouter);
routes.use("/ingredient", ingredientRouter);
routes.use("/session", sessionRouter);

export default routes;
