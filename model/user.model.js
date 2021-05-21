const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    confirmed:{type:Boolean, default:false},
    role:{type:String, default:'user'}

});

module.exports = mongoose.model("user", userSchema);
