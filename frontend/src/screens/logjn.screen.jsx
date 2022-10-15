import { SafeAreaView ,Text ,ScrollView,View,TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard,ActivityIndicator} from "react-native";
import { Image } from "react-native";
import { styles } from "../styles/login/style";
import {Button } from "@rneui/themed";
import { TextInput} from 'react-native-paper';
import React,{useState,useContext} from "react";
import { CreateUserContext } from "../context/auth/user.context";
import axios from "axios";
const url = require("../assets/logo.png");

export const LoginScreen = ({navigation})=>{
    const global = useContext(CreateUserContext);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [hide,setHide] = useState(true);
    const [isLoading,setLoading] = useState(false);
    async function signIn(email,password){

        try {
          const client = axios.create({baseURL:global.url});
          setLoading(true);
          await client.post(`login`,{email,password}).then((response)=>{alert(response.data.message);
            setInterval(()=>{setLoading(false);},3000);
        }).catch((error)=>{console.log(error.response.data.message)
        
         alert(error.response.data.message)
          });
        } catch (error) {
          console.log(error.message);
        }
       }

    return (
        <SafeAreaView>
         <Image source={url} style={{width:300,height:60,justifyContent:"center",alignSelf:"center",marginTop:20}}/>
     <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       {isLoading?  <ActivityIndicator style={{alignSelf:"center",marginTop:200}} size="small" color="#0000ff" /> : <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <View>
            <TextInput style = {styles.textInput} onChangeText={(email)=>{setEmail(email)}} mode="outlined" label="email" placeholder="email"/>
            <TextInput style = {styles.textInput} onChangeText={(password)=>{setPassword(password)}}  right={<TextInput.Icon onPress={()=>{setHide(!hide)}} name="eye" color={hide?"black":"red"}/>  } mode="outlined" label="password" placeholder="password"  secureTextEntry={hide?true:false}/>
            <Button style={styles.button} onPress={()=>{signIn(email,password)}} color = "warning">sign in</Button>
            </View>
        </View>
        <View style={styles.dividerContainer}>
                <View style={{flex:1,height:1,backgroundColor:"grey"}} />
             <Text style={styles.dividerText}>New To Amazon ?</Text>
             <View style={{flex:1,height:1,backgroundColor:"grey"}} />
            </View>
        <View style={{alignItems:"center",marginTop:20,}}>
        <Button style={styles.signup} onPress={()=>{navigation.navigate("Register")}} color = "warning">Create your Amazone Account</Button>
        </View>
        </ScrollView>}
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

        </SafeAreaView>
    )
}


