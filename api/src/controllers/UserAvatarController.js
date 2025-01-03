import con from "../database/index.js";

import AppError from "../utils/AppError.js";
import DiskStorage from "../providers/DiskStorage.js";

const diskStorage = new DiskStorage();

export default class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id;
    const avatarFileName = req.file.filename;

    const user = await con("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFileName);

    user.avatar = filename;

    await con("users")
      .update({ ...user, updated_at: con.fn.now() })
      .where({ id: user.id });

    return res.json(user);
  }
}
