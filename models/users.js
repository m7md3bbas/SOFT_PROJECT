const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:{type:String , required:true , unique:true},
        email:{type:String , required:true,unique:true},
        password:{type:String , required:true},
        isAdmin:{
            type:Boolean,
            default:false,
        },
        creatAt:{type:String,default:Date},
        updateAt:{type:String,default:Date}
        
    },
    {timeseries:true},
)
module.exports = mongoose.model("Users",userSchema)