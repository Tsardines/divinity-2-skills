import React, { Component } from 'react';
import 404 from './icons/404.png';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
                <img src={404} alt="404"/>
            </div>
        )
    }
}

export default error;