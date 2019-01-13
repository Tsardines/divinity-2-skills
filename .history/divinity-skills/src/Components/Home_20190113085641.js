import React from 'react';

import SearchBar from './SearchBar.js';

import banner from './artwork/div-2-art.png';

import './Home.css';

const Home = () => {
  return (

      <div className="home">

       {/* <img className="banner" src={banner} alt="banner" /> */}
        
        <div className="intro">

          <h2><i>Divinity Original Sin: 2</i></h2>
          <h3>Skill Checker</h3>

            <hr />

          <SearchBar />

        </div>

      </div>
      
  );
}

export default Home;