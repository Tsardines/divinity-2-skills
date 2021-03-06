import React from 'react';

import code from './icons/code-logo.png';
import gh from './icons/gh-logo.png';
import linkedin from './icons/linkedin-logo.png';
import mail from './icons/mail-logo.png';
import aperture from './icons/aperture.png';

import './HeaderFooter.css';

const Footer = () => {
  return (
      <div className="footer">

        <div className="top">
            <ul>
                <li>Home</li>
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

                <li>
                    <a href="https://github.com/Tsardines" target="_blank" rel="noopener noreferrer"><img src={gh} alt="gh" height="50" width="50" /></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/haley-sulcer/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" height="50" width="50" /></a>
                </li>

                <li>
                    <a href="mailto:hjsulcer@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="mail" height="50" width="50"/></a> 
                </li>

                <li>
                    <a href="https://haleysulcerphoto.netlify.com" target="_blank" rel="noopener noreferrer"><img src={aperture} alt="mail" height="50" width="50"/></a> 
                </li>
            </ul>

        </div>

      </div>

  );
}

export default Footer;

