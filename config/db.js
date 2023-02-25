const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://guruprasad:guruprasad@cluster0.wjv8d0w.mongodb.net/authentication?retryWrites=true&w=majority")

module.exports={connection}