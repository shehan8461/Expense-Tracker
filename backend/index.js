const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const bcrypt = require("bcrypt");

const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||8080



//regiser crud
const trackerregister=mongoose.Schema({
   fname:String,
   lname:String,
   email:String,
   password:String,

    

},{
    timestamps:true

})

const registermodel=mongoose.model("Users",trackerregister)



app.get("/",async(req,res)=>{
    const data= await registermodel.find({})
  
    res.json({success:true,data:data})
})


app.post("/create",async(req,res)=>{
    const data=new registermodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


app.put("/update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await registermodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




app.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
const data=await registermodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})




//update second
app.get("/user/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const discount = await registermodel.findById(id);

        if (!discount) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: discount });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});


////Login 
app.post("/login", async (req, res) => {
    console.log('in-------------------------------');
    const { email, password } = req.body;
  
    try {
        console.log(email);  
      const user = await registermodel.findOne({ email });
      
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
    
     // const isPasswordValid = await bcrypt.compare(password, user.password);
     const isPasswordValid1 = user.password===password;

      console.log('Input password:', password);
      console.log('Stored hashed password:', user.password);
      console.log('isPasswordValid:', isPasswordValid1);
      
      if (isPasswordValid1===false) { // Fixed condition
        console.log('Request body:', req.body);
        return res.status(401).json({ success: false, message: "Incorrect password" });
      

      }
  
      // If password is valid, send success message and user data
      res.status(200).json({ success: true, message: "Login successful", data: user });
    } catch (error) {
        console.log('Retrieved user:', user);

      console.error("Login error:", error);
      res.status(500).json({ success: false, message: error });
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add expence crud
const expenceschema=mongoose.Schema({
    expense_amount:Number,
    expense_type:String,
    expense_bank_type:String,
    expense_remark:String,
 
     
 
 },{
     timestamps:true
 
 })
 
 const expencsemodel=mongoose.model("Expense",expenceschema)
 
 
 
 app.get("//",async(req,res)=>{
     const data= await expencsemodel.find({})
   
     res.json({success:true,data:data})
 })
 
 
 app.post("/create_expense",async(req,res)=>{
     const data=new expencsemodel(req.body)
     await data.save()
     res.send({success:true,message:"data created successfuly"})
 })
 
 
 app.put("/update_expense",async(req,res)=>{
     const {id,...rest}=req.body
     const data=await expencsemodel.updateOne({_id:id},rest)
     res.send({success:true,message:"updated successfuly",data:data})
 })
 
 
 
 
 app.delete("/delete_expense/:id",async(req,res)=>{
 const id=req.params.id
 const data=await expencsemodel.deleteOne({_id:id})
 res.send({success:true,message:"deleted successfully",data:data})
 })
 
 //get store data as count
 app.get("/count_expense",async(req,res)=>{
    try{
        const users=await expencsemodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"feedback count successfully",data:data})
    }

})

 
 //update second
 app.get("/user_expense/:id", async (req, res) => {
     const id = req.params.id;
 
     try {
         const discount = await expencsemodel.findById(id);
 
         if (!discount) {
             return res.status(404).send({ success: false, message: "User not found" });
         }
 
         res.send({ success: true, message: "User fetched successfully", data: discount });
     } catch (error) {
         console.error(error);
         res.status(500).send({ success: false, message: "Internal Server Error" });
     }
 });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Add income crud
const incomeSchema=mongoose.Schema({
    income_amount:Number,
    income_type:String,
    income_bank_type:String,
    income_remark:String,
 
     
 
 },{
     timestamps:true
 
 })
 
 const incomemodel=mongoose.model("Income",incomeSchema)
 
 
 
 app.get("///",async(req,res)=>{
     const data= await incomemodel.find({})
   
     res.json({success:true,data:data})
 })
 
 
 app.post("/create_income",async(req,res)=>{
     const data=new incomemodel(req.body)
     await data.save()
     res.send({success:true,message:"data created successfuly"})
 })
 
 
 app.put("/update_income",async(req,res)=>{
     const {id,...rest}=req.body
     const data=await incomemodel.updateOne({_id:id},rest)
     res.send({success:true,message:"updated successfuly",data:data})
 })
 
 
 
 
 app.delete("/delete_income/:id",async(req,res)=>{
 const id=req.params.id
 const data=await incomemodel.deleteOne({_id:id})
 res.send({success:true,message:"deleted successfully",data:data})
 })
 
 
 app.get("/count_income",async(req,res)=>{
    try{
        const users=await incomemodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"feedback count successfully",data:data})
    }

})

 
 
 app.get("/user_income/:id", async (req, res) => {
     const id = req.params.id;
 
     try {
         const discount = await incomemodel.findById(id);
 
         if (!discount) {
             return res.status(404).send({ success: false, message: "User not found" });
         }
 
         res.send({ success: true, message: "User fetched successfully", data: discount });
     } catch (error) {
         console.error(error);
         res.status(500).send({ success: false, message: "Internal Server Error" });
     }
 });
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add saving target crud
const targetSchema=mongoose.Schema({
    target_amount:Number,
    target_remark:String,
    target_date:String,
    target_remarks:String,
   
 
     
 
 },{
     timestamps:true
 
 })
 
 const targetmodel=mongoose.model("Target",targetSchema)
 
 
 
 app.get("////",async(req,res)=>{
     const data= await targetmodel.find({})
   
     res.json({success:true,data:data})
 })
 
 
 app.post("/create_target",async(req,res)=>{
     const data=new targetmodel(req.body)
     await data.save()
     res.send({success:true,message:"data created successfuly"})
 })
 
 
 app.put("/update_target",async(req,res)=>{
     const {id,...rest}=req.body
     const data=await targetmodel.updateOne({_id:id},rest)
     res.send({success:true,message:"updated successfuly",data:data})
 })
 
 
 
 
 app.delete("/delete_target/:id",async(req,res)=>{
 const id=req.params.id
 const data=await targetmodel.deleteOne({_id:id})
 res.send({success:true,message:"deleted successfully",data:data})
 })
 
 
 
 
 
 app.get("/user_target/:id", async (req, res) => {
     const id = req.params.id;
 
     try {
         const discount = await targetmodel.findById(id);
 
         if (!discount) {
             return res.status(404).send({ success: false, message: "User not found" });
         }
 
         res.send({ success: true, message: "User fetched successfully", data: discount });
     } catch (error) {
         console.error(error);
         res.status(500).send({ success: false, message: "Internal Server Error" });
     }
 });




 //Databse connection
mongoose.connect("mongodb+srv://shehan:Shehan99@cluster0.t3v3psz.mongodb.net/Tracker?retryWrites=true&w=majority")
.then(()=>{
  
    console.log(`port number => ${PORT}`)
    app.listen(PORT,()=>console.log("server connection successful"))
}).catch((err)=>{
    console.log(err)
})

