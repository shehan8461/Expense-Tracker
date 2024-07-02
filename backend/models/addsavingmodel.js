const mongoose=require("mongoose")
const targetSchema=mongoose.Schema({
    target_amount:Number,
    target_remark:String,
    target_date:String,
    target_remarks:String,
   
 
     
 
 },{
     timestamps:true
 
 })
 
 const targetmodel=mongoose.model("Target",targetSchema)
 module.exports = targetmodel;