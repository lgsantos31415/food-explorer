import "express-async-errors";
import express from "express";
import routes from "./src/routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import AppError from "./src/utils/AppError.js";

import { TMP_FOLDER, UPLOADS_FOLDER, MULTER } from "./src/configs/upload.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);
app.use(routes);

app.use("/files", express.static(UPLOADS_FOLDER));

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => console.log("Server is running on port", port));
