import React from 'react';

import Aero from './Skills/Aero.js';
import Geo from './Skills/Geo.js';
import Hunts from './Skills/Hunts.js';
import Hydro from './Skills/Hydro.js';
import Necro from './Skills/Necro.js';
import Poly from './Skills/Poly.js';
import Pyro from './Skills/Pyro.js';
import Scoun from './Skills/Scoun.js';
import Summ from './Skills/Summ.js';
import War from './Skills/War.js';

// import './Home.css';

const Home = () => {
  return (

      <div className="home">
        <h1>Browse all Skills</h1>

        <Aero />
        <Geo />
        <Hunts />
        <Hydro />
        <Necro />
        <Poly />
        <Pyro />
        <Scoun />
        <Summ />
        <War />

      </div>

      
  );
}

export default Home;

