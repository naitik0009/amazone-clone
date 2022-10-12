import { SafeAreaView ,Text , StyleSheet,View,TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import {Button } from "@rneui/themed";
import { TextInput,Divider} from 'react-native-paper';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export const LoginScreen = ({navigation})=>{
 
    return (
        <SafeAreaView>
            <Text>Nepal.in</Text>
        <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <View>
            <TextInput style = {styles.textInput} label="email"/>
            <TextInput style = {styles.textInput} label="password"/>
            <Button style={styles.button} color = "warning">sign in</Button>
            </View>

           
            
        
        </View>
        <View style={styles.dividerContainer}>
                <View style={{flex:1,height:1,backgroundColor:"grey"}} />
             <Text style={styles.dividerText}>New To Amazon ?</Text>
             <View style={{flex:1,height:1,backgroundColor:"grey"}} />
            </View>
        <View style={{alignItems:"center",marginTop:20,}}>
        <Button style={styles.signup} onPress={()=>{navigation.navigate("Register")}} color = "warning">sign up</Button>
        </View>
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