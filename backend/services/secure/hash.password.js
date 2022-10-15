const encode = require("bcrypt");


const hash = async (password)=>{
    console.log(password);
const pass =await  encode.hash(password.toString(),8);
return pass;
};

const verify = async(password,hash)=>{
    const verify = await encode.compare(password,hash);
    return verify;
}
module.exports = {hash,verify};