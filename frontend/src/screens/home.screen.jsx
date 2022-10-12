import { SafeAreaView,TouchableOpacity,Text } from "react-native";
import  HeaderComp  from "../components/home/header";

const HomeScreen = ({navigation})=>{
    return (
        <SafeAreaView>
        <HeaderComp navigation={navigation}/>
    <TouchableOpacity><Text>Auth</Text></TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;