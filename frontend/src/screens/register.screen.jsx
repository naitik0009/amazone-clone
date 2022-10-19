import { SafeAreaView,ScrollView, KeyboardAvoidingView,ActivityIndicator, TouchableWithoutFeedback,Keyboard,Text ,View,TouchableOpacity,Platform} from "react-native";
import { CreateUserContext } from "../context/auth/user.context";
import {Button } from "@rneui/themed";
import { TextInput} from 'react-native-paper';
import { styles } from "../styles/register/styles";
import React,{useState,useContext,useEffect, createContext} from "react";
import { Image } from "react-native";
import axios from "axios";
const url = require("../assets/logo.png");

export const RegisterScreen = ({navigation})=>{

 const [name,setName] = useState(null);
 const [email,setEmail] = useState(null);
 const [password,setPassword] = useState(null);
 const [hide,setHide] = useState(true);
 const [isLoading,setLoading] = useState(false);


async function signUp(name,email,password){
 
  
  try {
    setLoading(true);
    const response = await  fetch('http://192.168.1.66:3001/api/v3/user/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,email,password
        })});

        const data = await response.json();
        if(data.status==="ok"){
            
            alert(data.message);
            
        }
    }
     catch (error) {
      console.log(error.message);
    }finally{
        setLoading(false);
    }
   }






  return (
        <SafeAreaView>
      <Image source={url} style={{width:300,height:60,justifyContent:"center",alignSelf:"center",marginTop:20}}/>
     
     <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {isLoading?  <ActivityIndicator size="small" style={{alignSelf:"center",marginTop:200}} color="#0000ff" /> : <ScrollView>
     <View style={styles.container}>
     <Text style={styles.text}>Sign up</Text>
     <View>
     <TextInput left={<TextInput.Icon name="account" />} mode="outlined" style = {styles.textInput} label="name" onChangeText={(name)=>{setName(name)}}/>
         <TextInput left={<TextInput.Icon name="account" />} mode="outlined" style = {styles.textInput} label="email" onChangeText={(email)=>{setEmail(email)}}/>
         <TextInput left={<TextInput.Icon name="form-textbox-password" />}
         right={<TextInput.Icon onPress={()=>{setHide(!hide)}} name="eye" color={hide?"black":"red"}/>  }
         mode="outlined" secureTextEntry={hide?true:false} style = {styles.textInput} label="password" onChangeText={(password)=>{setPassword(password)}}/>
         <Button style={styles.button} onPress={()=>{signUp(name,email,password)}} color = "warning">sign up</Button>
         </View>
         <View style={styles.dividerContainer}>
             <View style={{flex:1,height:1,backgroundColor:"grey"}}/>
          <Text style={styles.dividerText}>Already have an account ?</Text>
          <View style={{flex:1,height:1,backgroundColor:"grey"}} />
         </View>
       <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Text style={{color:"blue"}}>{"Sign in >"} </Text></TouchableOpacity>
     </View>
   </ScrollView>}
   </TouchableWithoutFeedback>
     </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

