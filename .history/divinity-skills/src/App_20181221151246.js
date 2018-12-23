import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Aero from './Components/Skills/Aero.js';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/aerotheurge" component={Aero} exact />
              <Route path="/geomancer" component={Geo} exact />
              { /* <Route path="/huntsman" component={Hunts} exact />
              <Route path="/hydrosophist" component={Hydro} exact />
              <Route path="/necromancer" component={Necro} exact />
              <Route path="/polymorph" component={Poly} exact />
              <Route path="/pyrokinetic" component={Pyro} exact />
              <Route path="/scoundrel" component={Scoun} exact />
              <Route path="/summoning" component={Summ} exact />
              <Route path="/warfare" component={War} exact /> */}
            </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   env: PropTypes.object.isRequired
// };

export default App;
