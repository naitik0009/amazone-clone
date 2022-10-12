const encode = require("bcrypt");
const hash = async (password)=>{
    console.log(password);
const pass =await  encode.hash(password.toString(),8);
return pass;
};
module.exports = hash;