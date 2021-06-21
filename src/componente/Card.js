import React from "react";
import PropTypes from "prop-types";
import "./../styles/Cards.css";
import Iconos from "./Iconos";
import "animate.css/animate.min.css";

function Card({
  imagen,
  titulo,
  dormitorios,
  baños,
  habitaciones,
  descripcion,
}) {
  let urlimagen = imagen;

  return (
    <div
      id="card"
      className="Card text-center bg-white animate__animated animate__fadeInUp m-3"
    >
      <div className="overflow">
        <img src={urlimagen} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body p-5 max-size">
        <h6 className="p-1">{titulo}</h6>
        <p className="card-text text-start text-muted max-size">
          {descripcion}
        </p>

        {/*iconos  */}

        <div className="text-center d-flex justify-content-evenly">
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
  imageSource: PropTypes.string,
};

export default Card;
