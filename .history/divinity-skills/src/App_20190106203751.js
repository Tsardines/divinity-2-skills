import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import error from './Components/error.js';

import Aero from './Components/Skills/Aero.js';
import Geo from './Components/Skills/Geo.js';
import Hunts from './Components/Skills/Hunts.js';
import Hydro from './Components/Skills/Hydro.js';
import Necro from './Components/Skills/Necro.js';
import Poly from './Components/Skills/Poly.js';
import Pyro from './Components/Skills/Pyro.js';
import Scoun from './Components/Skills/Scoun.js';
import Summ from './Components/Skills/Summ.js';
import War from './Components/Skills/War.js';


/////

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route path="/aerotheurge" component={Aero} exact />
              <Route path="/geomancer" component={Geo} exact />
              <Route path="/huntsman" component={Hunts} exact />
              <Route path="/hydrosophist" component={Hydro} exact />
              <Route path="/necromancer" component={Necro} exact />
              <Route path="/" component={Home} exact />
              <Route path="/polymorph" component={Poly} exact />
              <Route path="/pyrokinetic" component={Pyro} exact />
              <Route path="/scoundrel" component={Scoun} exact />
              <Route path="/summoning" component={Summ} exact />
              <Route path="/warfare" component={War} exact />
              <Route component={error} />
            </Switch>  
            <Footer />        
        </div>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   env: PropTypes.object.isRequired
// };

export default App;
