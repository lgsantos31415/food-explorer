import con from "../database/index.js";

export default class FoodSearchController {
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
}
