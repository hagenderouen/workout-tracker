const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Number,
        required: true
    },
    exercises: [],
    totalDuration: {
        type: Number
    }
});

WorkoutSchema.post('find', (doc) => {
    
    doc.forEach((workout) => {
        const totalDuration = workout.exercises
        .map(exercise => exercise.duration)
        .reduce((sum, val) => sum + val, 0);

        workout.totalDuration = totalDuration;
    });
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;