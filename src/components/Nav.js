import { Button } from 'bootstrap'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import './Nav.css'
import image from './images/1.jpeg'

const Nav = () => {
  return (
    <div>


<Navbar class="navbar fixed-top navbar-light bg-light">
<nav class="navbar fixed-top navbar-light bg-light">
  <div className="img-logo"> <img src={image} width="50" height="50" alt=""/></div>



        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div class="navbar-nav justify-content-end">
          <a class="nav-item nav-link" href="#">About</a>
          <a class="nav-item nav-link" href="#">Services</a>
          <a class="nav-item nav-link" href="#">Contact</a>
        </div>
        </Navbar.Collapse>
        </nav>
      </Navbar>


    </div>
  )
}

export default Nav
