require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsRoutes = require('./routes/workouts')

//express APP
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/workoutes', workoutsRoutes)

// connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('Connecting to DB & Listening on Port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

