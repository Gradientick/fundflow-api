import express from "express";
import cors from "cors";
import userCreateRouter from "./routes/userCreateRouter.js";
import loginRouter from "./routes/loginRouter.js";
import config from "./utils/config.js";
import mongoose from "mongoose";

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
connectToDB(config.DB);

// Endpoints
app.use("/api/createuser", userCreateRouter);
app.use("/api/login", loginRouter);
app.use("api/transactions", transactionsRouter);
export default app;
