const mongoose=require("mongoose")
const expenceschema=mongoose.Schema({
    expense_amount:Number,
    expense_type:String,
    expense_bank_type:String,
    expense_remark:String,
 
     
 
 },{
     timestamps:true
 
 })
 
 const expencsemodel=mongoose.model("Expense",expenceschema)
 module.exports = expencsemodel;