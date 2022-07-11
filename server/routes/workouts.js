const express = require("express")

const router = express.Router()

//GET(pobiernanie) wszystkich ćwiczeń
router.get("/", (req, res)=>{
    res.json({msg:"wszystkie ćwiczenia"})
})

//GET pojedyńczego ćwiczenia
router.get("/:id", (req, res)=>{
    res.json({msg:"pojenyńcze ćwiczenie"})
})

//POST(wysyłanie na serwer) pojedyńcze ćwiczenie
router.post("/", (req,res)=>{
    res.json({msg: "POST nowe ćwiczenie"})
})

//DELETE pojedyńcze ćwiczenie
router.delete("/:id", (req,res)=>{
    res.json({msg: "usuwanie ćwiczenia"})
})

//UPDATE pojedyńcze ćwiczenie
router.patch("/:id", (req,res)=>{
    res.json({msg: "dodanie nowe ćwiczenie"})
})
module.exports = router