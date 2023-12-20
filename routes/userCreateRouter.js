import express from "express";
import userController from "../controllers/userController.js";
const userCreateRouter = express.Router();

userCreateRouter.post("/", userController.createUser);

export default userCreateRouter;
