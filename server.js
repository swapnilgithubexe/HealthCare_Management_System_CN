import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import { connectToDatabase } from "./config/databaseConnection.js";
import { errorLogger } from "./middlewares/errorLogger.js"
import logEvent from "./middlewares/eventLoggingMiddleware.js";

dotenv.config()


const server = express();
server.use(cors())
server.use(express.json());

//logging middlewares (for errors and event logging)
server.use(errorLogger);
server.use(logEvent)

server.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to Health Care system management!"
  })
})

server.listen(process.env.PORT, () => {
  console.log("Server is listening on 3500");
  connectToDatabase();

})