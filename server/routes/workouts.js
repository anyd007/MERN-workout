const express = require("express")
const {
    updateWorkout,
    deleteWorkout,
    createWorkout,
    getWorkout,
    getWorkouts
} = require("../controllers/workoutController.js")
const requierAuth = require("../middleware/requierAuth")

const router = express.Router()

//przed wykonaniem wszystkich czynnoścy (GET, POST, DELETE), jest sprawdzana autoryraznja przez 
//fukcję middleware
router.use(requierAuth)

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