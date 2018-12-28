import React, { Component } from 'react';

import './Skills.css';

class Aero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://api.myjson.com/bins/1c6gs4')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }


  render() {

    const { items } = this.state;
    
    return (

      <div className="wrapper">

        <span className="skill-title"><h1>Aerotheurge</h1></span>

      <div className="Aero">

        
        { items.map((item, num) => {

          return (

            <div className="skill-wrap">

<div className="skill-name">
                  <p key={num}>{item.name}</p>
                </div>

              {/* <tg>                
                <th><div className="skill-name">
                  <p key={num}>{item.name}</p>
                </div></th> */}

                <tg>
                
                <th><div className="skill-cost">
                  <p key={num}>Memory: {item.cost}</p>
                </div></th>

                <th><div className="skill-cool">
                  <p key={num}>Cooldown: {item.cool} turns</p>
                </div></th>

                <th><div className="skill-req">
                  <p key={num}>Requirements: {item.req}</p>
                </div></th>
              </tg>

              <tg>
                <th><div className="skill-desc">
                  <p key={num}>{item.desc}</p>
                </div></th>
              </tg>

              <tg>
                <th><div className="skill-img">
                  <p>[Image]</p>
                </div></th>
              </tg>
                
            </div>
          );
        })}
        </div>

        </div>
    );
  }
}

export default Aero;

