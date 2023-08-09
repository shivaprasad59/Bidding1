import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
   
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const response=await axios.post("http://localhost:9090/Login",{
            email,password
           })
           alert(response.data);
           if(response.status===201){
              navigate("/Login");
           }
           if(response.status==200){
            navigate("/Welcome")
           }
        }
        catch(err){
            console.log("Something Shit happened while sending the data to API",err);
        }
    }
  return (
    <div>
        <form className='form'>
            <h3 className='h3'>Login</h3>
            
             
            
            <div>
               
               <input type='mail' id='E-mail' onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address' className='email'/>
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

export default Login