import { Router } from "express";

const orderRouterAdmin = Router();

import OrderControllerAdmin from "../controllers/OrderControllerAdmin.js";

const orderControllerAdmin = new OrderControllerAdmin();

import ensureAuthentication from "../middlewares/ensureAuthentication.js";

orderRouterAdmin.use(ensureAuthentication);

orderRouterAdmin.get("/", orderControllerAdmin.index);

export default orderRouterAdmin;
