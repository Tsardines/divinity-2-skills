import React from 'react';

import code from './icons/code-logo.png'; 

import './HeaderFooter.css';

const Footer = () => {
  return (
      <div className="footer">

        <div className="top">
            <ul>
                <li>Home</li>
                <li><a href="https://hjsulcer.netlify.com">Personal Site</a></li>
                <li></li>
            </ul>
        </div>

        <div className="middle">
            <ul>
                <li>This was built with React in 2018.</li>
                <li>Divinity Original Sin 2 is the property of <a href="http://larian.com/">Larian Studios.</a></li>
                <li>This product is not intended for commercial use. For personal use only.</li>
            </ul>
        </div>

        <div className="bottom">
            <ul>
                <li>
                    <a href="https://hjsulcer.netlify.com/"><img src={code} alt="code" height="50" width="50" /></a>
                </li>
            </ul>
        </div>

      </div>

  );
}

export default Footer;

