



import React, { Component } from 'react'; //different

import {BrowserRouter as Router,Switch,Route }  from 'react-router-dom'

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


    {items.titulo}
    </div>
  );}
  }
}
export default App;
