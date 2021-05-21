const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [],
    totalDuration: {
        type: Number
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;