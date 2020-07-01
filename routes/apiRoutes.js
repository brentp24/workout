const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
      .then(data => {
        console.log(data);
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
          console.log(err.message)
      });
});


router.post("/api/workouts", function (req, res) {
  db.Workout.create(req.body)
      .then(data => {
        console.log(data);
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
          console.log(err.message)
      });
});

router.put("/api/workouts/:id", function (req, res) {
  db.Workout.update({
    _id: req.params.id
  }, {
    $push: { exercises:req.body } 
  })
      .then(data => {
        console.log(data);
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
          console.log(err.message)
      });
});


router.get("/api/workouts/range", function (req, res) {
  db.Workout.find({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
    console.log(err.message)
  })
})


module.exports = router;

