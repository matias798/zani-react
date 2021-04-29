import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './../imagenes/imagenPrincipal1.jpg';
import './../App.css';
import { Link } from 'react-router-dom';




const Propiedades = ({items}) => {


  return (
      

<div>
    
{/* Primer propiedad  */}

{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[0].idpropiedad}`} className="Propiedad">

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
<div className='m-5'>
{items[0].titulo}
{items[0].precio}
</div>
{/* /Texto */}

{/* /Link que dirige al detalle del producto */}
</Link>
{/* /Primer propiedad  */}





{/* Segunda propiedad  */}

{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[1].idpropiedad}`} className='Propiedad ' id='Propiedad2' >

{/* Texto */}
<div className='m-5'>
{items[0].idpropiedad}<br></br>
{items[1].precio}

</div>
{/* /Texto */}

{/* imagen */}
<div className=' PropiedadesImageContainer d-flex ' id='PropiedadesImageContainer2'>
<img
          className="PropiedadesImage d-block"
          src={image1}
          alt="First slide"
        />
</div>
{/* /imagen */}

{/* /Link que dirige al detalle del producto */}
</Link>
{/* /Segunda propiedad  */}


{/* Tercer propiedad  */}

{/* Link que dirige al detalle del producto */}
<Link  className='Propiedad 'to ={`/detalle/${items[2].idpropiedad}`}>


{/* imagen */}
<div className='PropiedadesImageContainer'>
<img
          className="PropiedadesImage d-block"
          src={image1}
          alt="First slide"
        />
</div>
{/* /imagen */}


{/* Texto */}
<div className='m-5'>
{items[2].titulo}
{items[2].precio}
</div>
{/* /Texto */}

{/* /Link que dirige al detalle del producto */}
</Link>

{/* /Tercer propiedad  */}




</div>

    );
}

export default Propiedades;
