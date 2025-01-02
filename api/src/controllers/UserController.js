import AppError from "../utils/AppError.js";

import con from "../database/index.js";

import bcryptjs from "bcryptjs";

export default class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new AppError("Email e/ou nome e/ou senha não informados");
      return;
    }

    if (name.length < 3) {
      throw new AppError("Nome com menos de 3 caracteres");
      return;
    }

    if (password.length < 6) {
      throw new AppError("Senha com menos de 6 caracteres");
      return;
    }

    const verifyEmail = await con("users").where({ email });

    if (verifyEmail.length > 0) {
      throw new AppError("Não foi possivel criar a conta");
      return;
    }

    const protectedPassword = await bcryptjs.hash(password, 10);

    const id = await con("users").insert({
      name,
      email,
      password: protectedPassword,
    });

    return res.json();
  }

  async update(req, res) {
    const { name, email, password, oldPassword } = req.body;
    const id = req.user.id;

    const user = await con("users").where({ id }).first();

    if (name) {
      if (name.length < 3) {
        throw new AppError("Nome com menos de 3 caracteres");
        return;
      }
    }

    if (email) {
      const verifyEmail = await con("users").where({ email }).first();
      if (verifyEmail) {
        throw new AppError("Não foi possivel atualizar a conta");
        return;
      }
    }

    let updatedPassword;

    if (!password && oldPassword) {
      throw new AppError("Informe a senha nova");
      return;
    }

    if (password && !oldPassword) {
      throw new AppError("Informe a senha antiga");
      return;
    }

    if (password && oldPassword) {
      const verifyOldPassword = await bcryptjs.compare(
        oldPassword,
        user.password
      );

      if (!verifyOldPassword) {
        throw new AppError("Não foi possivel atualizar a conta");
        return;
      }

      if (password.length < 6) {
        throw new AppError("Senha com menos de 6 caracteres");
        return;
      }

      updatedPassword = await bcryptjs.hash(password, 10);
    }

    const updatedUser = {
      name: name || user.name,
      email: email || user.email,
      password: updatedPassword || user.password,
    };

    await con("users")
      .update({ ...updatedUser, updated_at: con.fn.now() })
      .where({ id });

    return res.json();
  }
}
