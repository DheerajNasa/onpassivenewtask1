const express = require("express");
const cors = require("cors");
const connectToMDB = require("./database/db")
let app = express();
app.use(cors());

const updateRoute = require("./Routes/updateRoute");

app.use("/",updateRoute)

app.listen(1008,()=>{
    console.log("Listening to port 1008")
})

connectToMDB()
