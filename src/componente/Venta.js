



import React, { Component } from 'react'; //different


class venta extends Component{


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

		fetch(`https://portafolio-inmobiliaria.herokuapp.com/propiedades/venta`)
    
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
 <div className="venta">



{items.map((items) => (
          <div className="col-md-4 mt-5">
{items.titulo}


          </div>
        ))}

    </div>
  );}
  }
}
export default venta;
