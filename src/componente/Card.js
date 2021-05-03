import React from "react";
import PropTypes from "prop-types";
import './../styles/Cards.css';
import Iconos from './Iconos';
import 'animate.css/animate.min.css'



function Card({ imageSource, titulo,dormitorios, baños ,habitaciones, descripcion }) {
  return (
   
    
   <div className="card text-center bg-white animate__animated animate__fadeInUp ">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body p-5 max-size">
      

        <h4 className='p-3'>{titulo}</h4>
        <p className="card-text text-start text-muted max-size"> {descripcion} </p>
        
 {/*iconos  */}

 <div className='text-center d-flex justify-content-evenly'>
<Iconos 
 dormitorios={dormitorios}
 baños={baños}
 habitaciones={habitaciones}
/>
</div>
 {/*iconos  */}


      </div>
    </div>
  );
}

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
