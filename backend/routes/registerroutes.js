

const express=require("express")
const bcrypt = require("bcrypt");

const registermodel = require("../models/registermodels");

const router = express.Router();

router.get("/",async(req,res)=>{
    const data= await registermodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create",async(req,res)=>{
    const data=new registermodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await registermodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete/:id",async(req,res)=>{
const id=req.params.id
const data=await registermodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})




//update second
router.get("/user/:id", async (req, res) => {
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
router.post("/login", async (req, res) => {
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
module.exports = router;

