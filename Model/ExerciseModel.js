const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  totalExercise: {
    type: Number,
  },
  imageURL: {
    type: String,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
