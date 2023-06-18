const express = require("express");
const multer = require("multer")
const mongoose = require("mongoose");
const profile = require("../model/schema");
let router = express.Router();

router.use("/uploads",express.static("uploads"));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()+"_"+file.originalname);
    }
  })
  
  const upload = multer({ storage: storage });

//   router.put("/updateUser",async(req,res)=>{
//     try{
//         let data = await profile.find({email:req.body.email})
//                   .updateMany({$setgender:req.body.gender,
//                     contact:req.body.contact,
//                     skills:req.body.skills})
//                     console.log(data)
//                     res.json("User Updated Successfully")
//         }catch(error){
//             console.log(error)
//                 console.log("Error in Saving Data")
//         }
//   })

router.get("/getData", async(req,res)=>{
    try{
        let data = await profile.find()
        console.log(data);
        res.json(data)
    }catch(error){
        console.log(error)
        res.json("Error getting Data")
    }
})
  router.put("/updateUser",upload.single("profilePic"), async (req, res) => {
    try {
      const userId = {email:req.body.email};
      const update = {
        $set: {
          gender: req.body.gender,
          contact: req.body.contact,
          skills: req.body.skills,
          profilePic:req.file.path
        },
      };
  
      let data = await profile.findOneAndUpdate(userId, update);
      console.log(data);
      res.json("User Updated Successfully");
    } catch (error) {
      console.log(error);
      console.log("Error in Saving Data");
    }
  });

  module.exports = router;