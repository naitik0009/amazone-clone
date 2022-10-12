const login = (request,response)=>{
    return response.status(200).json({status:"ok",message:"welcome to login page"})
};

const register = (request,response)=>{
    return response.status(200).json({status:"ok",message:"welcome to register page"})
};



module.exports = {login,register};