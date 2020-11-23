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
  total: {
    type: Number,
  },
  imageURL: {
    type: String,
  },
  exercises: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
