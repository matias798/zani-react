import React, { Component } from 'react'; //different
import image1 from './../imagenes/imagenPrincipal1.jpg';


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

		fetch(`https://portafolio-inmobiliaria.herokuapp.com/detalle/${this.state.mm}`)
    
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

  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } 

  else {
  return (
 <div className="App">

{/* Main image */}
<img
className="d-block h-50 w-100"
src={image1}
alt="First slide" />
{/* /Main image */}


<div className='d-flex justify-content-evenly m-4' >


{/* Texto */}
<div className='texto m-5 p-5'>
<h2 className='text-center p-5'>{items.titulo}</h2>
<p>{items.descripcion}</p>
{/* /Texto */}
</div>

{/* imagen */}
<div className='m-5 p-5'>
<img
          className="w-100 "
          src={image1}
          alt="First slide"
        />
</div>
{/* /imagen */}
</div>
{/* /Segunda propiedad  */}

<div  className='Propiedad 'to ={`/detalle/${items.idpropiedad}`}>
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
<h2>{items .titulo}</h2>
<p>{items.descripcion}</p>
</div>
</div>



<div className='mt-5 pt-5'>
{/* Main image */}
<img
className="d-block  w-100"
src={image1}
alt="First slide" />
{/* /Main image */}
</div>




<div className='mt-5 '>
<div className='mt5 pt-5 d-flex justify-content-evenly'>


<div >
{/* Texto */}
<div className='text-center '>
<p>{items.descripcion}</p>
{/* /Texto */}
</div>

{/* imagen */}
<div className=' d-flex align-items-end justify-content-start pt-5 mt-5'>
<img
          className=" align-self-center PropiedadesImage mt-5 pt-5 w-50 d-block"
          src={image1}
          alt="First slide"
        />
</div>
{/* /imagen */}
</div>


{/* imagen */}
<div >
<img
          className=" w-100 h-100 d-block"
          src={image1}
          alt="First slide"
        />
</div>
{/* /imagen */}

</div>
</div>



<div className='mt-5 pt-5'>
{/* Main image */}
<img
className="d-block w-100"
src={image1}
alt="First slide" />
{/* /Main image */}
</div>



    </div>
  );}
  }
}
export default App;
