const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.find({});
    res.json(workoutData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});
router.get("/workouts/range", function (req, res) {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("workouts/range", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
