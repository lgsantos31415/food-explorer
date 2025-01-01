import "express-async-errors";
import express from "express";
import routes from "./src/routes/index.js";

import AppError from "./src/utils/AppError.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);
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
