import './../styles/Propiedad.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Iconos from './Iconos';


const Propiedades = ({items}) => {

 let image1 = 'https://portafolio-inmobiliaria.herokuapp.com/images/' + items[0].imagen_principal;
 let image2 = 'https://portafolio-inmobiliaria.herokuapp.com/images/' + items[1].imagen_principal;
 let image3 = 'https://portafolio-inmobiliaria.herokuapp.com/images/' + items[2].imagen_principal;



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
<h2>{items[0].titulo}</h2>
<p>{items[0].descripcion}</p>

{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[0].idpropiedad}`}>
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
dormitorios={items[0].dormitorios}
baños={items[0].baños}
habitaciones={items[0].habitaciones}/>
</div>

{/* /Primer propiedad  */}





{/* Segunda propiedad  */}

<div className='Propiedad ' id='Propiedad2' >

{/* Texto */}
<div className='texto m-5'>
<h2>{items[1].titulo}</h2>
<p>{items[1].descripcion}</p>



{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[1].idpropiedad}`}>
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
 dormitorios={items[1].dormitorios}
 baños={items[1].baños}
 habitaciones={items[1].habitaciones}
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
<h2>{items[2].titulo}</h2>
<p>{items[2].descripcion}</p>


{/* Link que dirige al detalle del producto */}
<Link to ={`/detalle/${items[2].idpropiedad}`}>
 <div>
 <button className='btn btn-secondary-lg text-center'>Ver más</button>
 </div>
</Link>
{/* /link que dirige al detalle del producto */}

</div>

</div>

{/* iconos */}
<div className='m-5'> <Iconos
 dormitorios={items[2].dormitorios}
 baños={items[2].baños}
 habitaciones={items[2].habitaciones}
 />
</div>



{/* /Tercer propiedad  */}

</div>

    );
}

export default Propiedades;
