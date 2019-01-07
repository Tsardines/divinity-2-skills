import React, { Component } from 'react';
import errorimg from './artwork/errorimg.jpg';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
                <img className="error-img" src={errorimg} alt="404"/>
            </div>
        )
    }
}

export default error;