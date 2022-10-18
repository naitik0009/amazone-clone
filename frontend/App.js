import { StatusBar } from 'expo-status-bar';
import React,{useContext} from 'react';
import { LoginScreen } from './src/screens/logjn.screen';
import  HomeScreen  from './src/screens/home.screen';
import { RegisterScreen } from './src/screens/register.screen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { CreateUserContext, UserProvider } from './src/context/auth/user.context';
export default function App() {
  const Stack = createNativeStackNavigator();
  const loggedInState = useContext(CreateUserContext);
  return (

    <>
    <StatusBar style="auto" />
  <NavigationContainer>
    <UserProvider>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={loggedInState.isLoggedIn? HomeScreen :LoginScreen}  />
    <Stack.Screen name="Login" component={loggedInState.isLoggedIn? HomeScreen: LoginScreen}  />
    <Stack.Screen name="Register" component={loggedInState.isLoggedIn ?HomeScreen : RegisterScreen}  />
  </Stack.Navigator>

  </UserProvider>
  </NavigationContainer>
    </>
  );
}


