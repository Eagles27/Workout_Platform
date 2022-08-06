require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
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

// Connect to the MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen on port 5000
    app.listen(process.env.PORT, () =>
      console.log(
        "Connected to DB and Server started on port",
        process.env.PORT
      )
    );
  })
  .catch((err) => console.log(err));
