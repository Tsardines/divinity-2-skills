import React from 'react';
import { NavLink } from 'react-router-dom';


// import './Header.css';

const Header = () => {
  return (

      <div className="header">
        <div className="nav-links">

            <div className="link">
                <NavLink to="/">Home&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/geomancer">geomancer&emsp;</NavLink>
            </div>

            <div className="link">
                <NavLink to="/huntsman">huntsman&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/hydrosophist">hydrosophist&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/necromancer">necromancer&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/polymorph">polymorph&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </div>
            
            <div className="link">
                <NavLink to="/aerotheurge">Aerotheurge&emsp;</NavLink>
            </div>

        </div>

      </div>
  );
}

export default Header;

