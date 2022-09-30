let express = require("express");
let app = express();
let path = require("path");
require("dotenv").config();

// Exercise 4:
app.use((request, response, next) => {
  console.log(request.method + " " + request.path + " - " + request.ip);
  next();
});
app.use("/public", express.static(path.join(__dirname, "public")));
// Exercise 1:
console.log("Hello World");

// Exercise 2, 3:
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

let message = {
  message: "Hello json",
};
// Exercise 5:
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json(message);
  }
});

module.exports = app;
