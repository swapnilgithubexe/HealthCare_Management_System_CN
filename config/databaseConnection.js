import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const Db_PORT = process.env.DB_URI;

export const connectToDatabase = () => {
  mongoose.connect(Db_PORT);
  console.log("Database Connected");

}