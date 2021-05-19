const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Number,
        required: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        } 
    ]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;