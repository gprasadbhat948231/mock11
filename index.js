const express=require("express")
const {connection}=require("./config/db");
const {userRoute}=require("./Route/user.route")
const app=express();
const cors=require("cors")
app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.use("/user",userRoute)
app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to db")
    }catch(err){
        console.log("error while connecting to db")
    }
})