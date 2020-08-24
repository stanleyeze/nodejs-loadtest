const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const loadtest = require("loadtest");
var bodyParser = require("body-parser");

//loadtes options
const options = {
  url: "",
  maxRequests: 100,
  statusCallback: statusCallback,
};

//middlewares...
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.post("/", (req, res) => {
  const body = { ...req.body };
  if (!body || body.url === "") res.status(400).send("Bad Request");

  //set options values for loadtes
  options.url = body.url;
  options.maxRequests = body.number ? parseInt(body.number) : 10;

  //send request with loadtest
  loadtest.loadTest(options, function (error, result) {
    if (error) {
      res.status(400).send({ error: error });
    }
    res.status(200).send(result).header("Access-Control-Allow-Origin", "*");
  });
});

//listening to port env or 5000
app.listen(port, () => {
  console.log(`Service running...`);
});

//calback function for the loadtest api
function statusCallback(error, result, latency) {}
