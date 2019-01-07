import React, { Component } from 'react';
import error-img from './icons/error-img.jpg';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
                <img src={error-img} alt="404"/>
            </div>
        )
    }
}

export default error;