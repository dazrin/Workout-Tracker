// Dependancies
const mongoose = require("mongoose");

// Destructure Schema object from mongoose
const { Schema } = mongoose;

// Create mongoose schema 
const workoutSchema = new Schema({

  // Define day model to database
  day: {
    type: Date,
    default: Date.now
  },

  // Define exercises model to database
  exercises: [{
    type: { type : String, required: 'Enter a type of exercise' },
    name: { type : String, required: 'Enter the name of the exercise' },
    duration: { type : Number, required: 'Enter the duration' },
    distance: { type : Number},
    weight: { type : Number},
    reps: { type : Number},
    sets: { type : Number},
}],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
