require('dotenv').config()

const express = require('express')
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

//Listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('Listening on Port', process.env.PORT)
})