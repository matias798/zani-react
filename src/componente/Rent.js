import React, { Component } from 'react'; 
import Card from "./Card";
import { Link } from 'react-router-dom';
import Spinner from './Spinner';


class Alquiler extends Component{


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      mm: props.match.params.id,
      cards:[]

    };
  }
  componentDidMount(){

		fetch(`https://api-zanni.herokuapp.com/propiedades/alquiler`)
    
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
 return <Spinner />;
  } 

  else {
  return (
   <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row ">
        {items.map((items,j) => (
          <div  key={j} className="m-2" >
           
           
<Link to ={`/detalle/${items.idpropiedad}`}>

<Card
 titulo={items.titulo} 
 dormitorios={items.dormitorios}
 baños={items.baños}
 habitaciones={items.habitaciones} 
 descripcion ={items.descripcion}
 imagen={items.imagen_principal}

 />
          </Link>
          
          
          </div>
        ))}






        
      </div>
    </div>
  )}}}

export default Alquiler;