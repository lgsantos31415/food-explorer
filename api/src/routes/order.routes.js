import { Router } from "express";

const orderRouter = Router();

import OrderController from "../controllers/OrderController.js";

const orderController = new OrderController();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

orderRouter.use(ensureAuthentication);

orderRouter.post("/", orderController.create);
orderRouter.get("/", orderController.index);

export default orderRouter;
