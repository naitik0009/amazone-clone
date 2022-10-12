import { SafeAreaView ,Text , StyleSheet,View,TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import {Button } from "@rneui/themed";
import { TextInput} from 'react-native-paper';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export const RegisterScreen = ({navigation})=>{
 
    return (
        <SafeAreaView>
            <Text>Nepal.in</Text>
        <View style={styles.container}>
        <Text style={styles.text}>Sign up</Text>
        <View>
        <TextInput style = {styles.textInput} label="name"/>
            <TextInput style = {styles.textInput} label="email"/>
            <TextInput style = {styles.textInput} label="password"/>
            <Button style={styles.button} color = "warning">sign in</Button>
            </View>
            <View style={styles.dividerContainer}>
                <View style={{flex:1,height:1,backgroundColor:"grey"}} />
             <Text style={styles.dividerText}>Already have an account ?</Text>
             <View style={{flex:1,height:1,backgroundColor:"grey"}} />
            </View>
          <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Text style={{color:"blue"}}>Sign in > </Text></TouchableOpacity>
        </View>

        {/* <View style={{alignItems:"center",marginTop:20,}}>
        <Button style={styles.signup} color = "warning">sign in</Button>
        </View> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        width:width/4*2*1.9,
        height:height/2*1.5,
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
        marginTop:25,
        flexDirection:"row",
        alignItems:"center",
    },
    dividerText:{
        color:"grey",
    },

});