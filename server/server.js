require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts.js")
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routs
app.use("/api/workouts", workoutRoutes)

//połączenie do db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("połączenie z bazą danych udane!")
    const herokuPort = process.env.PORT || process.env.PORT_LOCAL;
    app.listen(herokuPort, ()=>{
    console.log(`działam na porcie ${herokuPort}`)
})
})
.catch((error)=>{
    console.log(error.message)
})

