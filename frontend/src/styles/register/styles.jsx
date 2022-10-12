import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export const styles = StyleSheet.create({
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