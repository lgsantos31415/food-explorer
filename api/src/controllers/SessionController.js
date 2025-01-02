import con from "../database/index.js";

import AppError from "../utils/AppError.js";

import bcryptjs from "bcryptjs";

import authConfig from "../configs/auth.js";

import jsonwebtoken from "jsonwebtoken";

export default class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await con("users").where({ email }).first();

    if (!user) {
      throw new AppError("Email e/ou senha inválidos", 401);
      return;
    }

    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validatePassword) {
      throw new AppError("Email e/ou senha inválidos", 401);
      return;
    }

    const { secret, expiresIn } = authConfig;
    const token = jsonwebtoken.sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secret: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    delete user.password;

    return res.status(201).json({ user });
  }
}
