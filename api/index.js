import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import "./db/initDB.js";
import rootRouter from "./routers/rootRouter.js";
import authRouter from "./routers/authRouter.js";
import hotelsRouter from "./routers/hotelsRouter.js";
import usersRouter from "./routers/users.js";
import roomsRouter from "./routers/roomsRouter.js";
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", rootRouter);
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);
app.use("/api/rooms", roomsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4000, () => console.log("Server Start on localhost:4000 🟩🟩"));
