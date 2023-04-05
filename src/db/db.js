const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://siddhant:%40Siddhant14022003@cluster0.dmeojdy.mongodb.net/chaudhary?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   

})
.then(()=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
}) 