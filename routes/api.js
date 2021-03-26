const router = require("express").Router();
const Workout = require("../models/workout.js");

// Get all workouts; Add totalDuration field
router.get("/api/workout/", (req, res) =>{
  Workout.aggregate(
      [{
        $addFields : {totalDuration : {$sum: "$exercises.duration"}}
      }]
    )
    .then(data =>{
      res.json(data);
    })
    .catch(err =>{
      res.status(400).json(err)
    })
})

// Create workout
router.post("/api/workout/", (req,res) =>{
  Workout.create(req.body)
    .then(data =>{
      res.json(data);
    })
    .catch(err =>{
      res.status(400).json(err)
    })
})

// Add exercise to workout
router.put("/api/workout/:id", (req, res) =>{
  Workout.findByIdAndUpdate(req.params.id, {
    $push: {exercises : {...req.body}}
  })
    .then(data =>{
      res.json(data);
    })
    .catch(err =>{
      res.status(400).json(err)
    })
})

// Add many exercises in bulk for instances were the application went offline
router.post("/api/workout/bulk", ({ body }, res) => {
    Workout.findByIdAndUpdate(
    body[0].id,
    {
     $push: { exercises: { $each: body }}
    })
    .then((data) => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Get last 7 workouts
router.get("/api/workout/range", (req,res) =>{
  Workout.aggregate(
      [{
        $addFields : {totalDuration : {$sum: "$exercises.duration"}}
      }]
    )
    .sort({day : -1})    
    .limit(7)
    .then(data =>{
      res.json(data.reverse()); // reverse the data so that it is back to oldest to newest
    })
    .catch(err =>{
      res.status(400).json(err)
    })
})

module.exports = router;
