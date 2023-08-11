import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
function Singup() {
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const response=await axios.post("http://localhost:9090/PostSignUpData",{
            firstname,lastname,email,password
           })
           alert(response.data);
           if(response.status===200){
              navigate("/Login");
           }
        }
        catch(err){
            console.log("Something Shit happened while sending the data to API",err);
        }
    }
  return (
    <div>
        <form className='form'>
            <h3 className='h3'>SignUp</h3>
            <div className='name'>
               <div>
               
               <input type='text' id='firstname' onChange={(e)=>setFirstname(e.target.value)} placeholder="First Name"/>
               </div>
               <div>
               
               <input type='text' id='lastname' onChange={(e)=>setLastname(e.target.value)} placeholder='Last Name'/>
               </div>
               </div>
            <div>
            <div>
               
               <input type='mail' id='E-mail' onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address' className='email'/>
               </div>
            </div>
            <div>
               
               <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='password'/>
            </div>
            <div>
                <button onClick={handleSubmit} className='btn btn-success '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Singup