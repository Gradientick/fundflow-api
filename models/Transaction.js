import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  Type: Boolean,
  From: String,
  To: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

TransactionSchema.set("ToJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
