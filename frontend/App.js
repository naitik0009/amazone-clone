import { StatusBar } from 'expo-status-bar';
import React,{useState,useMemo} from 'react';
import  HomeScreen  from './src/screens/home.screen';
import { AuthNavigation } from './src/services/routes/auth.navigator';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {  UserProvider } from './src/context/auth/user.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [login,setLogin] = useState(false);
  const getStoreData = async ()=>{
    const data = await AsyncStorage.getItem("state");
    console.log(data);
    if(JSON.parse(data) === "yes"){
      setLogin(true);
    }else{
      setLogin(false);
    }
  }
  useMemo(()=>{getStoreData();},[])
  
  return (

    <>
    <StatusBar style="auto" />
  <NavigationContainer>
    <UserProvider>

{login?(  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen }  />
  </Stack.Navigator>) : <AuthNavigation/> }

  </UserProvider>
  </NavigationContainer>
    </>
  );
}


