import { Dimensions,StyleSheet } from "react-native";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export const styles = StyleSheet.create({
    container:{
        width:width/4*2*1.9,
        height:height/2*1.2,
        marginLeft:7,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
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