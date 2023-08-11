const express=require("express")
const cors=require("cors");
const {SignUpCollection,articraft_collection} = require("./Connect");
const app=express();
app.use(express.json())
app.use(cors())


app.get("/",async(req,res)=>{
    res.send("HEllo");
})

app.post("/PostSignUpData",async(req,res)=>{
    try{
    const data=await SignUpCollection.find({email:req.body.email});
   
    if(data.length!=0){
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

app.post("/Login",async(req,res)=>{
    try{
        console.log(req.body.email);
        const data=await SignUpCollection.find({email:req.body.email,password:req.body.password});
        
        if(data.length==0){
            res.status(201).send("Details not Found...");
        }
        else{
           
                res.status(200).send("You have been Logged in Successfully...")
            
        }
    }
    catch(err){
        console.log("Error in fetching the data....");
    }
})

app.get("/getArticrafts-books",async(req,res)=>{
    try{
       const data=await articraft_collection.find();
       console.log(data);
       res.send(data);
       
    }
    catch(err){
        console.log(err);
    }
})
app.put("/updateCount",async(req,res)=>{
    try{
    
    }
    catch(err){
        console.log(err);
    }
})
const PORT=9099
app.listen(PORT,()=>{
    console.log(`App is listening at the port ${PORT}`);
})