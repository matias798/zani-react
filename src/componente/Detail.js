import React, { Component } from "react";

/* Bootsrap styles */
import "bootstrap/dist/css/bootstrap.min.css";

/* Local styles */
import "./../styles/Detail.css";

/* sweet alert gives nice alerts when used */
import Swal from "sweetalert2";

import Iconos from "./Iconos";
import Spinner from "./Spinner";

import { Link } from "react-router-dom";

import Carousel from "./Carrousel";

/* Importing react icon */
import { BsChat } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      items: [],
      ParamsId: props.match.params.id,
    };
  }

  /* When the component mounts */
  componentDidMount() {
    fetch(`https://api-zanni.herokuapp.com/detalle/${this.state.ParamsId}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      /* If the page hasnt been loaded we return the spinner  */
      return <Spinner />;
    } else {
      /*--- We render the webpage ----*/

      /* array que almacena imagenes del carousel */
      const images = [];

      // loop que inserta imagenes si la cantidad es mayor a 4
      for (let i = 1; i < items.resp.length; i++) {
        images.push({
          id: i,
          image: `https://res.cloudinary.com/dsoeo0zhi/image/upload/v1621448965/${items.resp[i].path}.jpg`,
        });
      }
      //Datos del carousel

      //* images */
      const MainImage = `https://res.cloudinary.com/dsoeo0zhi/image/upload/v1621448965/${items.resp[0].path}.jpg`;

      return (
        <div>
          {/* Main image */}
          <div className="d-flex justify-content-center ">
            <img id="mainImage" src={MainImage} alt="First slide" />
          </div>
          {/* /Main image */}

          {/* container of cards and contact  */}
          <div className="d-flex justify-content-center flex-wrap">
            
            <div className="">



 {/* first card */}
 <div  className="DetailCard width50 hideOnPc showOnMobile">
                {/* Title */}

                <h4 className="m-3">{items.propiedad.titulo}</h4>

                {/* Direction */}
                <div>
                  <h6 className="m-3">
                    <GoLocation className="mr-2" />
                    {items.propiedad.direccion}
                  </h6>
                </div>

                {/* Price */}
                <div>
                  <p className="m-3">{items.propiedad.precio}</p>
                </div>

                {/* Icons */}
                <div id="IconsContainer">
                  <Iconos
                    className="d-flex justify-content-center"
                    dormitorios={items.propiedad.dormitorios}
                    baños={items.propiedad.baños}
                    habitaciones={items.propiedad.habitaciones}
                  />
                </div>
                {/* /Icons */}
              </div>
              {/* first card */}



              {/* Carousel  */}
              <div className=" DetailCard height-100 carouselDetalle rounded ">
                <Carousel images={images} />
              </div>
              {/* /Carousel  */}

              {/*  description*/}
              <div className="DetailCard width50 mt-4">
                {/* title of card  */}
                <h5>Descripción</h5>
                {/* /title of card  */}

                {/* Description */}
                <p>{items.propiedad.descripcion}</p>
                {/* /Description */}
              </div>
              {/* / description*/}
            </div>

            {/* Contact card */}
            <div >

              {/* first card */}
              <div id="contactUsDetail" className="  DetailCard width50 hideOnMobileVersion">
                {/* Title */}

                <h4 className="m-3">{items.propiedad.titulo}</h4>

                {/* Direction */}
                <div>
                  <h6 className="m-3">
                    <GoLocation className="mr-2" />
                    {items.propiedad.direccion}
                  </h6>
                </div>

                {/* Price */}
                <div>
                  <p className="m-3">{items.propiedad.precio}</p>
                </div>

                {/* Icons */}
                <div id="IconsContainer">
                  <Iconos
                    className="d-flex justify-content-center"
                    dormitorios={items.propiedad.dormitorios}
                    baños={items.propiedad.baños}
                    habitaciones={items.propiedad.habitaciones}
                  />
                </div>
                {/* /Icons */}
              </div>
              {/* first card */}


              {/* Container of forms in contact us */}
              <div
                id="contactUsDetail"
                className="container DetailCard width50"
              >
                {/* Title */}
                <h5 id="contactTitle "> Marcela Zanni</h5>

                {/* Phone */}
                <div>
                  {" "}
                  <FiPhone /> +54 9 3416 43-1440
                </div>

                {/* Form inputs*/}
                <form method="POST" target="/new-entry" className="form-group">
                  {/* Name */}
                  <div className="text-left mt-2  ">
                    <label htmlFor="title">Nombre</label>
                    <input
                      name="Nombre"
                      type="text"
                      className="form-control"
                      autoFocus
                      required
                    />
                  </div>
                  {/* Name */}

                  {/* Email */}
                  <div className="text-left mt-2 ">
                    <label htmlFor="Email">Correo electrónico</label>
                    <input
                      name="Email"
                      type="email"
                      className="form-control"
                      autoFocus
                      required
                    />
                  </div>
                  {/* /Email */}

                  {/* Message */}
                  <div className="text-left mt-2 ">
                    <label htmlFor="Mensaje">Mensaje</label>
                    <textarea
                      name="Mensaje"
                      className="form-control"
                      rows="3"
                      autoFocus
                    ></textarea>
                  </div>
                  {/* /Message */}

                  {/* Button */}
                  <div>
                    <button
                      className="btn btn-primary ContactButton mt-2 "
                      onClick={() => sendAlert()}
                    >
                      Enviar
                    </button>
                  </div>
                  {/* Button */}
                </form>

                {/* Form inputs*/}
              </div>
              {/* /Container of forms in contact us */}
            </div>
          </div>
          {/* /container of cards and contact  */}

          {/* Contact Button */}
          <Link to="/contacto" className="">
            <button id="contactUsDetailButton">
              <BsChat />
            </button>
            {/* /Contact Button */}
          </Link>
        </div>
      );

      /****************************/
      /******** Functions ********/
      /**************************/

      function sendAlert() {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu mensaje fue enviado con exito!!",
          timer: 1500,
        });
      }
    }
  }
}
export default App;
