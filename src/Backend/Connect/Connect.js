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

const modelArticrafts=new mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    count:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true
    }
})
const articraft_collection=new mongoose.model("Articrafts-Books",modelArticrafts);
module.exports={SignUpCollection,articraft_collection};