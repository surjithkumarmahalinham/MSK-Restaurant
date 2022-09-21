const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id");
            }
        }
    },
    subject:{
        type:String,
        required:true,
        minlength:10
    },
    message:{
        type:String,
        required:true,
        minlength:10
    }
});

const User = mongoose.model("User",userSchema);

module.exports = User;