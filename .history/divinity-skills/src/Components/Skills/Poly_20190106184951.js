import React, { Component } from 'react';

import './Skills.css';

class Poly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch('https://api.myjson.com/bins/1d3fl4')
    .then(res => res.json())
    .then(data => {
      this.setState({ items: data });
    });
  }

  render() {

    const { items } = this.state;
    
    return (

      <div className="poly-wrap">

        <span className="skill-title"><h1>Polymorph</h1></span>

        <div className="Poly">

          
          { items.map((item, num) => {

            return (

              <div className="skill-wrap">

                  <div className="skill-name">
                    <p key={num}>{item.name}</p>
                  </div>

                  <tg>

                    <div className="tier-2">
                  
                    <th><div className="skill-cost">
                      <p key={num}><strong>Memory:<br /></strong> {item.cost}</p>
                    </div></th>

                    <th><div className="skill-cool">
                      <p key={num}><strong>Cooldown:<br /></strong> {item.cool} turns</p>
                    </div></th>

                    <th><div className="skill-req">
                      <p key={num}><strong>Requirements:<br /></strong> {item.req}</p>
                    </div></th>

                    </div>
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

export default Poly;
