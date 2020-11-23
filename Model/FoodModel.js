const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  portion: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: Array,
  },
  steps: {
    type: Array,
  },
});

module.exports = mongoose.model("Food", FoodSchema);
