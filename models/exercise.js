const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true,
        distanceTraveled: {
            type: Number
        }
    },
    weight: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number, 
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;