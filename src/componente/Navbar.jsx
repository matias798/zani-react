import 'bootstrap/dist/css/bootstrap.min.css';
// bootrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import './../styles/Navbar.css';


import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">


      
<nav className="navbar navbar-expand-lg navbar-light bg-light">
 
 {/* Logo */}
 <Link className="nav-link links nounderline " to="/">
<img className="logo" src="./../logo.jpeg" alt="Logo" />
</Link>
 {/* /Logo */}

 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarColor03">



    <ul className="navbar-nav ml-3 ml-auto">
      

      <li className="nav-item p-3 ">
        <Link className="nav-link links nounderline " to="/"> <i className="fa fa-home" aria-hidden="true"></i> Home </Link>


      </li>

      <li className="nav-item p-3">
      <Link className="nav-link links nounderline " to="/alquiler">Alquiler</Link>
    </li>

  <li className="nav-item p-3">
    <Link className="nav-link links nounderline " to="/venta">Venta</Link>
  </li>

  <li className="nav-item p-3">
        <Link className="nav-link links nounderline " to="/contacto">Contactanos</Link>
      </li>

    </ul>
    </div>
</nav>

    </div>
  );
}

export default Navbar;
