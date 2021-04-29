import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './../imagenes/imagenPrincipal1.jpg';
import './../App.css';





const Propiedades = ({items}) => {

  return (

<div>
    
{/* Primer propiedad  */}
<div className="Propiedad">

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

</div>
{/* /Primer propiedad  */}



{/* Segunda propiedad  */}
<div className='Propiedad ' id='Propiedad2'>
{/* Texto */}
<div className='m-5'>
{items[1].titulo}
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

</div>
{/* /Segunda propiedad  */}



{/* Tercer propiedad  */}
<div className='Propiedad '>

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

</div>
{/* /Tercer propiedad  */}




</div>

    );
}

export default Propiedades;
