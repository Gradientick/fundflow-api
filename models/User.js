import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});
userSchema.plugin(mongooseUniqueValidator);
userSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

export default User;
