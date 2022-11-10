import  SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase({name:"MainDB",location:"default"}).catch((error)=>{console.log(error)});

export const createTable = ()=>{
    db.transaction((table)=>{
        table.executeSql("CREATE TABLE IF NOT EXISTS" + "States"+"(ID INTEGER PRIMARY KEY AUTOINCREMENT,Token,State BOOLEAN)");
    })
}
