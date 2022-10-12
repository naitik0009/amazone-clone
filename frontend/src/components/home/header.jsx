import {Header,Icon} from "@rneui/themed";
import { TouchableOpacity } from "react-native";
 const HeaderComp = ({navigation})=>{
    return (
    <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={<TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Icon name="login" color="#fff"/></TouchableOpacity>}
    />
    )
};

export default HeaderComp;