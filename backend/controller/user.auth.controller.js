const user = require("../models/user.auth.model");
const encode = require("../services/secure/hash.password");


const login = async(request,response)=>{
    return response.status(200).json({status:"ok",message:"welcome to login page"})
};

const register = async(request,response)=>{
    try {
    const {name,email,password} = request.body;

    if(!name || !email || !password){
        return response.status(400).json({status:"error",message:"empty fields"}); 
    }
    const verifyUser = await user.findOne({email});
    const newPassword = await encode(password);
    
    if(verifyUser){
        return response.status(400).json({status:"error",message:"user already exist"});
    };
    const create = await user.create({name,email,password:newPassword});
    return response.status(200).json({status:"ok",message:"users registered successfully"});
    } catch (error) {
        return response.status(500).json({status:"error",message:error.message});
    }
};



module.exports = {login,register};