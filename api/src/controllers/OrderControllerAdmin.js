import con from "../database/index.js";
import AppError from "../utils/AppError.js";

export default class OrderControllerAdmin {
  async index(req, res) {
    let orders = [];

    try {
      orders = await con("orders");
    } catch (error) {
      throw new AppError(error.message);
    }

    const ordersWithOrdereds = [];

    if (orders.length > 0) {
      for (const order of orders) {
        let ordereds = [];
        let user = null;

        try {
          ordereds = await con("ordered").where({ order_id: order.id });
          user = await con("users")
            .select("id", "name")
            .where({ id: order.user_id })
            .first();
        } catch (error) {
          throw new AppError(error.message);
        }

        const orderedsWithNames = [];
        if (ordereds.length > 0) {
          for (const ordered of ordereds) {
            try {
              const food = await con("foods")
                .where({ id: ordered.food_id })
                .first();
              orderedsWithNames.push({ ...ordered, name: food.name });
            } catch (error) {
              throw new AppError(error.message);
            }
          }
        }

        delete order.user_id;

        ordersWithOrdereds.push({
          ...order,
          user,
          ordereds: orderedsWithNames.length > 0 ? orderedsWithNames : ordereds,
        });
      }

      return res.json(ordersWithOrdereds);
    }

    return res.json([]);
  }
}
