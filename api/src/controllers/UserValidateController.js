import AppError from "../utils/AppError.js";

import con from "../database/index.js";

export default class UserValidateController {
  async index(req, res) {
    const { user } = req;

    const checkUser = await con("users").where({ id: user.id }).first();

    if (!checkUser) {
      throw new AppError("Não autorizado", 401);
      return;
    }

    return res.status(200).json();
  }
}
