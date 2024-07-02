
const express=require("express")


const targetmodel = require("../models/addsavingmodel");

const router = express.Router();
 
router.get("////",async(req,res)=>{
    const data= await targetmodel.find({})
  
    res.json({success:true,data:data})
})


router.post("/create_target",async(req,res)=>{
    const data=new targetmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})


router.put("/update_target",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await targetmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})




router.delete("/delete_target/:id",async(req,res)=>{
const id=req.params.id
const data=await targetmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})





router.get("/user_target/:id", async (req, res) => {
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
module.exports = router;
