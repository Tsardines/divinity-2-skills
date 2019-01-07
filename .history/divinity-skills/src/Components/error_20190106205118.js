import React, { Component } from 'react';
import errorimg from './artwork/errorimg.jpg';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
                <span className="errorImgSpan"><img src={errorimg} alt="404"/></span>
            </div>
        )
    }
}

export default error;