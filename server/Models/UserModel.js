const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact: Number,
    address: String,
    city:String,
    pincode:Number
})


module.exports= mongoose.model('user', userSchema)