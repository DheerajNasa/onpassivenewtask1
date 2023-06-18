const mongoose = require("mongoose")
let connectToMDB = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/India");
        console.log("Connected to MDB")
    }catch(error){
        console.log(error);
        console.log("Error in Connecting MDB")
    }
}

module.exports = connectToMDB;