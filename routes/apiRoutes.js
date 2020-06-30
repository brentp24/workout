
const router = require("express").Router();

const db = require("../models");


router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
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

