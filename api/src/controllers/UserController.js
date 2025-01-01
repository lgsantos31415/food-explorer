import AppError from "../utils/AppError.js";

export default class UserController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Email e/ou senha inválidos");
      return;
    }

    return res.json({ id: 1, email });
  }
}
