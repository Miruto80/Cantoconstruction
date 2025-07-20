import React from 'react'
import { Link} from 'react-router-dom';
import '../assets/css/Navbar.css'


export default function Navbar() {
  

  return (
     <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">        
              <img src="/img/logo.webp" width="150" height="80" className="d-inline-block align-text-top" alt="Logo" />
            </Link>
            <h1 className="navbar-brand fs-6 d-none d-sm-inline d-lg-inline fs-lg-2">
              <b>Quality Work, Trusted Results</b>
            </h1>
            <button className="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars text-white"></i>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
             <ul className="navbar-nav mb-2 mb-lg-0">
             <li>
             <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
            <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li>
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
      </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}
