
const router = require("express").Router();

const Workout = require("../models/workout");


router.get("/api/workouts", function (req, res) {
  Workout.find({})
      .then(data => {
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
          console.log(err)
          console.log(err.message)
      });
});

module.exports = router;

