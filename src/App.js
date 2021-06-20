import React, { Component } from "react"; 

/* Importing React router  */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Local styles */
import "./App.css";

/* Components */
import Navbar from "./componente/Navbar";
import Detail from "./componente/Detail";
import Contact from "./componente/Contact";
import Rent from "./componente/Rent";
import Sale from "./componente/Sale";
import AboutUs from "./componente/AboutUs";
import Footer from "./componente/Footer";
import HomePage from "./HomePage";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* navegacion */}
          <Navbar />
          {/* /navegacion */}
          <Switch>
            <Route path="/" exact component={HomePage} />

            {/* Propiedad de forma detallada */}
            <Route path="/Detail/:id" component={Detail} />

            {/* Contact */}
            <Route path="/Contact" component={Contact} />

            {/* alquiler */}
            <Route path="/alquiler" component={Rent} />

            {/* venta */}
            <Route path="/venta" component={Sale} />

            {/* venta */}
            <Route path="/sobre-nosotros" component={AboutUs} />
          </Switch>

          {/* Footer */}
          <Footer />
          {/* /Footer */}
        </Router>
      </div>
    );
  }
}
export default App;
