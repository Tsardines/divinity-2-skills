import React, { Component } from 'react';

// import './Aero.css';

class Aero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://api.jsonbin.io/b/5c1d4f643f8bd92e4cc0ceef')
    .then(res => res.json())
    .then(data => {
      this.setState ({ items: data });
    });
  }


  render() {

    const { items } = this.state;

    return (

      <h1>hello</h1>

      { items.map((item, num) => {

        return (

          <div className="aero-wrap">

            <p key={num}>{item.skills}</p>
          
          </div>

        );
      })}
    );
  }
}

export default Aero;

