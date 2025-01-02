import con from "../database/index.js";

export default class FoodController {
  async create(req, res) {
    const { user_id } = req.params;
    const { name, category, image, description, price } = req.body;

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
    const { category } = req.body;
    const foods = await con("foods")
      .select("*")
      .where({ category })
      .orderBy("name");

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

    let foodWithIngredients;

    if (food) {
      const ingredients = await con("ingredients").where({ food_id: id });
      foodWithIngredients = {
        ...food,
        ingredients,
      };
    }

    return res.json(foodWithIngredients);
  }
}
