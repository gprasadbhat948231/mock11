const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    profilePic:String,
    Name:String,
    Bio:String,
    Phone:Number,
    email:String,
    password:String
})

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}