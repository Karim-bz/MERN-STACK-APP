const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// Get ALL Workoutes
router.get('/', (req, res) => {
    res.json({msg:'Get All Workoutes'})
})

// Get Signle Workout
router.get('/:id', (req, res) => {
    res.json({msg:'Get Single Workout'})
})

// POST a new Workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error) {
        res.status(400).json({error: error.message})
    } 
})

// DELETE a Workout
router.delete('/:id', (req, res) => {
    res.json({msg:'Delete a workout'})
})

// Update a Workout
router.patch('/:id', (req, res) => {
    res.json({msg:'Update a workout'})
})

module.exports = router