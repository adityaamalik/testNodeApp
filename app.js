const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is the test app !");
});

app.listen("6001", () => {
  console.log("Server is running !");
});
