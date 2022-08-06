require("dotenv").config();

const express = require("express");

// Create a new express application instance
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

// listen on port 5000
app.listen(process.env.PORT, () =>
  console.log("Server started on port", process.env.PORT)
);
