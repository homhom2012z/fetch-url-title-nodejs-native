require("dotenv").config();
const express = require("express");
const server = express();

const utilsRouter = require("./routes/utils");
server.use("/api/v1", utilsRouter);

server.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  server.listen(process.env.PORT);
};

start();
