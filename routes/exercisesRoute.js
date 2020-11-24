const express = require("express");
const router = express.Router();
const Exercise = require("../Model/ExerciseModel");

// GET ALL EXERCISES DATA
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET SINGLE EXERCISE DATA
router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.status(200).json(exercise);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// STORE EXERCISE DATA
router.post("/", async (req, res) => {
  const {
    title,
    description,
    duration,
    totalExercise,
    imageURL,
    exercises,
  } = req.body;

  const exerciseData = new Exercise({
    title,
    description,
    duration,
    totalExercise,
    imageURL,
    exercises,
  });

  try {
    // save data to mongodb
    const data = await exerciseData.save();
    res.status(200).json({ message: "Exercise data added!", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE EXERCISE DATA
router.delete("/:id", async (req, res) => {
  try {
    await Exercise.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Exercise data deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
