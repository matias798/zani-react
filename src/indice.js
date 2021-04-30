import Propiedades from './componente/Propiedades';
import CarouselContainer from './componente/Carrousel';
import NuestroEquipo from './componente/NuestroEquipo';
import TarjetaContacto from './componente/TarjetaContacto';





import React, { Component } from 'react'; //different

import {Route }  from 'react-router-dom'

class indice extends Component{


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
		fetch("https://portafolio-inmobiliaria.herokuapp.com/")
    
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
 <div >
{/* Carrousel de imagenes */}
 < CarouselContainer />


 {/* Tarjeta contacto */}
 < TarjetaContacto />


{/* propiedades */}
 < Route path ="/" exact >
 < Propiedades items ={items}/>
 </Route>

<NuestroEquipo />
    </div>
  );}
  }
}
export default indice;
