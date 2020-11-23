const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

// setup mongodb connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("open", () => console.log("Connected to mongodb!"));
db.once("error", (error) => console.error(error));

// middleware
app.use(express.json());
app.use(cors());

// port
const PORT = process.env.PORT || 5000;

// routes
app.get("/", (req, res) => res.redirect("/api"));
app.get("/api", (req, res) => {
  res.status(200).json({ version1: `${process.env.BASE_URL}:${PORT}/api/v1/` });
});
app.get("/api/v1/", (req, res) => {
  res.status(200).json({
    urls: {
      exercices: `${process.env.BASE_URL}:${PORT}/api/v1/exercises`,
      foods: `${process.env.BASE_URL}:${PORT}/api/v1/foods`,
    },
  });
});

// exercises route
const exercicesRoute = require("./routes/exercisesRoute");
app.use("/api/v1/exercises", exercicesRoute);

// food route
const foodRoute = require("./routes/foodRoute");
app.use("/api/v1/foods", foodRoute);

app.listen(PORT, () =>
  console.log("Server listening to http://localhost:" + PORT)
);
