const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        required: true,
        trim: true,
        validate:{
            validator:(value)=>{
                const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(regex);
            },
            message:"Please enter a valid email address",
        },
    },
        password:{
            type:String,
            required:true,
        },

        address:{type:String,default:""},
        type:{type:String,default:"user"},
        
    
});

const userModel = mongoose.model("Users",userSchema);

module.exports = userModel;