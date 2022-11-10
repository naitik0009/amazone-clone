import {Header,Icon} from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { Logout } from "../../services/auth/logout";
 const HeaderComp = ({navigation})=>{
  var state = "";
    return (
    <Header
    containerStyle={{backgroundColor:"#232F3E"}}
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'amazone.np', style: { color: '#fff' } }}
  rightComponent={<TouchableOpacity onPress={()=>{Logout(state)}}><Icon name="login" color="#fff"/></TouchableOpacity>}
    />
    )
};

export default HeaderComp;