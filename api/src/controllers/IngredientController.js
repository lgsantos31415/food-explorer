import con from "../database/index.js";

import AppError from "../utils/AppError.js";

export default class IngredientController {
  async index(req, res) {
    const { food_id, name } = req.body;

    if (!food_id && !name) {
      throw new AppError("Informe algo");
      return;
    }

    let response;

    if (food_id) {
      response = await con("ingredients").where({ food_id });
    }

    if (name) {
      response = await con("ingredients").whereLike("name", `%${name}%`);
    }

    return res.json(response);
  }
}
