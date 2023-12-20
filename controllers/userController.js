import bcrypt from "bcrypt";
const saltRounds = 10;
async function createUser(req, res) {
  const { name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, saltRounds);
  console.log(`new user: ${name}, ${email}, ${passwordHash}`);
  return res.status(200).send(`new user: ${name}, ${email}, ${passwordHash}`);
}

export default {
  createUser,
};
