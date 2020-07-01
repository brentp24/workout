const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    }
  ]
},
  {
    toJSON: { virtuals: true }
  }
);

// adds a dynamically-created property to schema
WorkoutSchema.virtual("totalDuration").get(function () {
  var total = 0;

  for (var i = 0; i < this.exercises.length; i++) {
    total += this.exercises[i].duration
  }
  return total;
});

// WorkoutSchema

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout