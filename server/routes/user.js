const express = require("express")
const { loginUser, signupUser } = require("../controllers/userController")

const router = express.Router()

//logowanie
router.post('/login', loginUser)

//rejestracja
router.post('/signup', signupUser)

module.exports = router