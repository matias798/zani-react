import './../styles/Propiedad.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Iconos from './Iconos';


const Propiedades = ({items}) => {

 let image1 =  items[3].imagen_principal;
 let image2 =  items[4].imagen_principal;
 let image3 =  items[5].imagen_principal;

 


  return (
<div>
    
{/* Primer propiedad  */}

<div  className="Propiedad">

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
<div className='texto m-5'>
<h2>{items[3].titulo}</h2>
<p>{items[3].descripcion}</p>

{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[3].idpropiedad}`}>
 <div>
 <button className='btn btn-secondary-lg text-center'>Ver más</button>
 </div>
</Link>
{/* /link que dirige al detalle del producto */}

</div>



</div>

{/* iconos */}
<div className='m-5'>
<Iconos 
dormitorios={items[3].dormitorios}
baños={items[3].baños}
habitaciones={items[3].habitaciones}/>
</div>

{/* /Primer propiedad  */}





{/* Segunda propiedad  */}

<div className='Propiedad ' id='Propiedad2' >

{/* Texto */}
<div className='texto m-5'>
<h2>{items[4].titulo}</h2>
<p>{items[4].descripcion}</p>



{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[4].idpropiedad}`}>
 <div>
 <button className='btn btn-secondary-lg text-center'>Ver más</button>
 </div>
</Link>
{/* /link que dirige al detalle del producto */}

</div>
{/* imagen */}
<div className=' PropiedadesImageContainer d-flex ' id='PropiedadesImageContainer2'>
<img
          className="PropiedadesImage d-block"
          src={image2}
          alt="First slide"
        />
</div>
{/* /imagen */}


</div>

<div className=' d-flex justify-content-end text-right m-5'>
<Iconos 
 dormitorios={items[4].dormitorios}
 baños={items[4].baños}
 habitaciones={items[4].habitaciones}
/>

</div>

{/* /Segunda propiedad  */}


{/* Tercer propiedad  */}

<div  className='Propiedad '>


{/* imagen */}
<div className='PropiedadesImageContainer'>
<img
          className="PropiedadesImage d-block"
          src={image3}
          alt="First slide"
        />
</div>
{/* /imagen */}


{/* Texto */}
<div className='texto m-5'>
<h2>{items[5].titulo}</h2>
<p>{items[5].descripcion}</p>


{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[5].idpropiedad}`}>
 <div>
 <button className='btn btn-secondary-lg text-center'>Ver más</button>
 </div>
</Link>
{/* /link que dirige al detalle del producto */}

</div>

</div>

{/* iconos */}
<div className='m-5'> <Iconos
 dormitorios={items[5].dormitorios}
 baños={items[5].baños}
 habitaciones={items[5].habitaciones}
 />
</div>



{/* /Tercer propiedad  */}

</div>

    );
}

export default Propiedades;
