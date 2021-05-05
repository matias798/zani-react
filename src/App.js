import './App.css';
import Navbar from './componente/Navbar';
import Detalle from './componente/Detalle';
import Contacto from './componente/contacto';
import Alquiler from './componente/Alquiler';
import Venta from './componente/Venta';
import Footer from './componente/Footer';
import Indice from './indice';





import React, { Component } from 'react'; //different

import {BrowserRouter as Router,Route }  from 'react-router-dom'

class App extends Component{
render(){




  return (
 <div className="App">
<Router>
 
 {/* navegacion */}
 <Navbar />
 {/* /navegacion */}


<Route path ="/" exact component={Indice} />


 {/* Propiedad de forma detallada */}
 < Route path ="/detalle/:id"  component={Detalle} />



{/* Contacto */}
< Route path ="/contacto"  component={Contacto} />

{/* alquiler */}
< Route path ="/alquiler"  component={Alquiler} />

{/* venta */}
< Route path ="/venta"  component={Venta} />

 </Router>


 {/* Footer */}
 <Footer />
 {/* /Footer */}

    </div>
  );
  }
}
export default App;
