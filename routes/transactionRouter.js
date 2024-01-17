import express from "express";
import transactionController from "../controllers/transactionController.js";
const transactionRouter = express.Router();

transactionRouter.post("/", transactionController.addTransaction);
transactionRouter.get("/", transactionController.getTransactions);
transactionRouter.delete("/", transactionController.deleteTransaction);
transactionRouter.put("/", transactionController.editTransactions);
