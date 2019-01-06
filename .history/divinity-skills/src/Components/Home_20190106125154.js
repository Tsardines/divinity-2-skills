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

import banner from './artwork/div-2-art.png';

import './Home.css';

const Home = () => {
  return (

      <div className="home">

`       <img className="banner" src={banner} alt="banner" />
        
        <div className="intro">

          <h2><i>Divinity Original Sin: 2</i></h2>
          <h3>Skill Checker</h3>

          <hr />

          <form className="home-form">
            Search skills: <input type="text" />
          </form>

        </div>

        <div className="home-skills">

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

      </div>

      
  );
}

export default Home;

