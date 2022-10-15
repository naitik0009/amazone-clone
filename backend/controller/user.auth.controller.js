const user = require("../models/user.auth.model");
const {hash,verify} = require("../services/secure/hash.password");

const login = async(request,response)=>{
    try {
        const {email,password} = request.body;
        
        if(!email || !password){
            return response.status(400).json({status:"error",message:"empty fields"}); 
        }
        const verifyUser = await user.findOne({email});
        if(!verifyUser){
            return response.status(400).json({status:"error",message:"email doesn't exist"});
        };
        
        const comparePass = await verify(password.toString(),verifyUser.password);

        if(!comparePass){
            return response.status(400).json({status:"error",message:"wrong password"});
        }
            return response.status(200).json({status:"ok",message:"login successful"});
        
    } catch (error) {
        return response.status(500).json({status:"error",message:error.message})
    }
};

const register = async(request,response)=>{
    try {
    const {name,email,password} = request.body;

    if(!name || !email || !password){
        return response.status(400).json({status:"error",message:"empty fields"}); 
    }
    const verifyUser = await user.findOne({email});
    const newPassword = await hash(password);
    
    if(verifyUser){
        return response.status(400).json({status:"error",message:"user already exist"});
    };
    const create = await user.create({name,email,password:newPassword});
    return response.status(200).json({status:"ok",message:"users registered successfully"});
    } catch (error) {
        return response.status(500).json({status:"error",message:error.message});
    }
};


const verifyToken = (request,response)=>{

}
module.exports = {login,register};