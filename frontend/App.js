import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { LoginScreen } from './src/screens/logjn.screen';
import  HomeScreen  from './src/screens/home.screen';
import { RegisterScreen } from './src/screens/register.screen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {  UserProvider } from './src/context/auth/user.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [login,setLogin] = useState(null);
  const getStoreData = async ()=>{
    const data = await AsyncStorage.getItem("state");
    console.log(data);
    if(JSON.parse(data) === "yes"){
      setLogin("yes");
    }
  }
  getStoreData();
  return (

    <>
    <StatusBar style="auto" />
  <NavigationContainer>
    <UserProvider>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    {login != null?<Stack.Screen name="Home" component={HomeScreen }  />:console.log("please login first")}
    <Stack.Screen name="Login" component={LoginScreen}  />
    <Stack.Screen name="Register" component={RegisterScreen}  />
  </Stack.Navigator>

  </UserProvider>
  </NavigationContainer>
    </>
  );
}


