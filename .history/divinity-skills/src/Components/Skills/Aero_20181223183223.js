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
              <div>
                <span className="skill-desc"><p key={num}>{item.desc}</p></span>
                </div>
                {/* <span className="skill-spec"><p key={num}>{item.special}</p></span>
                <span className="skill-cool"><p key={num}>{item.cost}</p></span>
                <span className="skill-cost"><p key={num}>{item.cool}</p></span>
                <span className="skill-req"><p key={num}>{item.req}</p></span> */}

              </div>

            

          );
        })}
      </div>
    );
  }
}

export default Aero;

