import React, { Component } from 'react';

import './Skills.css';

class Geo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('#')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }


  render() {

    const { items } = this.state;
    
    return (

      <div className="wrapper">

        <span className="geo-title"><h1>Geomancer</h1></span>

      <div className="Geo">

        
        { items.map((item, num) => {

          return (

            <div className="geo-wrap">

              <tg>                
                <th><div className="skill-name">
                  <p key={num}>{item.name}</p>
                </div></th>
                
                <th><div className="skill-cost">
                  <p key={num}>Memory: {item.cost}</p>
                </div></th>

                <th><div className="skill-cool">
                  <p key={num}>Cooldown: {item.cool} turns</p>
                </div></th>

                <th><div className="skill-req">
                  <p key={num}>Requirements: {item.req} turns</p>
                </div></th>
              </tg>

              <tg>
                <th><div className="skill-desc">
                  <p key={num}>{item.desc}</p>
                </div></th>
              </tg>

              <tg>
                <th><div className="skill-img">
                  <p key={num}>{item.img}</p>
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

export default Geo;


