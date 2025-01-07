import con from "../database/index.js";

import AppError from "../utils/AppError.js";

export default class FoodController {
  async create(req, res) {
    const { name, category, image, description, price, ingredients } = req.body;

    const user_id = req.user.id;

    const [id] = await con("foods").insert({
      name,
      category,
      image,
      description,
      price,
      user_id,
    });

    const ingredientData = ingredients.map((ingredient) => ({
      food_id: id,
      user_id,
      name: ingredient,
    }));

    await con("ingredients").insert(ingredientData);

    return res.json();
  }

  async index(req, res) {
    const { category } = req.params;

    if (!category) {
      throw new AppError("Informe uma categoria");
      return;
    }

    const foods = await con("foods")
      .where({ category })
      .orderBy("created_at", "desc");

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
    const { term } = req.params;

    const foodsResponse = await con("foods").whereLike("name", `%${term}%`);

    const ingredientsResponse = await con("ingredients").whereLike(
      "name",
      `%${term}%`
    );

    let results = [];

    if (ingredientsResponse.length > 0) {
      results = await Promise.all(
        ingredientsResponse.map((item) =>
          con("foods").where({ id: item.food_id })
        )
      );
    }

    if (foodsResponse.length > 0) {
      return res.json(foodsResponse);
    } else if (results.length > 0) {
      return res.json(results);
    } else {
      return res.json();
    }
  }

  async update(req, res) {
    const { food_id, name, category, image, ingredients, description, price } =
      req.body;

    const oldIngredients = await con("ingredients").where({ food_id });
    const arrayOldIngredients = oldIngredients.map((item) => item.name);

    const compareIngredients =
      arrayOldIngredients.length === ingredients.length &&
      arrayOldIngredients.every((item) => ingredients.includes(item));

    if (!compareIngredients) {
      const oldIds = arrayOldIngredients.map((item) => item.id);
      await con("ingredients").whereIn("id", oldIds).del();

      const user_id = req.user.id;
      const newIngredients = ingredients.map((name) => ({
        name,
        user_id,
        food_id,
      }));
    }

    const foodUpdated = {
      name,
      category,
      image,
      description,
      price,
      updated_at: con.fn.now(),
    };

    await con("foods").update(foodUpdated).where({ id: food_id });

    res.json();
  }
}
