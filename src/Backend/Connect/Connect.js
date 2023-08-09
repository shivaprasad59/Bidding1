const mongoose=require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Bidding", { useNewUrlParser: true })
.then(() => {
    console.log("Connected Successfully");
})
.catch((err) => {
    console.log("Error in Connecting to the database", err);
});



const model1=new mongoose.Schema({
    firstname:{
        require:true,
        type:String
    },
    lastname:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
})

const SignUpCollection =new mongoose.model("SignUpData",model1);
module.exports=SignUpCollection;