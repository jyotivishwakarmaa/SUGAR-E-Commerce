
const mongoose = require('mongoose');


const adminschema = new mongoose.Schema({
    name: String,
    adminid: String,
    password: String 
    
})


module.exports= mongoose.model('admin', adminschema)