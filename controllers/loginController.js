import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import config from "../utils/config.js";
async function login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });

  console.log(user);
  const checkPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!user) {
    return res.status(401).json({
      error: "User does not exist",
    });
  } else if (!checkPassword) {
    return res.status(401).json({
      error: "Password Incorect",
    });
  } else {
    const userForToken = {
      email: user.email,
      id: user._id,
    };

    const token = jwt.sign(userForToken, config.SECRET, { expiresIn: 60 * 60 });

    res.status(200).send({ token, email: user.email, name: user.name });
  }
}

export default login;
