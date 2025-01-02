import con from "../database/index.js";

export default class IngredientController {
  async create(req, res) {
    const { food_id } = req.params;
    const { name, user_id } = req.body;

    await con("ingredients").insert({ food_id, user_id, name });

    return res.json();
  }

  async index(req, res) {
    const { user_id, food_id, name } = req.body;

    let response;

    if (user_id) {
      response = await con("ingredients").where({ user_id });
    }

    if (food_id) {
      response = await con("ingredients").where({ food_id });
    }

    if (name) {
      response = await con("ingredients").whereLike("name", `%${name}%`);
    }

    return res.json(response);
  }
}
