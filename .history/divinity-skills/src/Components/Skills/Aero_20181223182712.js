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
    fetch('https://api.myjson.com/bins/1g1ags')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }

  render() {

    const { items } = this.state;
    
    return (
      <div className="Aero">

        { items.map((item, num) => {

          return (

            <div className="aero-wrap">

              <div className="skill">
                <span className="skill-name"><p key={num}>{item.name}</p></span>
              </div>

            </div>

          );
        })}
      </div>
    );
  }
}

export default Aero;

