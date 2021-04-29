import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearchAlt } from "react-icons/bi";
function Navbar() {
  return (
    <div className="Navbar">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarColor03">
    <ul className="navbar-nav ml-3 mr-auto">
      

      <li className="nav-item ">
        <a className="nav-link links nounderline " href="/"> <i className="fa fa-home" aria-hidden="true"></i> Home </a>


      </li>

      <li className="nav-item">
        <a className="nav-link links nounderline " href="/contacto">Contactanos</a>
      </li>

      <li className="nav-item">
      <a className="nav-link links nounderline " href="/contacto">alquiler</a>
    </li>

  <li className="nav-item">
    <a className="nav-link links nounderline " href="/contacto">venta</a>
  </li>

    </ul>
    <form className="form-inline my-2 my-lg-0"  action="/search" method="POST" autoComplete="on">
     
<div>
      <input className=" text-center unified_inputs form-control mr-sm-2" id="search_input"  name="search_input" type="text" type="text" placeholder="Buscar" autoComplete="on"/>
      <button  id="SearchIcon" className="btn btn-secondary rounded my-2 my-sm-0" type="submit" autoComplete="on"><BiSearchAlt /> </button>
</div>
     
    </form>

    </div>
</nav>

    </div>
  );
}

export default Navbar;
