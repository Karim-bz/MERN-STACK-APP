const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// Get ALL Workoutes
router.get('/', getWorkouts)

// Get Signle Workout
router.get('/:id', getWorkout)

// POST a new Workout
router.post('/', createWorkout)

// DELETE a Workout
router.delete('/:id', deleteWorkout)

// Update a Workout
router.patch('/:id', updateWorkout)

module.exports = router