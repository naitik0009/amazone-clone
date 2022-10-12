import { SafeAreaView,ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard,Text ,View,TouchableOpacity,Platform} from "react-native";
import {Button } from "@rneui/themed";
import { TextInput} from 'react-native-paper';
import { styles } from "../styles/register/styles";

import React,{useState} from "react";

export const RegisterScreen = ({navigation})=>{
 const [name,setName] = useState(null);
 const [email,setEmail] = useState(null);
 const [password,setPassword] = useState(null);
 const [hide,setHide] = useState(true);
    return (
        <SafeAreaView>
      <Text>Nepal.in</Text>
     
     <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ScrollView>
     
     <View style={styles.container}>
     <Text style={styles.text}>Sign up</Text>
     <View>
     <TextInput left={<TextInput.Icon name="account" />} mode="outlined" style = {styles.textInput} label="name" onChangeText={(name)=>{setName(name)}}/>
         <TextInput left={<TextInput.Icon name="account" />} mode="outlined" style = {styles.textInput} label="email" onChangeText={(email)=>{setEmail(email)}}/>
         <TextInput left={<TextInput.Icon name="form-textbox-password" />}
         right={<TextInput.Icon onPress={()=>{setHide(!hide)}} name="eye" color={hide?"black":"red"}/>  }
         mode="outlined" secureTextEntry={hide?true:false} style = {styles.textInput} label="password" onChangeText={(password)=>{setPassword(password)}}/>
         <Button style={styles.button} onPress={()=>{console.log(name,email,password)}} color = "warning">sign up</Button>
         </View>
         <View style={styles.dividerContainer}>
             <View style={{flex:1,height:1,backgroundColor:"grey"}} />
          <Text style={styles.dividerText}>Already have an account ?</Text>
          <View style={{flex:1,height:1,backgroundColor:"grey"}} />
         </View>
       <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Text style={{color:"blue"}}>{"Sign in >"} </Text></TouchableOpacity>
     </View>
   </ScrollView>
   </TouchableWithoutFeedback>
     </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

