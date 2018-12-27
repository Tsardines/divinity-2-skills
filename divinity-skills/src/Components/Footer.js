import React from 'react';

import './HeaderFooter.css';

const Footer = () => {
  return (
      <div className="footer">

        <div className="left">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li></li>
            </ul>
        </div>

        <div className="right">
            <ul>
                <li>This was built with React in 2018.</li>
                <li>Divinity Original Sin 2 is the property of <a href="http://larian.com/">Larian Studios.</a></li>
                <li>This product is not intended for commercial use. For personal use only.</li>
            </ul>
        </div>

      </div>

  );
}

export default Footer;

