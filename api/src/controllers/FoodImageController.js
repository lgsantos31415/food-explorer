import con from "../database/index.js";

import DiskStorage from "../providers/DiskStorage.js";

const diskStorage = new DiskStorage();

export default class FoodImageController {
  async create(req, res) {
    const imageFileName = req.file.filename;

    const filename = await diskStorage.saveFile(imageFileName);

    return res.json({ filename });
  }
  async update(req, res) {
    const { id } = req.params;
    const imageFileName = req.file.filename;

    const food = await con("foods").where({ id }).first();

    if (food.image) {
      await diskStorage.deleteFile(food.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);

    food.image = filename;

    await con("foods")
      .update({ ...food, updated_at: con.fn.now() })
      .where({ id });

    return res.json();
  }
}
