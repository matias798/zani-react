import './App.css';
import Navbar from './componente/Navbar';
import Propiedades from './componente/Propiedades';
import CarouselContainer from './componente/CarouselContainer';
import Detalle from './componente/Detalle';




import React, { Component } from 'react'; //different

import {BrowserRouter as Router,Switch,Route }  from 'react-router-dom'

class App extends Component{


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
<Router>
 
 {/* navegacion */}
 <Navbar />
 {/* /navegacion */}

{/* Carrousel de imagenes */}
 < Route path ="/" exact  component={CarouselContainer} />

{/* propiedades */}
 < Route path ="/" exact >
 < Propiedades items ={items}/>
 </Route>

 {/* Propiedad de forma detallada */}
 < Route path ="/detalle/:id"  component={Detalle} />

{/* Contacto */}

 </Router>

    </div>
  );}
  }
}
export default App;
