require("dotenv").config();
const express = require("express");
const server = express();

const utilsRouter = require("./routes/utils");
server.use("/api/v1", utilsRouter);

server.get("/", (req, res) => {
  res.send(
    "<h2>Usages</h2><pre><code style='background-color: #eee; border: 1px solid #999; display: block; padding: 20px; width: 500px;'>GET: https://fetch-url-title.herokuapp.com/api/v1/title/?url={URL}</code></pre>"
  );
});

const start = async () => {
  server.listen(process.env.PORT);
};

start();
