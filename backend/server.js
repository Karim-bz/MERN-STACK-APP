require('dotenv').config()
const express = require('express')

//express APP
const app = express()

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.get('/', (req, res)=>{
    res.json({msg: 'Welcome to The app'})
})

//Listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('Listening on Port', process.env.PORT)
})