const express=require("express");
const router=express.Router();
const Book= require("../model/bookmodel");
const upload=require("../middleware/uploads")

router.get("",async(req,res)=>{
    try {   
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page - 1) * pagesize;
        const book=await Book.find().skip(skip).limit(pagesize).lean().exec();
        
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({ message: err.message });
    }
})

router.post("", upload.single("coverPic"), async (req, res) => {
    try {
      //   const user = await User.create(req.body)
      const book = await Book.create({
        content:req.body.content,
        likes : req.body.likes,
        coverimage:filePaths,
        userId:req.body.userId,
        publicationId : req.body.publicationId,
      });
      return res.status(200).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.post("/multiple", upload.any("coverPic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const book = await Book.create({
        content:req.body.content,
        likes : req.body.likes,
        coverimage:filePaths,
        userId:req.body.userId,
        publicationId : req.body.publicationId,
      });
  
      return res.status(200).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id",async(req,res)=>{
    try {
        const book=await Book.findByIdAndUpdate(req.params.id,req.body).lean().exec();

        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({ message: err.message });
    }
})


module.exports=router;