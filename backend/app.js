require("dotenv").config();
const connect = require("./databases/connect");
const express=require("express");
const app = express();
const url = process.env.MONGO;
const port = process.env.PORT;
const userRoute = require("./routes/user.auth.route");
app.use(express.json());

app.get("/",(request,response)=>{response.send("hello world")});
app.use("/api/v3",userRoute);
app.listen(port,"0.0.0.0",()=>{
    connect(url).then(()=>{console.log("connected to the server & database",port);});
});
