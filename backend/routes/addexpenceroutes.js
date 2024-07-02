
const express=require("express")


const expencsemodel = require("../models/addexpencemodel");

const router = express.Router();
 
 
router.get("//",async(req,res)=>{
    const data= await expencsemodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_expense",async(req,res)=>{
    const data=new expencsemodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_expense",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await expencsemodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_expense/:id",async(req,res)=>{
const id=req.params.id
const data=await expencsemodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})

//get store data as count
router.get("/count_expense",async(req,res)=>{
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
router.get("/user_expense/:id", async (req, res) => {
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
module.exports = router;