const express = require('express')

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
router.post('/', (req, res) => {
    res.json({msg:'Post a new workout'})
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