

const express=require("express")


const incomemodel = require("../models/addincomemodel");

const router = express.Router();

router.get("///",async(req,res)=>{
    const data= await incomemodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_income",async(req,res)=>{
    const data=new incomemodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_income",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await incomemodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_income/:id",async(req,res)=>{
const id=req.params.id
const data=await incomemodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})


router.get("/count_income",async(req,res)=>{
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



router.get("/user_income/:id", async (req, res) => {
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
module.exports = router;