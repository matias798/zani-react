import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import "./../styles/TarjetaContacto.css";

const TarjetaContacto = () => {
  return (
    <div>
      <div className="contact3 py-5">
        <div className="row d-flex fw no-gutters">
          <div className="container">
            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row d-flex fw">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                          alt="icono direccion"
                        />
                      </div>
                      <div className="">
                        <h3 className="font-weight-medium">Direccion</h3>
                        <p>
                          Tucumán 1445<br></br>{" "}
                          <span className="pl-4 text-centerz">Rosario </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                          alt="icono telefono"
                        />
                      </div>
                      <div className="">
                        <h3 className="font-weight-medium">Telefono</h3>
                        <p className="">
                          034 144 9630
                          <br /> +549 341 643 5333
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                          alt="icono email"
                        />
                      </div>
                      <div>
                        <h3 className="font-weight-medium ">Email</h3>
                        <p id="email">
                          consultas@marcelozanni.com.ar
                          <em> 123@wrappixel.com </em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaContacto;
