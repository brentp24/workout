const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {type: String},
      name: {name: String},
      duration: {duration: Number},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number},
      distance: {distance: Number},
    }
  ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout