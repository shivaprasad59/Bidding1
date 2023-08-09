import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='body'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <a className="nav-link active" href="#">Articrafts</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link active" href="#">Vehicles</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link active" href="#">Electronics</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar