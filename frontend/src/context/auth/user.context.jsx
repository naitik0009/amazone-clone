import React,{useState,createContext} from "react";

export const CreateUserContext = createContext();

export const UserProvider = ({children})=>{
    return <CreateUserContext.Provider value={{email:"aaaa",password:"aaaa"}}>{children}</CreateUserContext.Provider>
}