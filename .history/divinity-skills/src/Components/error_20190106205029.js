import React, { Component } from 'react';
import errorimg from './icons/errorimg.jpg';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
                <img src={errorimg} alt="404"/>
            </div>
        )
    }
}

export default error;