import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './src/screens/logjn.screen';
import  HomeScreen  from './src/screens/home.screen';
import { RegisterScreen } from './src/screens/register.screen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { UserProvider } from './src/context/auth/user.context';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <>
    <StatusBar style="auto" />
  <NavigationContainer>
    <UserProvider>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} options={false} />
    <Stack.Screen name="Login" component={LoginScreen} options={false} />
    <Stack.Screen name="Register" component={RegisterScreen} options={false} />
  </Stack.Navigator>

  </UserProvider>
  </NavigationContainer>
    </>
  );
}


