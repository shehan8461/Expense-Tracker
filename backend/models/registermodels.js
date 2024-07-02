const mongoose=require("mongoose")
const trackerregister=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
 
     
 
 },{
     timestamps:true
 
 })
 
 const registermodel=mongoose.model("Users",trackerregister)
 module.exports = registermodel;