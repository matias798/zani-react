import './../styles/Propiedad.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './../imagenes/imagenPrincipal1.jpg';
import { Link } from 'react-router-dom';
import Iconos from './Iconos';


const Propiedades = ({items}) => {

  return (
<div>
    
{/* Primer propiedad  */}

<div  className="Propiedad">

{/* imagen */}
<div className='PropiedadesImageContainer'>
<img
          className=" PropiedadesImage d-block"
          src={image1}
          alt="First slide"
        />
</div>
{/* /imagen */}


{/* Texto */}
<div className='texto m-5'>
<h2>{items[0].titulo}</h2>
<p>{items[0].descripcion}</p>


</div>
</div>

</div>

    );
}

export default Propiedades;
