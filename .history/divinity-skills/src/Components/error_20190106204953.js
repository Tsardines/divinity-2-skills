import React, { Component } from 'react';
import error from './icons/error.jpg';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
                <img src={error} alt="404"/>
            </div>
        )
    }
}

export default error;