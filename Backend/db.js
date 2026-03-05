const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/MoodData")
.then(()=>console.log("Mongo Connected"))