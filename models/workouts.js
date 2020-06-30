const mongoose = require("mongoose");
const { response } = require("express");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Work out type"
  },
  value: {
    type: Number,
    required: "Reps"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;