const express=require("express")

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const {authenticate}=require("../middleware/userAuth.middleware")
const {UserModel}=require("../Model/user.model")

const userRoute=express.Router()

userRoute.post("/register",async(req,res)=>{
    const {profilePic,Name,Bio,Phone,email,password}=req.body;
    try{
        bcrypt.hash(password,5,async(err,password)=>{
            if(err){
                console.log(err)
            }
            else{
                const user=new UserModel({profilePic,Name,Bio,Phone,email,password})
                await user.save()
                res.send("Registration Successful")
            }
        })
    }
    catch(err){
        console.log("Error While Registration")
    }
})
userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    console.log(result)
                    const token=jwt.sign({userID:user[0]._id},"chandaguli");
                    res.send({token})
                }
                else{
                    res.send("Please provide correct credentials")
                }
            })
        }
    }
    catch(err){
        console.log(err)
    }
})
userRoute.use(authenticate);

userRoute.post("/getdata",async(req,res)=>{
    const {userID}=req.body;
    try{
        const user= await UserModel.findById({_id:userID})
        res.send(user);
    }
    catch(err){
        console.log(err)
    }
})
module.exports={userRoute}