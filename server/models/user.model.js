const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    userName:{
        type: String,
        required: [true, "username is required!"]
    },
    email:{
        type: String,
        required: [true, "emails required!"]

    },
    password:{
        type: String,
        required: [true, "password is required!"]

    }
},
{timesstamps: true})

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log('Hashed Password:', hashedPassword)
        this.password = hashedPassword
        next()
    }

    catch(error){
        console.log('Error in save', error)
    }
})

module.exports = mongoose.model('User',UserSchema)