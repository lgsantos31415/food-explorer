import dotenv from "dotenv";

dotenv.config();

const authConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: "1d",
};

export default authConfig;
