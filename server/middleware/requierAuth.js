const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requierAuth = async (req, res, next) =>{
    //weryfikacja autoryrazji
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: "Wymagany token autoryzacji"})
    }
    const token = authorization.split(' ')[1]

    try{
       const {_id} = jwt.verify(token, process.env.SECRET)
       req.user = await User.findOne({_id}).select('_id')
       next()
    }
    catch(error){
        console.log(error);
        res.status(401).json({error:"Prośba (request) jest nieautoryzowana"})
    }
}

module.exports = requierAuth