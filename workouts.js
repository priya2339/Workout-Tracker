
const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();

// Create a new workout
router.post('/', async (req, res) => {
    const workout = new Workout(req.body);
    try {
        const savedWorkout = await workout.save();
        res.status(201).json(savedWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a workout by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a workout by ID
router.delete('/:id', async (req, res) => {
    try {
        await Workout.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;