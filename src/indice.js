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
		fetch("https://api-zanni.herokuapp.com/propiedades")
    
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

//Datos del carousel 
  const images = [
		{
			id: '1',
			title: items[1].titulo,
			image:
      'https://api-zanni.herokuapp.com/images/' + items[0].imagen_principal,
		},
		{
			id: '2',
			title: items[2].titulo,
			image:
      'https://api-zanni.herokuapp.com/images/' + items[1].imagen_principal,
		},
		{
			id: '3',
			title: items[3].titulo,
			image:
      'https://api-zanni.herokuapp.com/images/' + items[2].imagen_principal,
		}
	]
//Datos del carousel 

  return (
 <div >
{/* Carrousel de imagenes */}
 < CarouselContainer images ={images} />

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
