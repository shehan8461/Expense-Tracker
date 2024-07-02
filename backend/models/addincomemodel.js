const mongoose=require("mongoose")
const incomeSchema=mongoose.Schema({
    income_amount:Number,
    income_type:String,
    income_bank_type:String,
    income_remark:String,
 
     
 
 },{
     timestamps:true
 
 })
 
 const incomemodel=mongoose.model("Income",incomeSchema)
 module.exports = incomemodel;