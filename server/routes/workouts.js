const express = require("express")
const {
    updateWorkout,
    deleteWorkout,
    createWorkout,
    getWorkout,
    getWorkouts
} = require("../controllers/workoutController.js")

const router = express.Router()

//GET(pobiernanie) wszystkich ćwiczeń
router.get("/", getWorkouts)

//GET pojedyńczego ćwiczenia
router.get("/:id", getWorkout)

//POST(wysyłanie na serwer) pojedyńcze ćwiczenie
router.post("/", createWorkout)

//DELETE pojedyńcze ćwiczenie
router.delete("/:id", deleteWorkout)

//UPDATE pojedyńcze ćwiczenie
router.patch("/:id", updateWorkout)
module.exports = router