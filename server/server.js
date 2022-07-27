require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const workoutRoutes = require("./routes/workouts.js")
const userRoutes = require("./routes/user.js")
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routs
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)
app.use(express.static(path.join(__dirname, "..", "client", "build")));

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
    console.log('nieudane połączenie z bazą danych')
    console.log(error.message)
})

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
});

