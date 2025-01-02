import jsonwebtoken from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import authConfig from "../configs/auth.js";

export default function ensureAuthentication(request, response, next) {
  const authHeader = request.headers;

  if (!authHeader.cookie) {
    throw new AppError("Cookie não encontrado", 401);
    return;
  }

  const [, token] = authHeader.cookie.split("token=");

  try {
    const { sub: user_id } = jsonwebtoken.verify(token, authConfig.secret);

    request.user = {
      id: Number(user_id),
    };

    return next();
  } catch (error) {
    throw new AppError("Cookie inválido", 401);
    return;
  }
}
