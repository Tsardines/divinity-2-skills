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

        </div>

      </div>
  );
}

export default Header;

