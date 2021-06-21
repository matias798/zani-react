/* Importing Local Ilustration */
import ContactUsIlustration from "./../imagenes/ContactUsIlustration.jpg";

//Bootsrap styles
import "bootstrap/dist/css/bootstrap.min.css";

/* Local Styles */
import "./../styles/Contact.css";

/* sweet alert gives nice alerts when used */
import Swal from "sweetalert2";

function Contacto() {
  return (
    <div id="ContactBackgroundColor" >
    <div className="d-flex justify-content-center flex-wrap-reverse mt-5">
      {/* Container of forms in contact us */}
      <div id="contactUsForm" className="container">
        {/* Title */}
        <h5 id="contactTitle"> Envianos un mensaje!</h5>

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

      {/* Ilustration */}
      <div className=" mt-4 ">
        <img src={ContactUsIlustration} id="contactUsImage" alt="" />
      </div>
      {/* /Ilustration */}
    </div>
    </div>);
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

export default Contacto;
