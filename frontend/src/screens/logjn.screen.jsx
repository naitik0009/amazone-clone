import { SafeAreaView ,Text ,ScrollView, StyleSheet,View,TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from "react-native";
import { Dimensions } from "react-native";
import {Button } from "@rneui/themed";
import { TextInput} from 'react-native-paper';
import React,{useState} from "react";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const LoginScreen = ({navigation})=>{
    const [hide,setHide] = useState(true);
    return (
        <SafeAreaView>
         <Text>Nepal.in</Text>
     <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <View>
            <TextInput style = {styles.textInput} mode="outlined" label="email" placeholder="email"/>
            <TextInput style = {styles.textInput}  right={<TextInput.Icon onPress={()=>{setHide(!hide)}} name="eye" color={hide?"black":"red"}/>  } mode="outlined" label="password" placeholder="password"  secureTextEntry={hide?true:false}/>
            <Button style={styles.button} color = "warning">sign in</Button>
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
        </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        width:width/4*2*1.9,
        height:height/2*1.2,
        marginLeft:5,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        borderWidth:1,
        borderColor:"grey",
    },
    container1:{
flexDirection:"column"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
    },
    textInput:{
        width:width/2*1.5,
        marginTop:20,
    },
    button:{
        marginTop:20,
    },
    dividerContainer:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
    },
    dividerText:{
        color:"grey",
    },
    signup:{
        alignSelf:"cetner",
        justifyContent:"center",
        width:width/2*1.5,
}
});