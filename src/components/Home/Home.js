import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserPlus } from 'react-icons/fa'
function Home() {
  const [user,setUser]=useState("Login")
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/Login">{user}</Link></a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link active" href="#"><Link to="/SignUp"><FaUserPlus/>SignUp</Link></a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Home