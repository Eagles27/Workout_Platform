require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");

// Create a new express application instance
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// listen on port 5000
app.listen(process.env.PORT, () =>
  console.log("Server started on port", process.env.PORT)
);
