const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const loadtest = require("loadtest");
const socketio = require("socket.io");
const server = http.Server(app);
const options = {
  url: "",
  maxRequests: 10,
  statusCallback: statusCallback,
};

const io = socketio(server);

app.get("/", (req, res) => {
  const url = req.query.url;
  if (!url) res.status(400).send("Bad Request");
  options.url = url;
  loadtest.loadTest(options, function (error, result) {
    if (error) {
      io.emit("hello", error);
    }
    io.emit("hello", result);
    console.log("Tests run successfully %s", result.statusCode);
  });
  res.status(200).send("Results below");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${loadtest}`);
});

function statusCallback(error, result, latency) {}
