const express = require("express");
const router = express.Router();
const Food = require("../Model/FoodModel");

// GET ALL FOOD DATA
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({ foods });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET SINGLE FOOD DATA BY ID
router.get("/:id/recipe", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// STORE FOOD DATA
router.post("/", async (req, res) => {
  const {
    foodName,
    description,
    imageURL,
    cookingTime,
    portion,
    ingredients,
    steps,
  } = req.body;
  const food = new Food({
    foodName,
    description,
    imageURL,
    cookingTime,
    portion,
    ingredients,
    steps,
  });

  try {
    const data = await food.save();
    res.status(201).json({ message: "Food data added!", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Food.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Food data deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
