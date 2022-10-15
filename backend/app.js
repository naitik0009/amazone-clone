require("dotenv").config();
const cors = require('cors');
const connect = require("./databases/connect");
const express=require("express");
const app = express();
const url = process.env.MONGO;
const port = process.env.PORT;
const userRoute = require("./routes/user.auth.route");
app.use(express.json());

app.use(cors({origin:[
    "https://localhost:3000","http://localhost:8080","http://localhost:19000","http://localhost:4200"
],credentials:true}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.get("/",(request,response)=>{response.send("hello world")});
app.use("/api/v3",userRoute);
app.listen(port,()=>{
    connect(url).then(()=>{console.log("connected to the server & database",port);});
});
