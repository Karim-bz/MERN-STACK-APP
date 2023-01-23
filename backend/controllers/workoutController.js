const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get All Workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get Single Workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findById(id)
    
    if (!workout) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)
}

// Create new Workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    // add doc to DB
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error) {
        res.status(400).json({error: error.message})
    } 
}

// Delete a Workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        return res.status(400).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)
}

// Update a Workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({error: 'No Such Workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}