const express=require("express")
const cors=require("cors");
const SignUpCollection = require("./Connect");

const app=express();
app.use(express.json())
app.use(cors())


app.get("/",async(req,res)=>{
    res.send("HEllo");
})

app.post("/PostSignUpData",async(req,res)=>{
    try{
    const data=await SignUpCollection.find({email:req.body.email});
    if(data!=null){
        res.status(200).send("Email has been registered...Try to Login");
    }
    else{
        const response=await  SignUpCollection.create(req.body);
    res.status(200).send("SignedUp Successfully");
    }
    }
    catch{
        console.log("Error in posting the data");
    }
})

app.get("/Login",async(req,res)=>{
    try{
        const data=await SignUpCollection.find({email:req.body.email});
        console.log(data);
        if(data==null){
            res.status(404).send("Entered Details Not Found.Please try to SignUp...");
        }
        else{
            
            if(data.password!==req.body.password){
            res.status(300).send("You have entered wrong password.")
            }
            else{
                res.status(200).send("You have been Logged in Successfully...");
            }
        }
    }
    catch(err){
        console.log("Error in fetching the data....");
    }
})




const PORT=9090
app.listen(PORT,()=>{
    console.log("App is listening at the port 9090");
})