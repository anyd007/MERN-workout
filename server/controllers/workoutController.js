const Workout = require("../models/workoutModel.js")
const mongoose = require("mongoose")

//pobranie wszystkich ćwiczeń
const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//pobranie jednego ćwiczenia
const getWorkout = async (req, res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Nie ma takiego ćwiczenia"})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:"Nie ma takiego ćwiczenia"})
    }
    res.status(200).json(workout)
}

//twożenie nowego ćwiczenia
 const createWorkout = async (req, res) =>{
    const { title, load, reps } = req.body
    //dodawanie dokumentu do bazy danych
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//kasowanie ćwiczenia
const deleteWorkout = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Nie ma takiego ćwiczenia"})
    }
    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error:"Nie ma takiego ćwiczenia"})
    }

    res.status(200).json(workout)
}
//updejtowanie ćwiczenia
const updateWorkout = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Nie ma takiego ćwiczenia"})
    }
    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error:"Nie ma takiego ćwiczenia"})
    }

    res.status(200).json(workout)
}

module.exports = {
    updateWorkout,
    deleteWorkout,
    createWorkout,
    getWorkout,
    getWorkouts
}