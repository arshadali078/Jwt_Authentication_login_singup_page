const mongoose= require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/jwt_db");


mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error",()=>{
    console.log("Connection error in MongoDB");
})
module.exports=mongoose;
