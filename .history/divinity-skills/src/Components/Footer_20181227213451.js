import React from 'react';

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

      </div>

  );
}

export default Footer;

