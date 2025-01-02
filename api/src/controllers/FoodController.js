import con from "../database/index.js";

import AppError from "../utils/AppError.js";

export default class FoodController {
  async create(req, res) {
    const { name, category, image, description, price } = req.body;

    const user_id = req.user.id;

    await con("foods").insert({
      name,
      category,
      image,
      description,
      price,
      user_id,
    });

    return res.json();
  }

  async index(req, res) {
    const { category } = req.params;

    if (!category) {
      throw new AppError("Informe uma categoria");
      return;
    }

    const foods = await con("foods").where({ category });

    let foodWithIngredients;

    if (foods.length > 0) {
      foodWithIngredients = await Promise.all(
        foods.map(async (food) => {
          const ingredients = await con("ingredients").where({
            food_id: food.id,
          });
          return {
            ...food,
            ingredients,
          };
        })
      );
    }

    return res.json(foodWithIngredients);
  }

  async show(req, res) {
    const { id } = req.params;
    const food = await con("foods").where({ id }).first();

    let foodWithIngredients = {};

    if (food) {
      const ingredients = await con("ingredients").where({ food_id: id });
      foodWithIngredients = {
        ...food,
        ingredients,
      };
    }

    return res.json(foodWithIngredients);
  }

  async search(req, res) {
    const { title } = req.body;

    if (!title) return res.json();

    const response = await con("foods").whereLike("title", `%${title}%`);

    return res.json(response);
  }
}
