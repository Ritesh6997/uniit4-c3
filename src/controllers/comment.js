const express=require("express");
const router=express.Router();
const Comment=require("../model/commentmodel")

router.post("",async(req,res)=>{
    try {
        comment= Comment.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({ message: err.message });
    }
})


module.exports=router;

