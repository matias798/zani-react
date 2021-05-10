import React from "react";
import './../styles/Spinner.css';
import { Spinner } from 'react-bootstrap';



function Spiner() {


  return (
 
    <div className='d-flex justify-content-center spinnerContainer'>
      <Spinner animation="border" variant="info" />
      </div>
    
    );
}

export default Spiner;
