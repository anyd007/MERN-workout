const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//statyczna metoda rejestracji
userSchema.statics.signup = async function(email, password){

    //walidacja
    if(!email || !password){
        throw Error('wszystkie pola są wymagane')
    }

    if(!validator.isEmail(email)){
        throw Error("email jest nieporawidłowy")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("hasło jest za słabe")
    }

    const exists = await this.findOne({email}) //this odnosi sie do User
    if(exists){
        throw Error('Email is already taken')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})
    return user
}

//statyczna metoda logowania
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('wszystkie pola są wymagane')
    }

    const user = await this.findOne({email})
    if(!user){
        throw Error("niewłaściwy email")
    }
    const match = await bcrypt.compare(password, user.password) 
    if(!match){
        throw Error("niewłaściwe hasło")
    }

    return user
}

module.exports = mongoose.model("User", userSchema)