import React, { Component } from 'react';

import '../App.css';

class error extends Component {
    render() {
        return (
            <div className="error-div">
            <img src="https://www.freepik.com/free-vector/flat-404-error-template_1588635.htm" alt="404"/>
                {/* <span className="mssg"><h1>whoops</h1></span> */}
            </div>
        )
    }
}

export default error;