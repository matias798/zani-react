import React, { Component } from 'react'; //different
import './../styles/Detalle.css';
import CarouselContainer from './Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Iconos from './Iconos';
import Spinner from './Spinner';

import {Link} from 'react-router-dom'
import { GrContact } from "react-icons/gr";



class App extends Component{


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      mm: props.match.params.id

    };
  }

  componentDidMount(){

		fetch(`https://api-zanni.herokuapp.com/detalle/${this.state.mm}`)
    
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}





render(){
  const { error,isLoaded,items } = this.state;

 if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
 return <Spinner />;
  } 

  else {

//Datos del carousel 

/* array que almacena imagenes del carousel */ 
const images = []

// loop que inserta imagenes si la cantidad es mayor a 4
for(let i = 4;i < items.resp.length; i ++){


  images.push({
    id: i ,
    image:
    'https://api-zanni.herokuapp.com/images/' + items.resp[i].path,
  })


}
//Datos del carousel 



  return (
 <div className="App">

{/* Main image */}
<div>
<img id='mainImage'
className="d-block height-120 w-100"
src={`https://api-zanni.herokuapp.com/images/${items.resp[0].path}`}
alt="First slide" />
{/* button que redirige a pagina de contacto */}
<div className='bg-white animate__animated  animate__fadeInUp enviarMesaje'>
  <div>
  <Link  to="/contacto">
  <p> Envianos un mensaje!! <GrContact className='m-1'  /></p>


</Link>
</div>

 </div>
{/* button que redirige a pagina de contacto */}
</div>
{/* /Main image */}


{/* Descripcion */}

<div className='text-center card m-3 mt-5'> 
<p id='textColor  rounded' >{items.propiedad.descripcion}</p>

</div>
{/* /Descripcion */}



{/* segunda seccion */}
<div id = 'segundaSeccion' className='d-flex justify-content-evenly m-4 ' autofocus>

{/* Titulo */}
<div className='m-3'>
<h2 className='text-center'>{items.propiedad.titulo}</h2>
{/* /Titulo */}

<div className=''>
<Iconos className='d-flex justify-content-center'
dormitorios={items.propiedad.dormitorios}
baños={items.propiedad.baños}
habitaciones={items.propiedad.habitaciones}/>
</div>

</div>

{/* imagen */}
<div className='mediaresponsivec ml-auto'>
<img
          className=" segundaSeccionImage height-75 mediaresponsive"
          src={`https://api-zanni.herokuapp.com/images/${items.resp[1].path}`}
          alt="First slide"
        />
</div>
{/* /imagen */}
</div>
{/* /segunda seccion */}


{/* Tercera seccion  */}
<div id='tercerSeccion' className='Propiedad mb-5 rounded'to ={`/detalle/${items.propiedad.idpropiedad}`}>
{/* imagen */}
<div className='  '>
<img     id='segundaSeccion'
          className="DetalleImage "
          src={`https://api-zanni.herokuapp.com/images/${items.resp[2].path}`}
          alt="First slide"
        />


</div>
{/* /imagen */}


{/* Texto */}
<div className='texto '>
<p id='textColor' >{items.propiedad.direccion}</p>
<p id='textColor' ><span>$</span>{items.propiedad.precio}</p>
</div>
</div>
{/* Tercera seccion  */}



{/* Carrousel de imagenes */}
<div className='height-100 carouselDetalle '>
< CarouselContainer images ={images} />
</div>




<div className=''>
{/* Main image */}
<img
className=" h-100 w-100 lastMainImage"
src={`https://api-zanni.herokuapp.com/images/${items.resp[3].path}`}
alt="First slide" />
{/* /Main image */}


</div>


<script>
  {/* al renderizar empieza desde arriba de todo */}
  componentDidMount() {
    window.scrollTo(0, 0)
  }
</script>
  
    </div>
  );}
  }
}
export default App;
