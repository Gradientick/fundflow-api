import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.SECRET;
const DB = process.env.DB;

export default {
  SECRET,
  DB,
};
