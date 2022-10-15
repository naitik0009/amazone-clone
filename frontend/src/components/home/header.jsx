import {Header,Icon} from "@rneui/themed";
import { TouchableOpacity } from "react-native";
 const HeaderComp = ({navigation})=>{
    return (
    <Header
    containerStyle={{backgroundColor:"#232F3E"}}
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'amazone.np', style: { color: '#fff' } }}
  rightComponent={<TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Icon name="login" color="#fff"/></TouchableOpacity>}
    />
    )
};

export default HeaderComp;