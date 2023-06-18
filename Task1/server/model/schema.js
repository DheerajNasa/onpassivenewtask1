const mongoose = require("mongoose");

let profileSchema=new mongoose.Schema({
    email: {
        type: String,
        
        // validate: {
        //   validator: () => Promise.resolve(false),
        //   message: 'Email validation failed'
        // }
      },
    // name:String,
    profilePic:String,
    skills:String,
    contact:String,
    gender:String,
    


})

let profile=new mongoose.model("students",profileSchema)

module.exports = profile;