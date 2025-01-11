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

  async update(req, res) {
    const { food_id, name, category, image, ingredients, description, price } =
      req.body;

    // Obter ingredientes antigos e fazer o mapeamento correto para os IDs
    const oldIngredients = await con("ingredients").where({ food_id });
    const oldIds = oldIngredients.map((item) => item.id);

    // Comparar ingredientes antigos e novos
    const compareIngredients =
      oldIds.length === ingredients.length &&
      oldIds.every((item) => ingredients.includes(item));

    if (!compareIngredients) {
      // Deletar ingredientes antigos
      await con("ingredients").whereIn("id", oldIds).del();

      // Criar novos ingredientes
      const user_id = req.user.id;
      const newIngredients = ingredients.map((name) => ({
        name,
        user_id,
        food_id,
      }));

      // Inserir novos ingredientes no banco de dados
      await con("ingredients").insert(newIngredients);
    }

    // Atualizar a comida
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

  async delete(req, res) {
    const { id } = req.params;

    const response = await con("foods").where({ id }).first();

    if (!response) {
      throw new AppError("Prato não encontrado");
      return;
    }

    await con("foods").where({ id }).del();

    res.json();
  }
}
