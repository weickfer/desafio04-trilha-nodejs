import express, { NextFunction, Request, Response } from "express";

import { AppError } from "./AppError";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

// eslint-disable-next-line
app.use((err: Request, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }
});

export { app };
