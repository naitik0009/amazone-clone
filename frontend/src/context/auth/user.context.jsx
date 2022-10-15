import React,{useState,createContext} from "react";

export const CreateUserContext = createContext();

export const UserProvider = ({children})=>{
    return <CreateUserContext.Provider value={{email:"aaaa",password:"aaaa",url:"http://192.168.1.72:3001/api/v3/user/"}}>{children}</CreateUserContext.Provider>
}