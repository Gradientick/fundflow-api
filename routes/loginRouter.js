import express from "express";

const loginRouter = express.Router();

loginRouter.post("/", loginController.Login);
