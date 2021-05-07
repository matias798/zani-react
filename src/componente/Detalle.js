import React, { Component } from 'react'; //different
import './../styles/Detalle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import { Carousel } from 'react-bootstrap';



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
    return <div>Loading...</div>;
  } 

  else {
  return (
 <div className="App">

{/* Main image */}
<img
className="d-block h-50 w-100"
src={`https://api-zanni.herokuapp.com/images/${items.resp[0].path}`}
alt="First slide" />
{/* /Main image */}


<div className='d-flex justify-content-evenly m-4' >


{/* Texto */}
<div className='texto m-5 p-5'>
<h2 className='text-center p-5'>{items.propiedad.titulo}</h2>
<p>{items.propiedad.descripcion}</p>
{/* /Texto */}
</div>

{/* imagen */}
<div className='m-5 p-5'>
<img
          className="w-100 "
          src={`https://api-zanni.herokuapp.com/images/${items.resp[1].path}`}
          alt="First slide"
        />
</div>
{/* /imagen */}
</div>
{/* /Segunda propiedad  */}

<div  className='Propiedad mb-5 'to ={`/detalle/${items.propiedad.idpropiedad}`}>
{/* imagen */}
<div className='PropiedadesImageContainer'>
<img
          className="PropiedadesImage d-block"
          src={`https://api-zanni.herokuapp.com/images/${items.resp[2].path}`}
          alt="First slide"
        />
</div>
{/* /imagen */}


{/* Texto */}
<div className='texto m-5'>
<h2>{items.propiedad.titulo}</h2>
<p>{items.propiedad.descripcion}</p>
</div>
</div>


<div className='mt-5 pt-5'>
{/* Main image */}
<img
className="d-block  w-100"
src={`https://api-zanni.herokuapp.com/images/${items.resp[3].path}`}
alt="First slide" />
{/* /Main image */}
</div>










    </div>
  );}
  }
}
export default App;
