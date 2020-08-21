const express = require("express");
const app = express();
const port = 3000;
const loadtest = require("loadtest");
const options = {
  url: "http://localhost:3000/",
  maxRequests: 10,
  statusCallback: statusCallback,
};

app.get("/", async (req, res) => {
  const obj = { stanley: "ley" };
  await loadtest.loadTest(options, function (error, result) {
    if (error) {
      return console.error(
        "Got an error just to make sure everything is okay and this now: %s",
        error
      );
    }
    console.log("Tests run successfully %s", result.statusCode);
  });
  res.send(obj);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${loadtest}`);
});

function statusCallback(error, result, latency) {}
