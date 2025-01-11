import con from "../database/index.js";

import AppError from "../utils/AppError.js";

export default class OrderController {
  async create(req, res) {
    const user_id = req.user.id;
    const { order } = req.body;

    const [order_id] = await con("orders").insert({ user_id });

    if (order.lenght === 0) {
      throw new AppError("Inclua itens ao pedido");
      return;
    }

    for (const ordered of order) {
      await con("ordered").insert({
        food_id: ordered.id,
        quantity: ordered.quantity,
        user_id,
        order_id,
      });
    }

    return res.json();
  }

  async index(req, res) {
    const user_id = req.user.id;

    let orders = [];

    try {
      orders = await con("orders").where({ user_id });
    } catch (error) {
      throw new AppError(error);
    }

    let ordersWithOrdereds = [];

    if (orders.length > 0) {
      for (const order of orders) {
        let ordereds = [];
        try {
          ordereds = await con("ordered").where({ order_id: order.id });
        } catch (error) {
          throw new AppError(error);
        }
        let orderedsWithNames = ordereds;

        if (ordereds.length > 0) {
          orderedsWithNames = [];

          for (const ordered of ordereds) {
            const { name } = await con("foods")
              .where({ id: ordered.food_id })
              .first();

            orderedsWithNames.push({ ...ordered, name });
          }
        }

        ordersWithOrdereds.push({ ...order, ordereds: orderedsWithNames });
      }

      return res.json(ordersWithOrdereds);
    }

    return res.json();
  }
}
