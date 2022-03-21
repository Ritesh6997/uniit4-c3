const express=require("express");
const router=express.Router();
const User=require("../model/usermodel")
const { body, validationResult } = require('express-validator');

router.get("",async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({ message: err.message });
    }
})

router.post("",
    body('firstName').isLength({ min: 1, max:30 }),
    // password must be at least 5 chars long
    body('lastName').isLength({ min: 1, max:30 }),
    body("age").isNumeric().isInt({min:1,max:150}),
    (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
     
    },
   upload.single("profilePic"), async (req, res) => {
    try {
      //   const user = await User.create(req.body)
      const user = await User.create({
        firstName: req.body.firstName,
        profileimage: req.file.path,
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.post("/multiple", upload.any("profilePic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const user = await User.create({
        firstName: req.body.firstName,
        profileimage: filePaths,
      });
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  







module.exports=router;