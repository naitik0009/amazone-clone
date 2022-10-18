import React,{useState,createContext} from "react";

export const CreateUserContext = createContext();

export const UserProvider = ({children})=>{
    
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [token,setToken] = useState(null);
    const [isLoggedIn,setLogIn] = useState(true);
    return <CreateUserContext.Provider value={{email,token,name,isLoggedIn,setLogIn,url:"http://192.168.1.72:3001/api/v3/user/"}}>{children}</CreateUserContext.Provider>
}