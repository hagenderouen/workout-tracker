const router = require('express').Router();
const { Workout, Exercise } = require('../../models');  

router.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find();
        console.log(workouts);
        res.json(workouts);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.put('/workouts/:id', async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } });
        res.status.json(updatedWorkout);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;