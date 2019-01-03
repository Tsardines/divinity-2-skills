import React from 'react';
import { NavLink } from 'react-router-dom';


import './HeaderFooter.css';

const Header = () => {
  return (

      <div className="header">

          <h1>Divinity 2: Skills Checker</h1>
          
        <div className="nav-links">

            <div className="link">
                <NavLink to="/">Home&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/geomancer">Geomancer&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/huntsman">Huntsman&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/hydrosophist">Hydrosophist&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/necromancer">Necromancer&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/polymorph">Polymorph&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/pyrokinetic">Pyrokinetic&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/scoundrel">Scoundrel&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/summoning">Summoning&emsp;</NavLink>
            </div>           
            
            <div className="link">
                <NavLink to="/warfare">Warfare&emsp;</NavLink>
            </div>

        </div>

      </div>
  );
}

export default Header;

