import axios from "axios";
import { CreateUserContext } from "../../context/auth/user.context";
import React , {useContext} from "react";
export  async function SignUp(name,email,password){
   try {
    const global = useContext(CreateUserContext);
    const registerUser = await axios.post(global.url+'register',{name,email,password});
    if(registerUser){
        console.log(registerUser);
    }
   } catch (error) {
    throw error;
   }
   }