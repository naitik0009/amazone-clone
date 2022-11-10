import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RegisterScreen } from '../../screens/register.screen';
import { LoginScreen } from '../../screens/logjn.screen';
const Stack = createNativeStackNavigator();
export const AuthNavigation = ()=>{
    return (
           
           <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="Register" component={RegisterScreen}  />
            </Stack.Navigator>

    )
}