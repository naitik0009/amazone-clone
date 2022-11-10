import AsyncStorage from "@react-native-async-storage/async-storage";

export const Logout =async (state) => { await AsyncStorage.setItem("state",JSON.stringify(state)).catch((error)=>{console.log(error.message)}) };