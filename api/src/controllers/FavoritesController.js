import con from "../database/index.js";

import AppError from "../utils/AppError.js";

export default class FavoritesController {
  async create(req, res) {
    const user_id = req.user.id;
    const { food_id } = req.params;

    try {
      await con("favorites").insert({ user_id, food_id });
    } catch (error) {
      throw new AppError(error.message);
    }

    return res.json();
  }
  async index(req, res) {
    const user_id = req.user.id;

    let response;

    try {
      response = await con("favorites").where({ user_id });
    } catch (error) {
      throw new AppError(error.message);
    }

    return res.json(response);
  }

  async delete(req, res) {
    const { food_id } = req.params;

    try {
      await con("favorites").where({ food_id }).del();
    } catch (error) {
      throw new AppError(error);
    }

    return res.json();
  }
}
