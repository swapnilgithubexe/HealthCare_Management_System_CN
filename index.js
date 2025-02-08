import express from "express";
import cors from "cors"


const server = express();
server.use(cors())
server.use(express.json());


server.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to Health Care system management!"
  })
})

server.listen(3500, () => {
  console.log("Server is listening on 3500");

})