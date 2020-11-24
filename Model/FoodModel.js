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
    required: true,
    default: [],
  },
  steps: {
    type: Array,
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("Food", FoodSchema);
